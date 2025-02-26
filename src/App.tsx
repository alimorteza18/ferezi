import ProjectRoutes from "routes/ProjectRoutes";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n"; // Import your i18n configuration
import SelectLang from "layouts/selectLang/SelectLang";
import { TemporaryCartContextProvider } from "context/TemporaryCartContext";
import { CartContextProvider } from "context/CartContext";
import { ReactNotifications } from "react-notifications-component";
import 'react-notifications-component/dist/theme.css'

const App = () => {
  return (
    <I18nextProvider i18n={i18n}>
      <CartContextProvider>
        <TemporaryCartContextProvider>
          {/* <SelectLang /> */}
          <ReactNotifications />
          <ProjectRoutes />
        </TemporaryCartContextProvider>
      </CartContextProvider>
    </I18nextProvider>
  );
};

export default App;
