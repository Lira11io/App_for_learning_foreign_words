import { useState, useEffect } from "react";
import Card from "../Card/Card";
import arr from "../Data/vocabulary.json";
import style from "./slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  //сохраняем массив данных
  const [words, setWords] = useState([false]);

  //создаем переменную для сохранения текущего индекса карточки и устанавливаем ему первоначальное значение
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  //делаем запрос к массиву 1 раз, когда создается компонент
  useEffect(() => {
    setWords(arr);
  }, []);

  //создаем переменную для объекта массива
  const object = words[currentCardIndex];

  //создаем состояние для кнопки перевода
  //const [translated, setTranslated] = useState(true);

  //создаем функцию, которая срабатывает на кнопке "Показать перевод"
  /*  function showTranslation() {
    setTranslated(!translated);
  } */

  //создаем функцию, которая увеличивает индекс на один и листает карточку вправо
  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) => {
      if (prevIndex === arr.length - 1) {
        //если текущая карточка последняя
        return 0; //перейти на первую карточку
      } else {
        return prevIndex + 1; //увеличить индекс на 1
      }
    });
  };

  //создаем функцию, которая уменьшает индекс на один и листает карточку влево
  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) => {
      if (prevIndex === 0) {
        //если текущая карточка первая
        return arr.length - 1; //перейти на последнюю карточку
      } else {
        return prevIndex - 1; //уменьшить индекс на 1
      }
    });
  };

  if (!words) {
    // если массив не был передан, то высвечивается сообщение о загрузке
    return <h1>loading</h1>;
  }

  return (
    <div className={style.slider}>
      <button className={style.btn_prev} onClick={goToPreviousCard}>
        <FontAwesomeIcon icon={faCircleLeft} />
      </button>

      <Card
        english={object.english}
        transcription={object.transcription}
        russian={object.russian}
        index={object.index}
        key={object.index}
        //translated={translated}
        //showTranslation={showTranslation}
      />

      <button className={style.btn_next} onClick={goToNextCard}>
        <FontAwesomeIcon icon={faCircleRight} />
      </button>
    </div>
  );
}
