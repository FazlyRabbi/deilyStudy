"use client"
import React, {useState} from "react";

import { Stepper, Step, Button } from "@material-tailwind/react";
 
export default function Steps() {

  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(false);
 
  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);
 
  return (
    <div className="w-full py-4 px-8">
      
      <Stepper
    
        activeStep={activeStep}
        isLastStep={(value) => setIsLastStep(value)}
        isFirstStep={(value) => setIsFirstStep(value)}
      >
        <Step className="h-4 w-4" onClick={() => setActiveStep(0)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(1)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(2)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(3)} />
        <Step className="h-4 w-4" onClick={() => setActiveStep(4)} />
      </Stepper>

      <div className="mt-16 flex justify-between">
        <Button onClick={handlePrev} disabled={isFirstStep}>
          Prev
        </Button>
        <Button onClick={handleNext} disabled={isLastStep}>
          Next
        </Button>
      </div>

      
    </div>
  );
}





// <div className="w-full py-4 px-8">
// <div className="w-full relative flex items-center justify-between">
//   <div className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-blue-gray-200" />
//   <div
//     className="absolute left-0 top-2/4 h-0.5 w-full -translate-y-2/4 bg-blue-500 transition-all duration-500"
//     style={{ width: 0 }}
//   />
//   <div className="relative z-10 grid place-items-center rounded-full text-white ring-blue-100 font-bold transition-all duration-300 h-4 w-4 bg-blue-500 ring-8" />
//   <div className="relative z-10 grid place-items-center rounded-full bg-blue-gray-200 text-white ring-0 ring-blue-100 font-bold transition-all duration-300 h-4 w-4" />
//   <div className="relative z-10 grid place-items-center rounded-full bg-blue-gray-200 text-white ring-0 ring-blue-100 font-bold transition-all duration-300 h-4 w-4" />
//   <div className="relative z-10 grid place-items-center rounded-full bg-blue-gray-200 text-white ring-0 ring-blue-100 font-bold transition-all duration-300 h-4 w-4" />
//   <div className="relative z-10 grid place-items-center rounded-full bg-blue-gray-200 text-white ring-0 ring-blue-100 font-bold transition-all duration-300 h-4 w-4" />
// </div>
// <div className="mt-16 flex justify-between">
//   <button
  
//     className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
//     type="button"
//     disabled=""
//   >
//     Prev
//   </button>
//   <button
//     className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
//     type="button"
//   >
//     Next
//   </button>
// </div>
// </div>