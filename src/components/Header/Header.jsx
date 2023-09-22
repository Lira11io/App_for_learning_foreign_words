import style from "./header.module.scss";

export default function Header() {
  return (
    <div className={style.header}>
      <nav className={style.header_menu}>
        <a className={style.header_link} href="url">
          О нас
        </a>
        {/* <a className={style.header_link} href="url">
          Все слова
        </a> */}
        <a className={style.header_link} href="url">
          Контакты
        </a>
      </nav>
    </div>
  );
}
