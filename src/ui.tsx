import { Button, render } from "@create-figma-plugin/ui";
import { h } from "preact";
import "!./output.css";
import { emit } from "@create-figma-plugin/utilities";
import MainUI from "./ui/index";
import { ScreenContextProvider } from "./ui/contexts/ScreenContext";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function Plugin() {
  return (
    <QueryClientProvider client={queryClient}>
      <ScreenContextProvider>
        <MainUI />
      </ScreenContextProvider>
    </QueryClientProvider>
  );
}

export default render(Plugin);
