import { injectStyle } from "react-toastify/dist/inject-style";
import { BrowserView, MobileView } from "react-device-detect";

import s from "./App.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";
import MobileFooter from "./mobile/footer/Footer";
import MobileHeader from "./mobile/header/Header";
import MobileMain from "./mobile/main/Main";

function App() {
  injectStyle();
  return (
    <>
      <BrowserView>
        <div className={s.wrap}>
          <Header />
          <Main />
        </div>
        <Footer />
      </BrowserView>
      <MobileView>
        <MobileHeader />
        <MobileMain />
        <MobileFooter />
      </MobileView>
    </>
  );
}

export default App;
