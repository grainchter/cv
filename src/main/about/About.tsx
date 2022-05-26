import s from "./About.module.scss";

const About = () => {
  return (
    <>
      {/* <div className={s.parallax}> */}
      <div className={s.wrap}>
        <div className={s.image}>
          <img
            src="https://i.guim.co.uk/img/media/63de40b99577af9b867a9c57555a432632ba760b/0_266_5616_3370/master/5616.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=93458bbe24b9f88451ea08197888ab8e"
            alt=""
          />
        </div>
        <div className={s.description}>
          <h1 className={s.descHeader}>Яна Казакова</h1>
          <p>FRONTEND DEVELOPER</p>
          <p className={s.descTitle}>Телефон:</p>
          <p>+7 (905) 081 23 45</p>
          <p className={s.descTitle}>Email:</p>
          <p>grainchter@gmail.com</p>
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
      {/* </div> */}
    </>
  );
};

export default About;
