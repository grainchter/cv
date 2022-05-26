import About from "./About";
import s from "./AboutWrap.module.scss";

const AboutWrap = () => {
  return (
    <>
      <div className={s.parallax}>
          <About />
      </div>
    </>
  );
};

export default AboutWrap;
