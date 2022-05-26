import AboutWrap from "./about/AboutWrap";
import AboutInfo from "./aboutInfo/AboutInfo";
import Education from "./education/Education";
import Experience from "./experience/Experience";
import Feedback from "./feedback/Feedback";
import s from "./Main.module.scss";
import Projects from "./projects/Projects";

const Main = () => {
  return (
    <div className={s.wrap}>
      <AboutWrap />
      <AboutInfo />
      <Experience />
      <Education />
      <Projects />
      <Feedback />
    </div>
  );
};

export default Main;
