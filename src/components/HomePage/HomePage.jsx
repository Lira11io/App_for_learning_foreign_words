import { Link } from "react-router-dom";
import style from "./homePage.module.scss";
import transformed from "../../components/img/transformed.png";

function HomePage() {
  return (
    <div className={style.container}>
      <Link to="/table">
        <img className={style.image} src={transformed} alt="логотип" />
      </Link>
      <h1 className={style.title}>
        Привет! Добро пожаловать в наше приложение!
      </h1>
      <h2 className={style.headline}>Здесь тебе не будет скучно!</h2>
      <h2 className={style.slogan}>"УЧИСЬ, ИГРАЯ"</h2>
    </div>
  );
}
export default HomePage;
