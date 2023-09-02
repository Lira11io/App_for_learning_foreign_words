import { useState } from "react";
import style from "./card.module.scss";

export default function Card({ vocabulary }) {
  //задаем первоначальное состояние для кнопки, при котором перевод скрыт
  const [showTranslation, setShowTranslation] = useState(false);
  //добавляем состояние, которое означает, что перевод уже показан
  const [translationShown, setTranslationShown] = useState(false);

  //зададим функцию, вызываемую по клике на кнопку и передающую соответствующий перевод
  const handleShowTranslation = () => {
    if (!translationShown) {
      setShowTranslation(true);
      setTranslationShown(true);
    } else {
      setShowTranslation(false);
      setTranslationShown(false);
    }
  };

  //возвращаю разметку карточки
  return (
    <>
      <div className={style.container}>
        <div className={style.card}>
          <div className={style.card_word}>{vocabulary.english}</div>
          <div className={style.card_transcription}>
            {vocabulary.transcription}
          </div>
          {showTranslation ? (
            <div
              className={style.card_translation}
              onClick={handleShowTranslation}
            >
              {vocabulary.russian}
            </div>
          ) : (
            <div className={style.card_button}>
              <button
                className={style.card_btn}
                onClick={handleShowTranslation}
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
