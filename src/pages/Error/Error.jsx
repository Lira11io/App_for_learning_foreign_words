import style from "./error.module.scss";
import capibara from "../../components/img/capibara.png";

function Error() {
  return (
    <div className={style.container}>
      <img className={style.image} src={capibara} alt="ошибка 404" />
      <h1 className={style.error}>404</h1>
      <div className={style.text}>Oops! Looks like you're lost!</div>
    </div>
  );
}
export default Error;
