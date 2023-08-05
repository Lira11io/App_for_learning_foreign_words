import style from "./footer.module.scss";

export default function Footer() {
  return (
    <div className={style.footer}>
      <nav className={style.footer_menu}>
        <ul className={style.footer_ul}>
          <li className={style.footer_li}>
            <a className={style.footer_link} href="url">
              Выученные
            </a>
          </li>
          <li className={style.footer_li}>
            <a className={style.footer_link} href="url">
              Карточки слов
            </a>
          </li>
          <li className={style.footer_li}>
            <a className={style.footer_link} href="url">
              Список слов
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
