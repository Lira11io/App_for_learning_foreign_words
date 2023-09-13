import style from "./card.module.scss";

export default function Card(props) {
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
