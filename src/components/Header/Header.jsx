import { Link } from "react-router-dom";
import style from "./header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <nav className={style.header_menu}>
        <Link className={style.header_link} to="/">
          О нас
        </Link>
        <Link className={style.header_link} to="/table">
          Все слова
        </Link>
        <a className={style.header_link} href="url">
          Контакты
        </a>
      </nav>
    </div>
  );
}
