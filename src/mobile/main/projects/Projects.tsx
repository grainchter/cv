import s from "./Projects.module.scss";

const MobileProjects = () => {
  const projects = [
    {
      id: "1",
      name: "Rick Shop",
      description: "Маркетплейс персонажей по вселенной Рика и Морти",
      demoLink: "https://rick-shop.herokuapp.com/rick-shop/",
      github: "https://github.com/grainchter/rick-shop",
      img: "https://i.ibb.co/F8vRrWd/3.png",
    },
    {
      id: "2",
      name: "Card game",
      description: "Карточная игра с покемонами",
      demoLink: "https://reactmarathonpokemongame.herokuapp.com/",
      github: "https://github.com/grainchter/react-marathon",
      img: "https://i.ibb.co/yYvc1gD/2.png",
    },
    {
      id: "3",
      name: "Magazine",
      description: "Одностраничное приложение, сверстанное по макету",
      demoLink: "https://grainchter.github.io/mag-magazine/",
      github: "https://github.com/grainchter/mag-magazine",
      img: "https://i.ibb.co/z8dKFQp/1.png",
    },
  ];

  return (
    <>
      <section id="projects">
        <div className={s.projectContainer}>
          <h1 className={s.title}>Проекты</h1>
          <div className={s.wrap}>
            {projects.map((item) => (
              <div className={s.container} key={item.id}>
                <div className={s.imgWrap}>
                  <img src={item.img} alt="" />
                </div>
                <p className={s.name}>{item.name}</p>
                <p className={s.description}>{item.description}</p>
                <a className={s.link} href={item.demoLink} target="_blank">
                  LIVE DEMO
                </a>
                <br />
                <a className={s.link} href={item.github} target="_blank">
                  github
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileProjects;
