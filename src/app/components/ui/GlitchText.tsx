// import { useEffect, useState } from "react";

// const word = "Web Developer";

// export function GlitchText() {
//   const [glitchedIndices, setGlitchedIndices] = useState<number[]>([]);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       const count = Math.floor(Math.random() * 3) + 1;

//       const indices: number[] = [];

//       for (let i = 0; i < count; i++) {
//         indices.push(Math.floor(Math.random() * word.length));
//       }

//       setGlitchedIndices(indices);
//     }, 4000);

//     return () => clearInterval(interval);
//   }, []);

// return (
//   <h1 className="text-5xl sm:text-7xl font-bold text-black mb-6">
//     {word.split("").map((char, index) => {
//       const isGlitched = glitchedIndices.includes(index);

//       return (
//         <span
//           key={index}
//           className={`inline-block transition-all duration-300 ${
//             isGlitched ? "striped-text" : "text-[#ff4500]"
//           }`}
//         >
//           {char}
//         </span>
//       );
//     })}
//   </h1>
// );
// }
