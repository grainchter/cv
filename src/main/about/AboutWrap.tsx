import About from "./About";
import s from "./AboutWrap.module.scss";

const AboutWrap = () => {
  return (
    <>
      <section id="home">
        <div className={s.wrap}>
          <About />
        </div>
      </section>
    </>
  );
};

export default AboutWrap;
