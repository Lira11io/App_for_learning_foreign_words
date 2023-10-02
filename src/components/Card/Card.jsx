import { useRef, useEffect } from "react";
import style from "./card.module.scss";

export default function Card(props) {
  const ref = useRef();

  //установливаю фокус на кнопку при монтировании компонента
  useEffect(() => ref.current.focus(), []);

  //установливаю фокус на кнопку каждый раз, когда меняется карточка (props.english)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [props.english]);

  //возвращаю разметку карточки
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.card_word}>{props.english}</div>
          <div className={style.card_transcription}>{props.transcription}</div>
          {props.showTranslation ? (
            <div
              className={style.card_translation}
              onClick={props.handleShowTranslation}
            >
              {props.russian}
            </div>
          ) : (
            <div className={style.card_button}>
              <button
                className={style.card_btn}
                onClick={props.handleShowTranslation}
                ref={ref}
              >
                Показать перевод
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
