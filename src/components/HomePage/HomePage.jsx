import style from "./homePage.module.scss";
import transformed from "../../components/img/transformed.png";

function HomePage() {
  return (
    <div className={style.container}>
      <img className={style.image} src={transformed} alt="логотип" />
    </div>
  );
}
export default HomePage;
