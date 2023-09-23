import style from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <nav className={style.footer_menu}>
        <a className={style.footer_link} href="url">
          Избранное
        </a>
        <a className={style.footer_link} href="/slider">
          Карточки слов
        </a>
        <a className={style.footer_link} href="/table">
          Список слов
        </a>
      </nav>
    </div>
  );
}
