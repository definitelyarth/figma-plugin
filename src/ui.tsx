import { Button, render } from "@create-figma-plugin/ui";
import { h } from "preact";
import "!./output.css";
import { emit } from "@create-figma-plugin/utilities";
import MainUI from "./ui/index";
import { ScreenContextProvider } from "./ui/contexts/ScreenContext";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();

function Plugin() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <ScreenContextProvider>
        <MainUI />
      </ScreenContextProvider>
      <Button
        onClick={() => {
          emit("printSelected");
        }}
      >
        Print Selected
      </Button>
    </QueryClientProvider>
  );
}

export default render(Plugin);
