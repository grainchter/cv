import s from "./About.module.scss";

const About = () => {
  return (
    <>
      {/* <div className={s.parallax}> */}
      <div className={s.wrap}>
        <div className={s.image}>
          <img src="https://i.ibb.co/JBQRtmf/photo1.jpg" alt="" />
        </div>
        <div className={s.description}>
          <div className={s.descHeader}>
            <h1 className={s.descHeaderTitle}>Яна Казакова</h1>
            <p>FRONTEND DEVELOPER</p>
          </div>
          <div className={s.descDescription}>
            <div className={s.phone}>
              <p className={s.descTitle}>Телефон:</p>
              <p>+7 (905) 081 23 45</p>
            </div>
            <div className={s.email}>
              <p className={s.descTitle}>Email:</p>
              <p>grainchter@gmail.com</p>
            </div>
            <div className={s.github}>
              <p className={s.descTitle}>Github:</p>
              <a
                className={s.link}
                href="https://github.com/grainchter"
                target="_blank"
              >
                https://github.com/grainchter
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
};

export default About;
