import About from "./About";
import s from "./AboutWrap.module.scss";

const AboutWrap = () => {
  return (
    <>
      <section id="home">
        <div className={s.parallax}>
          <About />
        </div>
      </section>
    </>
  );
};

export default AboutWrap;
