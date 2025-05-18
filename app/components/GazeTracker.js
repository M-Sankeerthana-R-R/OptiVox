// 'use client';

// import { useEffect, useRef, useState } from 'react';

// const GazeTracker = () => {
//   const [focusedChar, setFocusedChar] = useState(null);
//   const [typedText, setTypedText] = useState('');
//   const boxesRef = useRef({});
//   const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

//   useEffect(() => {
//     const loadWebGazer = async () => {
//       const webgazer = await import('webgazer');
//       webgazer.default.setGazeListener((data) => {
//         if (!data) return;

//         for (let char of characters) {
//           const box = boxesRef.current[char];
//           if (box) {
//             const rect = box.getBoundingClientRect();
//             if (
//               data.x > rect.left &&
//               data.x < rect.right &&
//               data.y > rect.top &&
//               data.y < rect.bottom
//             ) {
//               setFocusedChar(char);
//               return;
//             }
//           }
//         }

//         setFocusedChar(null);
//       }).begin();
//     };

//     loadWebGazer();
//   }, []);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === ' ') {
//         if (focusedChar) {
//           setTypedText((prev) => prev + focusedChar);
//         }
//       } else if (e.key === 'Backspace') {
//         setTypedText((prev) => prev.slice(0, -1));
//       }
//     };

//     window.addEventListener('keydown', handleKeyDown);
//     return () => window.removeEventListener('keydown', handleKeyDown);
//   }, [focusedChar]);

//   return (
//     <div style={{ padding: '20px' }}>
//       <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '10px' }}>NeuroScribe</h1>
//       <div id="output" style={{ textAlign: 'center', fontSize: '1.5rem', marginBottom: '20px' }}>
//         {typedText}
//       </div>
//       <div
//         id="keyboard"
//         style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(6, 60px)',
//           gap: '10px',
//           justifyContent: 'center',
//         }}
//       >
//         {characters.map((char) => (
//           <div
//             key={char}
//             ref={(el) => (boxesRef.current[char] = el)}
//             className="key"
//             style={{
//               width: '60px',
//               height: '60px',
//               lineHeight: '60px',
//               textAlign: 'center',
//               border: '2px solid #000',
//               borderRadius: '5px',
//               backgroundColor: focusedChar === char ? '#87CEEB' : '#fff',
//               transition: 'background-color 0.2s ease',
//               fontSize: '20px',
//               fontWeight: 'bold',
//             }}
//           >
//             {char}
//           </div>
//         ))}
//       </div>
//       <p style={{ marginTop: '20px', textAlign: 'center', color: '#555' }}>
//         Look at a character and press <strong>Space</strong> to type, <strong>Backspace</strong> to delete.
//       </p>
//     </div>
//   );
// };

// export default GazeTracker;
