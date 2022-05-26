import s from "./Projects.module.scss";

const Projects = () => {
  const projects = [
    {
      name: "Rick Shop",
      description: "Маркетплейс персонажей по вселенной Рика и Морти",
      demoLink: "https://rick-shop.herokuapp.com/rick-shop/",
      github: "https://github.com/grainchter/rick-shop",
      tool: "JavaScript",
    },
    {
      name: "Card game",
      description: "Карточная игра с покемонами",
      demoLink: "https://reactmarathonpokemongame.herokuapp.com/",
      github: "https://github.com/grainchter/react-marathon",
      tool: "JavaScript",
    },
    {
      name: "Magazine",
      description: "Одностраничное приложение, сверстанное по макету",
      demoLink: "https://grainchter.github.io/mag-magazine/",
      github: "https://github.com/grainchter/mag-magazine",
      tool: "JavaScript",
    },
  ];

  return (
    <>
      <section id="projects">
        <div className={s.projectContainer}>
          <h1 className={s.title}>Проекты</h1>
          <div className={s.wrap}>
            {projects.map((item) => (
              <div className={s.container}>
                <p className={s.name}>{item.name}</p>
                <p className={s.description}>{item.description}</p>
                <a className={s.link} href={item.demoLink} target="_blank">
                  LIVE DEMO
                </a>
                <br />
                <a className={s.link} href={item.github} target="_blank">
                  github
                </a>
                <p className={s.tool}>{item.tool}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
