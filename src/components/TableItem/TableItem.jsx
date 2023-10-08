import { useState } from "react";
import style from "./tableItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome.js";

export default function TableItem(props) {
  const [deleted, setDeleted] = useState(true); //задаем состояние для кнопки удаления
  const [edit, setEdit] = useState(true); //задаем состояние для кнопки редактирования

  //добавим новые состояния для значений в инпутах
  const [newEnglish, setNewEnglish] = useState(props.english);
  const [newTranscription, setNewTranscription] = useState(props.transcription);
  const [newRussian, setNewRussian] = useState(props.russian);

  //создаем состояние для отслеживания ошибок в полях
  const [errors, setErrors] = useState({});

  //создаем функцию для кнопки удаления, которая будет менять состояние на deleted - false
  function deleteWord() {
    setDeleted(!deleted);
  }
  //создаем функцию для кнопки редактирования, которая будет менять состояние на edit - false и возвращает первоначальные значения
  function editWord() {
    setNewEnglish(props.english);
    setNewTranscription(props.transcription);
    setNewRussian(props.russian);
    setEdit(!edit);
  }

  //создаем функцию для сохранения изменений
  function saveChanges() {
    //проверка на пустые поля
    if (newEnglish === "" || newTranscription === "" || newRussian === "") {
      setErrors({
        english: newEnglish === "",
        transcription: newTranscription === "",
        russian: newRussian === "",
      });
      alert("Ошибка! Не все поля заполнены.");
      return; // прекращаем выполнение функции в случае ошибки
    }

    //проверка на ввод слов на латинице
    if (!/^[a-zA-Z]+$/i.test(newEnglish)) {
      setErrors({
        ...errors,
        latin: true,
      });
      alert("Ошибка! Вводите только слова на латинице.");
      return;
    }
    //проверка на ввод слов на кириллице
    if (!/^[а-яё]+$/i.test(newRussian)) {
      setErrors({
        ...errors,
        cyrillic: true,
      });
      alert("Ошибка! Вводите только слова на кириллице.");
      return;
    }
    setEdit(!edit); //возвращаем первоначальный вид кнопки редактировать
    console.log(
      `В таблицу внесено изменение:`,
      newEnglish,
      newTranscription,
      newRussian
    );
  }

  return (
    <div
      className={
        deleted === true ? style.tableitem_row : style.tableitem_row_noDisplay
      }
    >
      {edit === true ? (
        <div className={style.tableitem_col}>{newEnglish}</div>
      ) : (
        <input
          className={
            errors.english
              ? `${style.tableitem_input} ${style.input_error}`
              : style.tableitem_input
          }
          placeholder={props.english}
          value={newEnglish}
          onChange={(e) => {
            setNewEnglish(e.target.value);
            setErrors({ ...errors, english: false, latin: false }); //сбрасываем ошибку при изменении значения
          }}
        ></input>
      )}
      {edit === true ? (
        <div className={style.tableitem_col}>{newTranscription}</div>
      ) : (
        <input
          className={
            errors.transcription
              ? `${style.tableitem_input} ${style.input_error}`
              : style.tableitem_input
          }
          placeholder={props.transcription}
          value={newTranscription}
          onChange={(e) => {
            setNewTranscription(e.target.value);
            setErrors({ ...errors, transcription: false }); //сбрасываем ошибку при изменении значения
          }}
        ></input>
      )}
      {edit === true ? (
        <div className={style.tableitem_col}>{newRussian}</div>
      ) : (
        <input
          className={
            errors.russian
              ? `${style.tableitem_input} ${style.input_error}`
              : style.tableitem_input
          }
          placeholder={props.russian}
          value={newRussian}
          onChange={(e) => {
            setNewRussian(e.target.value);
            setErrors({ ...errors, russian: false, cyrillic: false }); // сбрасываем ошибку при изменении значения
          }}
        ></input>
      )}
      <div className={style.tableitem_col}>
        <div className={style.tableitem_col_button}>
          {edit === true ? (
            " "
          ) : (
            <div onClick={saveChanges} className={style.button}>
              <FontAwesomeIcon
                icon="fa-solid fa-circle-check"
                style={{ color: "#3f115e" }}
              />
            </div>
          )}
          {edit === true ? (
            <div onClick={editWord} className={style.button}>
              <FontAwesomeIcon
                icon="fa-solid fa-pen-to-square"
                style={{ color: "#3f115e" }}
              />
            </div>
          ) : (
            <div onClick={editWord} className={style.button}>
              <FontAwesomeIcon
                icon="fa-solid fa-rotate-left"
                style={{ color: "#3f115e" }}
              />
            </div>
          )}
        </div>{" "}
      </div>
      <div className={style.tableitem_col}>
        <div onClick={deleteWord} className={style.button}>
          <FontAwesomeIcon
            icon="fa-solid fa-trash"
            style={{ color: "#3f115e" }}
          />
        </div>
      </div>
    </div>
  );
}
