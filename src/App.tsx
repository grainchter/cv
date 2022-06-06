import { injectStyle } from "react-toastify/dist/inject-style";

import s from "./App.module.scss";
import Footer from "./footer/Footer";
import Header from "./header/Header";
import Main from "./main/Main";

function App() {
  injectStyle();
  return (
    <>
      <div className={s.wrap}>
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
}

export default App;
