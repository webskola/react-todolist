import { Root } from "./components/Root/Root";
import { DataProvider } from "./providers/DataProvider";
import { EditingProvider } from "./providers/EditingProvider";

export const App = () => {
  return (
    <EditingProvider>
      <DataProvider>
        <Root />
      </DataProvider>
    </EditingProvider>
  );
};
