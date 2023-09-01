import style from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <nav className={style.footer_menu}>
        <a className={style.footer_link} href="url">
          Выученные
        </a>
        <a className={style.footer_link} href="url">
          Карточки слов
        </a>
        <a className={style.footer_link} href="url">
          Список слов
        </a>
      </nav>
    </div>
  );
}
