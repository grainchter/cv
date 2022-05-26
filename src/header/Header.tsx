import { Link, animateScroll as scroll } from "react-scroll";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <div className={s.wrap}>
      <div className={s.name}>Яна Казакова</div>
      <div className={s.menu}>
        <ul>
          <li>
            <Link to="experience" smooth={true} duration={1000}>
              ОПЫТ РАБОТЫ
            </Link>
          </li>
          <li>
            <Link to="education" smooth={true} duration={1000}>
              ОБРАЗОВАНИЕ
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={1000}>
              ПРОЕКТЫ
            </Link>
          </li>
          <li>
            <Link to="feedback" smooth={true} duration={1000}>
              КОНТАКТЫ
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
