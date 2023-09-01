import { useState } from "react";
import style from "./tableItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../fontawesome.js";

export default function TableItem(props) {
  const [deleted, setDeleted] = useState(true); //задаем состояние для кнопки удаления
  const [edit, setEdit] = useState(true); //задаем состояние для кнопки редактирования

  function deleteWord() {
    //создаем функцию для кнопки удаления, которая будет менять состояние на deleted - false
    setDeleted(!deleted);
  }

  function editWord() {
    //создаем функцию для кнопки редактирования, которая будет менять состояние на edit - false
    setEdit(!edit);
  }

  return (
    <div
      className={
        deleted === true ? style.tableitem_row : style.tableitem_row_noDisplay
      }
    >
      {edit === true ? (
        <div className={style.tableitem_col}>{props.english}</div>
      ) : (
        <input
          className={style.tableitem_input}
          placeholder={props.english}
        ></input>
      )}
      {edit === true ? (
        <div className={style.tableitem_col}>{props.transcription}</div>
      ) : (
        <input
          className={style.tableitem_input}
          placeholder={props.transcription}
        ></input>
      )}
      {edit === true ? (
        <div className={style.tableitem_col}>{props.russian}</div>
      ) : (
        <input
          className={style.tableitem_input}
          placeholder={props.russian}
        ></input>
      )}
      <div className={style.tableitem_col}>
        <div className={style.tableitem_col_button}>
          {edit === true ? (
            " "
          ) : (
            <div className={style.button}>
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
              Save
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
