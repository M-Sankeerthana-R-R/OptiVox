'use client';

import { useEffect, useRef, useState } from 'react';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import axios from 'axios';

const BACKEND_URL = "https://3f40-2405-201-c012-b065-3c18-c260-fbb9-e124.ngrok-free.app/predict";

export default function Home() {
  const videoRef = useRef(null);
  const charRefs = useRef([]);
  const dwellTimers = useRef({});
  const lastSelectedChar = useRef(null);

  const [typedText, setTypedText] = useState('');
  const [status, setStatus] = useState('Ready');
  const [debug, setDebug] = useState('Initializing...');
  const [batchIndex, setBatchIndex] = useState(0);

  const keyboardBatches = [
    'ABCDEFGHI'.split(''),
    'JKLMNOPQR'.split(''),
    'STUVWXYZ '.split(''),
  ];
  const totalBatches = keyboardBatches.length;
  const dwellTime = 2000;

  useEffect(() => {
    if (typeof window !== 'undefined' && typeof window.webgazer !== 'undefined') {
      window.webgazer
        .setRegression('ridge')
        .setGazeListener((data) => {
          if (data == null) return;

          const { x, y } = data;

          charRefs.current.forEach((ref, index) => {
            if (!ref) return;
            const rect = ref.getBoundingClientRect();
            const isInside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

            if (isInside) {
              if (!dwellTimers.current[index]) {
                dwellTimers.current[index] = setTimeout(() => {
                  const selectedChar = keyboardBatches[batchIndex][index];
                  if (lastSelectedChar.current !== selectedChar) {
                    setTypedText((prev) => prev + selectedChar);
                    lastSelectedChar.current = selectedChar;
                    setStatus(`Selected: ${selectedChar}`);
                    setTimeout(() => (lastSelectedChar.current = null), 500);
                  }
                  clearTimeout(dwellTimers.current[index]);
                  dwellTimers.current[index] = null;
                }, dwellTime);
              }
            } else {
              if (dwellTimers.current[index]) {
                clearTimeout(dwellTimers.current[index]);
                dwellTimers.current[index] = null;
              }
            }
          });

          setDebug(`Gaze at x:${Math.round(x)}, y:${Math.round(y)}`);
        });

      window.webgazer.begin();
      window.webgazer.showVideo(false);
      window.webgazer.showPredictionPoints(true);

      setDebug('Eye tracking initialized');
    }
  }, [batchIndex]);

  const handleNextBatch = () => {
    setBatchIndex((prev) => (prev + 1) % totalBatches);
  };

  const handlePrevBatch = () => {
    setBatchIndex((prev) => (prev - 1 + totalBatches) % totalBatches);
  };

  const handleSpellCheck = async () => {
    try {
      const response = await axios.post(BACKEND_URL, { text: typedText });
      setTypedText(response.data.cleaned_input);
      setStatus('Spell-check applied');
    } catch (error) {
      setStatus('Spell-check failed');
    }
  };

  return (
    <>
      <Script src="https://webgazer.cs.brown.edu/webgazer.js" strategy="beforeInteractive" />

      <div className="flex h-screen overflow-hidden bg-gray-900 text-white">
        {/* Left Sidebar */}
        <div className="w-1/5 p-4 bg-gray-800 flex flex-col justify-between">
          <h3 className="text-xl font-bold mb-4">Typed Text</h3>
          <div className="min-h-[60%] text-2xl break-words mb-4">{typedText}</div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full"
            onClick={handleSpellCheck}
          >
            Apply Spell-Check
          </button>

          <button
            className="bg-red-500 text-white px-4 py-2 rounded w-full"
            onClick={() => setTypedText('')}
          >
            Reset Typed Text
          </button>
        </div>

        {/* Center Grid - Big Squares */}
        <div className="w-3/5 grid grid-cols-3 gap-4 p-4 bg-gray-700">
          {keyboardBatches[batchIndex].map((char, i) => (
            <div
              key={i}
              ref={(el) => (charRefs.current[i] = el)}
              className="bg-gray-800 flex items-center justify-center text-5xl font-bold border-2 border-gray-600 rounded-lg h-36 w-36"
            >
              {char}
            </div>
          ))}
        </div>

        {/* Right Sidebar */}
        <div className="w-1/5 bg-gray-800 p-4 flex flex-col justify-between items-center">
          <div className="flex justify-between items-center mb-4 w-full">
            <h2 className="text-lg font-bold">NeuroScribe</h2>
            <div className="flex space-x-2">
              <button className="bg-blue-500 px-2 py-1 rounded" onClick={handlePrevBatch}>
                ⏪
              </button>
              <span>Batch {batchIndex + 1}/{totalBatches}</span>
              <button className="bg-blue-500 px-2 py-1 rounded" onClick={handleNextBatch}>
                ⏩
              </button>
            </div>
          </div>

          {/* Status */}
          <div className="bg-gray-700 p-2 w-full text-center mb-2">{status}</div>
          <div className="bg-gray-700 p-2 w-full text-sm overflow-y-auto max-h-24">{debug}</div>
        </div>
      </div>
    </>
  );
}
