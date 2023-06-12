"use client";
import React, { useState, useEffect } from "react";

export default function VirticalSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const [isLastStep, setIsLastStep] = useState(false);
  const [isFirstStep, setIsFirstStep] = useState(true);

  useEffect(() => {
    if (activeStep === 0) {
      setIsFirstStep(true);
    } else {
      setIsFirstStep(false);
    }
    if (activeStep === 3) {
      setIsLastStep(true);
    } else {
      setIsLastStep(false);
    }
  }, [activeStep]);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div className="w-full   py-5">
      <div className="w-full relative flex flex-col items-center justify-between h-[30rem] overflow-hidden py-2 ">
        {/* // gray line */}
        <div className="absolute  left-2/4 top-1/4 h-full  w-0.5 -translate-y-1/4 bg-blue-gray-200 " />

        {/* blue line  */}
        <div
          className="absolute  left-2/4   w-0.5 -translate-y-1/4 bg-blue-500 transition-all duration-500 "
          style={{ height: `${activeStep * 220}px` }}
        />

        {/* blue bage */}
        <div
          className={`relative z-10 grid place-items-center rounded-full text-white  ring-blue-100 font-bold transition-all duration-300 h-4 w-4 bg-blue-500 
        ${activeStep === 0 ? "ring-8" : "ring-0"}
        
        `}
        ></div>

        <div
          className={`relative z-10 grid place-items-center rounded-full text-white ring-blue-100 font-bold transition-all duration-300 h-4 w-4 bg-blue-500 
        
        ${activeStep === 1 ? "ring-8" : "ring-0"}

        `}
        ></div>

        <div
          className={`relative z-10 grid place-items-center rounded-full bg-blue-500
        
        text-white  ring-blue-100 font-bold transition-all duration-300 h-4 w-4
        ${activeStep === 2 ? "ring-8" : "ring-0"}
        
        `}
        />

        <div
          className={`relative z-10 grid place-items-center rounded-full bg-blue-500
        
        text-white  ring-blue-100 font-bold transition-all duration-300 h-4 w-4
        ${activeStep === 3 ? "ring-8" : "ring-0"}
        
        `}
        />
      </div>

      <div className="mt-16 flex justify-between">
        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          disabled={isFirstStep}
          onClick={() => handlePrev()}
        >
          Prev
        </button>

        <button
          className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-blue-500 text-white shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
          type="button"
          disabled={isLastStep}
          onClick={() => handleNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
}
