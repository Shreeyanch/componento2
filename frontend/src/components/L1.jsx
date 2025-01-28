// import { useState } from "react";
// import CircularProgressBar from "./CircularProgressBar";

// const L1 = () => {
//   const [points, setPoints] = useState(30);
//   const progress = (points / 100) * 100;

//   return (
//     <div className="w-60 shadow-[0px_25px_58px_rgba(1,_110,_73,_0.5)] rounded-3xs bg-seagreen-100 h-[340px] flex flex-col items-center justify-center py-1 px-2.5 box-border gap-1.5 text-left text-base text-white md:flex-col md:flex-wrap">
//       <CircularProgressBar progress={progress} iconSrc="/cup-icon.svg" />
//       <div className="w-[200px] flex flex-col items-center justify-start lg:w-full">
//         <div className="self-stretch flex flex-col items-center justify-center">
//           <div className="relative">Points</div>
//           <div className="self-stretch flex flex-row items-center justify-center text-11xl font-h1">
//             <div className="flex flex-row items-center justify-center">
//               <div className="w-[39px] relative h-9" id="point" point={points}>
//                 <b className="absolute top-[0px] left-[0px]">{points}</b>
//               </div>
//               <img
//                 className="w-6 relative h-6 overflow-hidden shrink-0"
//                 alt=""
//                 src="/interface--star.svg"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default L1;
import { useState } from "react";
import CircularProgressBar from "./CircularProgressBar";

const L1 = () => {
  const [points, setPoints] = useState(30);
  const progress = (points / 100) * 100;

  return (
    <div className="w-60 shadow-[0px_25px_58px_rgba(1,_110,_73,_0.5)] rounded-3xs1 bg-seagreen-100 h-[340px] flex flex-col items-center justify-center py-1 px-2.5 box-border gap-1.5 text-left text-base1 text-white md1:flex-col sm1:flex-wrap"> {/* Applied new borderRadius "rounded-3xs1", fontSize "text-base1", and screen breakpoints md1, sm1 */}
      <CircularProgressBar progress={progress} iconSrc="/cup-icon.svg" />
      <div className="w-[200px] flex flex-col items-center justify-start lg1:w-full"> {/* Applied lg1 breakpoint */}
        <div className="self-stretch flex flex-col items-center justify-center">
          <div className="relative">Points</div>
          <div className="self-stretch flex flex-row items-center justify-center text-11xl1 font-h1"> {/* Applied new font size "text-11xl1" */}
            <div className="flex flex-row items-center justify-center">
              <div className="w-[39px] relative h-9" id="point" point={points}>
                <b className="absolute top-[0px] left-[0px]">{points}</b>
              </div>
              <img
                className="w-6 relative h-6 overflow-hidden shrink-0"
                alt=""
                src="/interface--star.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default L1;
