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
    // Ваши действия с сохраненными значениями
    console.log(newEnglish, newTranscription, newRussian);

    setEdit(!edit); //возвращаем первоначальный вид кнопки редактировать
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
          className={style.tableitem_input}
          placeholder={props.english}
          value={newEnglish}
          onChange={(e) => setNewEnglish(e.target.value)}
        ></input>
      )}
      {edit === true ? (
        <div className={style.tableitem_col}>{newTranscription}</div>
      ) : (
        <input
          className={style.tableitem_input}
          placeholder={props.transcription}
          value={newTranscription}
          onChange={(e) => setNewTranscription(e.target.value)}
        ></input>
      )}
      {edit === true ? (
        <div className={style.tableitem_col}>{newRussian}</div>
      ) : (
        <input
          className={style.tableitem_input}
          placeholder={props.russian}
          value={newRussian}
          onChange={(e) => setNewRussian(e.target.value)}
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
