import { createContext, h } from "preact";
import { FC, SetStateAction } from "preact/compat";
import { Dispatch, useContext, useState } from "preact/hooks";
import Login from "../ui/screens/Login";

type ScreenContextT = {
  currStep: number;
  CurrScreen: () => h.JSX.Element;
  nextStep: () => void;
  prevStep: () => void;
};

const screenContext = createContext<ScreenContextT>({
  currStep: 0,
  CurrScreen: () => <div></div>,
  nextStep: () => {},
  prevStep: () => {},
});

const ScreenContextProvider: FC = ({ children }) => {
  const [currStep, setCurrStep] = useState(0);

  const Steps = [Login];
  const CurrScreen = Steps[currStep];

  return (
    <screenContext.Provider
      value={{
        CurrScreen,
        currStep,
        nextStep: () => {
          if (currStep < Steps.length - 1) setCurrStep((s) => s + 1);
        },
        prevStep: () => {
          if (currStep > 0) setCurrStep((s) => s - 1);
        },
      }}
    >
      {children}
    </screenContext.Provider>
  );
};

const useScreenContext = () => useContext(screenContext);

export { useScreenContext, ScreenContextProvider };
