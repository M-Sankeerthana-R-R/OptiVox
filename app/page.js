import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}



// File: app/page.js

// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Script from 'next/script';

// export default function Home() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const typedTextRef = useRef(null);
//   const [status, setStatus] = useState('Ready');
//   const [debug, setDebug] = useState('Eye tracking not initialized');
//   const [batchIndex, setBatchIndex] = useState(0);
//   const totalBatches = 3;

//   useEffect(() => {
//     if (typeof window !== 'undefined') {
//       const video = videoRef.current;
//       const canvas = canvasRef.current;
//       if (video && canvas) {
//         // Initialize webcam here (WebGazer or MediaPipe logic goes here)
//         setDebug('Eye tracking initialized');
//       }
//     }
//   }, []);

//   const handleNextBatch = () => {
//     setBatchIndex((prev) => (prev + 1) % totalBatches);
//   };

//   const handlePrevBatch = () => {
//     setBatchIndex((prev) => (prev - 1 + totalBatches) % totalBatches);
//   };

//   return (
//     <>
//       <Script src="https://webgazer.cs.brown.edu/webgazer.js" strategy="beforeInteractive" />
//       <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/face_mesh.js" strategy="beforeInteractive" />
//       <Script src="https://cdn.jsdelivr.net/npm/@mediapipe/camera_utils/camera_utils.js" strategy="beforeInteractive" />

//       <div className="flex h-screen overflow-hidden">
//         {/* Text Output */}
//         <div className="w-1/5 p-4 bg-gray-100 border-r-2 border-gray-300 overflow-y-auto">
//           <h3 className="text-xl font-bold mb-4">Typed Text</h3>
//           <div id="typedText" ref={typedTextRef} className="min-h-[60%] text-2xl"></div>
//           <div className="mt-4">
//             <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full">Calibrate Eye Tracker</button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded w-full">Reset Gaze Tracking</button>
//           </div>
//         </div>

//         {/* Keyboard */}
//         <div className="relative w-3/5 grid grid-cols-3 grid-rows-3 gap-1 bg-gray-300 h-screen p-2">
//           {/* Add keys dynamically or statically */}
//           {[...'ABCDEFGHI'].map((char, i) => (
//             <div key={i} className="flex items-center justify-center text-4xl font-bold bg-white border-2 border-gray-400 rounded-lg">
//               {char}
//             </div>
//           ))}
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
//             <div className="absolute top-0 left-0 h-full w-[15%] bg-red-100 opacity-10" />
//             <div className="absolute top-0 right-0 h-full w-[15%] bg-red-100 opacity-10" />
//           </div>
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//             {[...Array(totalBatches)].map((_, idx) => (
//               <div key={idx} className={`w-4 h-4 rounded-full ${idx === batchIndex ? 'bg-blue-500 scale-110' : 'bg-gray-500'}`} />
//             ))}
//           </div>
//           <div className="absolute top-1/2 left-5 -translate-y-1/2 text-white text-2xl opacity-70">◀</div>
//           <div className="absolute top-1/2 right-5 -translate-y-1/2 text-white text-2xl opacity-70">▶</div>
//         </div>

//         {/* Video + Controls */}
//         <div className="w-1/5 bg-gray-900 text-white flex flex-col items-center p-4">
//           <h3 className="text-xl mb-2">NeuroScribe</h3>
//           <div className="flex justify-between w-full mb-2">
//             <div onClick={handlePrevBatch} className="bg-blue-500 px-4 py-1 rounded cursor-pointer">◀</div>
//             <div>Batch {batchIndex + 1}/{totalBatches}</div>
//             <div onClick={handleNextBatch} className="bg-blue-500 px-4 py-1 rounded cursor-pointer">▶</div>
//           </div>
//           <div className="relative w-full mb-4">
//             <video ref={videoRef} autoPlay muted className="w-full h-auto border-2 border-gray-300 rounded" />
//             <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full rounded" />
//           </div>
//           <div className="bg-gray-800 w-full text-center py-2 rounded">{status}</div>
//           <div className="bg-gray-800 w-full text-sm mt-2 p-2 rounded overflow-y-auto max-h-[100px]">{debug}</div>
//         </div>
//       </div>
//     </>
//   );
// }



// 'use client';

// import dynamic from 'next/dynamic';
// import Script from 'next/script';

// const GazeTracker = dynamic(() => import('./components/GazeTracker'), { ssr: false });

// export default function Home() {
//   return (
//     <>
//       <Script
//         src="https://webgazer.cs.brown.edu/webgazer.js"
//         strategy="beforeInteractive"
//       />
//       <main>
//         <GazeTracker />
//       </main>
//     </>
//   );
// }



// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import Script from 'next/script';

// export default function Home() {
//   const videoRef = useRef(null);
//   const canvasRef = useRef(null);
//   const typedTextRef = useRef(null);
//   const [status, setStatus] = useState('Ready');
//   const [debug, setDebug] = useState('Initializing...');
//   const [typedText, setTypedText] = useState('');
//   const [batchIndex, setBatchIndex] = useState(0);

//   const keyboardBatches = [
//     'ABCDEFGHI'.split(''),
//     'JKLMNOPQR'.split(''),
//     'STUVWXYZ '.split(''),
//   ];
//   const totalBatches = keyboardBatches.length;

//   const charRefs = useRef([]);
//   const dwellTime = 2000; // 2 seconds
//   const dwellTimers = useRef({});
//   const lastSelectedChar = useRef(null);

