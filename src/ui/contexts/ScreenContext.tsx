import { createContext, h } from "preact";
import { FC, SetStateAction } from "preact/compat";
import { Dispatch, useContext, useEffect, useState } from "preact/hooks";
import Login from "../screens/Login";
import PrepareToExport from "../screens/PrepareToExport";
import Loader from "../components/Loader";
import { useIsLoggedIn } from "../state/queries";
import { emit } from "@create-figma-plugin/utilities";
import ReadyForExport from "../screens/ReadyForExport";
import { Variant } from "src/types";
import { TransformOutput } from "src/transformers/types";

type ScreenContextT = {
  currStep: number;
  selection: TransformOutput | undefined;
  CurrScreen: () => h.JSX.Element;
  nextStep: () => void;
  prevStep: () => void;
  userId: string | null;
  sessionId: string | null;
  finalDoc: TransformOutput["rpf"] | null;
  preview: undefined | Variant[];
  setFinalDoc: Dispatch<SetStateAction<TransformOutput["rpf"] | null>>;
  lockedSelection: TransformOutput | undefined;
  setLockedSelection: Dispatch<SetStateAction<TransformOutput | undefined>>;
  isError: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
  isLoading: boolean;
  uploadProgress: number;
  setUploadProgress: Dispatch<SetStateAction<number>>;
};

const screenContext = createContext<ScreenContextT>({
  currStep: 0,
  CurrScreen: () => <div></div>,
  nextStep: () => {},
  prevStep: () => {},
  selection: undefined,
  userId: null,
  sessionId: null,
  finalDoc: null,
  setFinalDoc: () => {},
  preview: undefined,
  lockedSelection: undefined,
  setLockedSelection: () => {},
  isError: false,
  setIsError: () => {},
  isLoading: false,
  uploadProgress: 0,
  setUploadProgress: () => {},
});

const ScreenContextProvider: FC = ({ children }) => {
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selection, setSelection] = useState<undefined | TransformOutput>();
  const [lockedSelection, setLockedSelection] = useState<
    undefined | TransformOutput
  >();
  const [finalDoc, setFinalDoc] = useState<null | TransformOutput["rpf"]>(null);
  const [preview, setPreview] = useState<Variant[] | undefined>(undefined);

  const [userId, setUserId] = useState<null | string>(null);
  const [sessionId, setSessionId] = useState<null | string>(null);

  const [currStep, setCurrStep] = useState(0);

  useEffect(() => {
    onmessage = async (e) => {
      const event = e.data.pluginMessage as {
        event: string;
        data: unknown;
      };
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
      } else if (event.event === "preview-export") {
        setPreview(event.data as Variant[]);
      } else if (event.event === "loading") {
        setIsLoading(event.data as boolean);
      }
    };

    emit("get-value", { key: "userId" });
    emit("get-value", { key: "sessionId" });
  }, []);

  const {
    data,
    isLoading: isLoginLoading,
    refetch,
  } = useIsLoggedIn({
    userId,
    sessionId,
  });

  useEffect(() => {
    refetch();
  }, [userId, sessionId]);

  if (isLoginLoading) {
    return <Loader />;
  }

  const Steps = [PrepareToExport, ReadyForExport];
  const CurrScreen = Steps[currStep];

  if (!data) {
    return <Login />;
  }

  return (
    <screenContext.Provider
      value={{
        uploadProgress,
        setUploadProgress,
        isLoading,
        isError,
        setIsError,
        lockedSelection,
        setLockedSelection,
        preview,
        finalDoc,
        setFinalDoc,
        selection,
        CurrScreen,
        currStep,
        nextStep: () => {
          if (currStep < Steps.length - 1) setCurrStep((s) => s + 1);
        },
        prevStep: () => {
          if (currStep > 0) setCurrStep((s) => s - 1);
        },
        userId,
        sessionId,
      }}
    >
      {children}
    </screenContext.Provider>
  );
};

const useScreenContext = () => useContext(screenContext);

export { useScreenContext, ScreenContextProvider };
