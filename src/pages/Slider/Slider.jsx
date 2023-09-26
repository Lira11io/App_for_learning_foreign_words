import { useState, useEffect } from "react";
import Card from "../../components/Card/Card";
import arr from "../../components/Data/vocabulary.json";
import style from "./slider.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleLeft, faCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Slider() {
  //сохраняем массив данных
  const [words, setWords] = useState([false]);

  //создаем переменную для сохранения текущего индекса карточки и устанавливаем ему первоначальное значение
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  //создаем состояние для отслеживания состояния кнопки "Показать перевод"
  const [showTranslation, setShowTranslation] = useState(false);

  //создаем состояние для отслеживания количества просмотренных слов
  const [count, setCount] = useState(0);

  //делаем запрос к массиву 1 раз, когда создается компонент
  useEffect(() => {
    setWords(arr);
  }, []);

  //создаем переменную для объекта массива
  const object = words[currentCardIndex];

  //создаем функцию, которая срабатывает на кнопке "Показать перевод"
  function handleShowTranslation() {
    setShowTranslation(!showTranslation);
    setCount(count + 1);
  }

  //создаем функцию, которая увеличивает индекс на один и листает карточку вправо
  const goToNextCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === arr.length - 1 ? 0 : prevIndex + 1
    );
    //если текущая карточка последняя, перейти на первую карточку
    //увеличить индекс на 1
    setShowTranslation(false); //сбрасываем состояние кнопки "Показать перевод" к первоначальному
  };

  //создаем функцию, которая уменьшает индекс на один и листает карточку влево
  const goToPreviousCard = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? arr.length - 1 : prevIndex - 1
    );
    //если текущая карточка первая, перейти на последнюю карточку
    //уменьшить индекс на 1
    setShowTranslation(false); //сбрасываем состояние кнопки "Показать перевод" к первоначальному
  };

  if (!words) {
    // если массив не был передан, то высвечивается сообщение о загрузке
    return <h1>loading</h1>;
  }

  return (
    <>
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
          showTranslation={showTranslation}
          handleShowTranslation={handleShowTranslation}
        />

        <button className={style.btn_next} onClick={goToNextCard}>
          <FontAwesomeIcon icon={faCircleRight} />
        </button>
      </div>
      <div className={style.count}>Изучено слов: {count}</div>
    </>
  );
}
