import { useState } from "react";
import vocabulary from "../Data/vocabulary.json";
import style from "./card.module.scss";
//import { useState } from "react";

export default function Card(props) {
  //const { english, transcription, russian} = props;
  const [button, setButton] = useState(true); //задаем состояние для кнопки "Показать перевод"

  //возвращаю разметку карточки
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.card_word}>слово</div>
          <div className={style.card_transcription}>транскрипция</div>
          <div className={style.card_translation}>перевод</div>
          <div className={style.card_button}>
            <bottom className={style.card_btn}>Показать перевод</bottom>
          </div>
        </div>
      </div>
    </>
  );
}
