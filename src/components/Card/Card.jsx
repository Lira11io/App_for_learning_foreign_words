import { useRef, useEffect } from "react";
import style from "./card.module.scss";

export default function Card(props) {
  //деструктурируем пропсы, доступные из компонента Slider
  const {
    english,
    transcription,
    russian,
    showTranslation,
    handleShowTranslation,
  } = props;

  const ref = useRef();

  //установливаю фокус на кнопку при монтировании компонента
  useEffect(() => ref.current.focus(), []);

  //установливаю фокус на кнопку каждый раз, когда меняется карточка (props.english)
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [english]);

  //возвращаю разметку карточки
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.card_word}>{english}</div>
          <div className={style.card_transcription}>{transcription}</div>
          {showTranslation ? (
            <div
              className={style.card_translation}
              onClick={handleShowTranslation}
            >
              {russian}
            </div>
          ) : (
            <div className={style.card_button}>
              <button
                className={style.card_btn}
                onClick={handleShowTranslation}
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
