import MobileAboutWrap from "./about/AboutWrap";
import AboutWrap from "./about/AboutWrap";
import MobileAboutInfo from "./aboutInfo/AboutInfo";
import AboutInfo from "./aboutInfo/AboutInfo";
import MobileEducation from "./education/Education";
import Education from "./education/Education";
import MobileExperience from "./experience/Experience";
import Experience from "./experience/Experience";
import MobileFeedback from "./feedback/Feedback";
import Feedback from "./feedback/Feedback";
import s from "./Main.module.scss";
import MobileProjects from "./projects/Projects";
import Projects from "./projects/Projects";

const MobileMain = () => {
  return (
    <div className={s.wrap}>
      <MobileAboutWrap />
      <MobileAboutInfo />
      <MobileExperience />
      <MobileEducation />
      <MobileProjects />
      <MobileFeedback />
      {/* 


      <Projects />
      <Feedback /> */}
    </div>
  );
};

export default MobileMain;
