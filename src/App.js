import { ModalProvider } from "react-modal-hook";
import { Root } from "./components/Root/Root";
import { DataProvider } from "./providers/DataProvider";
import { EditingProvider } from "./providers/EditingProvider";

export const App = () => {
  return (
    <EditingProvider>
      <DataProvider>
        <ModalProvider>
          <Root />
        </ModalProvider>
      </DataProvider>
    </EditingProvider>
  );
};