//   useEffect(() => {
//     if (typeof window !== 'undefined' && typeof window.webgazer !== 'undefined') {
//       window.webgazer
//   .setRegression('ridge')
//   .setGazeListener((data, elapsedTime) => {
//     if (data == null) return;
//     const x = data.x;
//     const y = data.y;

//     charRefs.current.forEach((ref, index) => {
//       if (!ref) return;
//       const rect = ref.getBoundingClientRect();
//       const isInside = x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom;

//       if (isInside) {
//         if (!dwellTimers.current[index]) {
//           dwellTimers.current[index] = setTimeout(() => {
//             const selectedChar = keyboardBatches[batchIndex][index];
//             if (lastSelectedChar.current !== selectedChar) {
//               setTypedText((prev) => prev + selectedChar);
//               lastSelectedChar.current = selectedChar;
//               setStatus(`Selected: ${selectedChar}`);
//               setTimeout(() => (lastSelectedChar.current = null), 500);
//             }
//             clearTimeout(dwellTimers.current[index]);
//             dwellTimers.current[index] = null;
//           }, dwellTime);
//         }
//       } else {
//         if (dwellTimers.current[index]) {
//           clearTimeout(dwellTimers.current[index]);
//           dwellTimers.current[index] = null;
//         }
//       }
//     });

//     setDebug(`Gaze at x:${Math.round(x)}, y:${Math.round(y)}`);
//   });

// window.webgazer.begin();
// window.webgazer.showVideo(false);
// window.webgazer.showPredictionPoints(true);
// window.webgazer.showFaceOverlay(true);
// window.webgazer.showFaceFeedbackBox(true);


//       setDebug('Eye tracking initialized');
//     }
//   }, [batchIndex]);

//   const handleNextBatch = () => {
//     setBatchIndex((prev) => (prev + 1) % totalBatches);
//   };

//   const handlePrevBatch = () => {
//     setBatchIndex((prev) => (prev - 1 + totalBatches) % totalBatches);
//   };

//   return (
//     <>
//       <Script src="https://webgazer.cs.brown.edu/webgazer.js" strategy="beforeInteractive" />

//       <div className="flex h-screen overflow-hidden">
//         {/* Text Output */}
//         <div className="w-1/5 p-4 bg-gray-100 border-r-2 border-gray-300 overflow-y-auto">
//           <h3 className="text-xl font-bold mb-4">Typed Text</h3>
//           <div className="min-h-[60%] text-2xl break-words">{typedText}</div>
//           <div className="mt-4">
//             <button
//               className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full"
//               onClick={() => window.webgazer?.begin()}
//             >
//               Calibrate Eye Tracker
//             </button>
//             <button
//               className="bg-red-500 text-white px-4 py-2 rounded w-full"
//               onClick={() => setTypedText('')}
//             >
//               Reset Typed Text
//             </button>
//           </div>
//         </div>

//         {/* Keyboard */}
//         <div className="relative w-3/5 grid grid-cols-3 grid-rows-3 gap-2 bg-gray-300 h-screen p-2">
//           {keyboardBatches[batchIndex].map((char, i) => (
//             <div
//               key={i}
//               ref={(el) => (charRefs.current[i] = el)}
//               className="flex items-center justify-center text-4xl font-bold bg-white border-2 border-gray-400 rounded-lg transition-all duration-200 hover:scale-105"
//             >
//               {char}
//             </div>
//           ))}

//           {/* Side Overlays */}
//           <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
//             <div className="absolute top-0 left-0 h-full w-[15%] bg-red-100 opacity-10" />
//             <div className="absolute top-0 right-0 h-full w-[15%] bg-red-100 opacity-10" />
//           </div>

//           {/* Page Indicators */}
//           <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
//             {[...Array(totalBatches)].map((_, idx) => (
//               <div key={idx} className={`w-4 h-4 rounded-full ${idx === batchIndex ? 'bg-blue-500 scale-110' : 'bg-gray-500'}`} />
//             ))}
//           </div>

//           {/* Manual Arrows */}
//           <div
//             className="absolute top-1/2 left-5 -translate-y-1/2 text-white text-2xl opacity-70 cursor-pointer"
//             onClick={handlePrevBatch}
//           >
//             ◀
//           </div>
//           <div
//             className="absolute top-1/2 right-5 -translate-y-1/2 text-white text-2xl opacity-70 cursor-pointer"
//             onClick={handleNextBatch}
//           >
//             ▶
//           </div>
//         </div>

//         {/* Video + Status */}
//         <div className="w-1/5 bg-gray-900 text-white flex flex-col items-center p-4">
//           <h3 className="text-xl mb-2">NeuroScribe</h3>
//           <div className="flex justify-between w-full mb-2">
//             <div onClick={handlePrevBatch} className="bg-blue-500 px-4 py-1 rounded cursor-pointer">◀</div>
//             <div>Batch {batchIndex + 1}/{totalBatches}</div>
//             <div onClick={handleNextBatch} className="bg-blue-500 px-4 py-1 rounded cursor-pointer">▶</div>
//           </div>
//           <video ref={videoRef} autoPlay muted className="w-full h-auto border-2 border-gray-300 rounded mb-4 hidden" />
//           <canvas ref={canvasRef} className="hidden" />
//           <div className="bg-gray-800 w-full text-center py-2 rounded">{status}</div>
//           <div className="bg-gray-800 w-full text-sm mt-2 p-2 rounded overflow-y-auto max-h-[100px]">{debug}</div>
//         </div>
//       </div>
//     </>
//   );
// }
