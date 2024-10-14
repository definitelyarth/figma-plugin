import { createContext, h } from "preact";
import { FC, SetStateAction } from "preact/compat";
import { Dispatch, useContext, useEffect, useState } from "preact/hooks";
import Login from "../screens/Login";
import PrepareToExport from "../screens/PrepareToExport";
import { useQuery } from "react-query";
import Loader from "../components/Loader";
import { useIsLoggedIn } from "../state/queries";
import { emit } from "@create-figma-plugin/utilities";
import { TransformOutput } from "../../transformers/types";

type ScreenContextT = {
  currStep: number;
  selection: TransformOutput | undefined;
  CurrScreen: () => h.JSX.Element;
  nextStep: () => void;
  prevStep: () => void;
};

const screenContext = createContext<ScreenContextT>({
  currStep: 0,
  CurrScreen: () => <div></div>,
  nextStep: () => {},
  prevStep: () => {},
  selection: undefined,
});

const ScreenContextProvider: FC = ({ children }) => {
  const [selection, setSelection] = useState<undefined | TransformOutput>();

  const [userId, setUserId] = useState<null | string>(null);
  const [sessionId, setSessionId] = useState<null | string>(null);

  const [currStep, setCurrStep] = useState(0);

  useEffect(() => {
    onmessage = async (e) => {
      const event = e.data.pluginMessage as {
        event: string;
        data: unknown;
      };
      console.log(event);
      if (event.event === "get-value") {
        const { key, value } = event.data as {
          key: "userId" | "sessionId";
          value: string | null;
        };
        if (key === "sessionId") {
          setSessionId(value);
        } else if (key === "userId") {
          setUserId(value);
        }
      } else if (event.event === "selection") {
        setSelection(event.data as TransformOutput);
      }
    };

    emit("get-value", { key: "userId" });
    emit("get-value", { key: "sessionId" });
  }, []);

  // const { data, isLoading, isError, refetch } = useIsLoggedIn({
  //   userId,
  //   sessionId,
  // });

  // useEffect(() => {
  //   refetch();
  // }, [userId, sessionId]);

  // if (isError) {
  //   return <h1>error</h1>;
  // }

  // if (isLoading) {
  //   return <Loader />;
  // }

  const Steps = [PrepareToExport];
  const CurrScreen = Steps[0];

  // if (!data) {
  //   return <Login />;
  // }

  return (
    <screenContext.Provider
      value={{
        selection,
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
