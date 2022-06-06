import { Link, animateScroll as scroll } from "react-scroll";

import s from "./Header.module.scss";

const Header = () => {
  return (
    <header>
      <div className={s.wrap}>
        <div className={s.name}>
          <Link to="home" smooth={true} duration={1000} offset={-70}>
            Яна Казакова
          </Link>
        </div>
        <div className={s.menu}>
          <ul>
            <li>
              <Link to="experience" smooth={true} duration={1000} offset={-70}>
                ОПЫТ РАБОТЫ
              </Link>
            </li>
            <li>
              <Link to="education" smooth={true} duration={1000} offset={-70}>
                ОБРАЗОВАНИЕ
              </Link>
            </li>
            <li>
              <Link to="projects" smooth={true} duration={1000} offset={-70}>
                ПРОЕКТЫ
              </Link>
            </li>
            <li>
              <Link to="feedback" smooth={true} duration={1000} offset={-70}>
                НАПИСАТЬ
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
