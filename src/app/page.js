"use client";
import React from "react";
import VirticalSteps from "@/components/VirticalSteps";

import {
  Stepper,
  Card,
  Step,
  Button,
  Typography,
} from "@material-tailwind/react";
import {
  CogIcon,
  UserIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [isLastStep, setIsLastStep] = React.useState(false);
  const [isFirstStep, setIsFirstStep] = React.useState(false);

  const handleNext = () => !isLastStep && setActiveStep((cur) => cur + 1);
  const handlePrev = () => !isFirstStep && setActiveStep((cur) => cur - 1);

  return (
    <div>
      <Card className="fixed  left-4 h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <VirticalSteps />
      </Card>

      <div className="w-[70%]  absolute right-10 py-4 px-8">
        <Stepper
          activeStep={activeStep}
          isLastStep={(value) => setIsLastStep(value)}
          isFirstStep={(value) => setIsFirstStep(value)}
        >
          <Step onClick={() => setActiveStep(0)}>
            <UserIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 0 ? "blue" : "blue-gray"}
              >
                Personal Details
              </Typography>
              <Typography
                color={activeStep === 0 ? "blue" : "gray"}
                className="font-normal"
              >
                Your name and email address.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(1)}>
            <CogIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 1 ? "blue" : "blue-gray"}
              >
                Security Details
              </Typography>
              <Typography
                color={activeStep === 1 ? "blue" : "gray"}
                className="font-normal"
              >
                Your password and secret key.
              </Typography>
            </div>
          </Step>
          <Step onClick={() => setActiveStep(2)}>
            <BuildingLibraryIcon className="h-5 w-5" />
            <div className="absolute -bottom-[4.5rem] w-max text-center">
              <Typography
                variant="h6"
                color={activeStep === 2 ? "blue" : "blue-gray"}
              >
                Organization Details
              </Typography>
              <Typography
                color={activeStep === 2 ? "blue" : "gray"}
                className="font-normal"
              >
                Your company details.
              </Typography>
            </div>
          </Step>
        </Stepper>
        <div className="mt-32 flex justify-between">
          <Button onClick={handlePrev} disabled={isFirstStep}>
            Prev
          </Button>
          <Button onClick={handleNext} disabled={isLastStep}>
            Next
          </Button>
        </div>
      </div>
    </div>
  );
}
