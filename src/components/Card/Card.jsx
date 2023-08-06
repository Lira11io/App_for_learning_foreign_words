import style from "./card.module.scss";
//import { useState } from "react";

export default function Card(props) {
  //const { english, transcription, russian} = props;
  return (
    <div className={style.container}>
      <div className="card">карточка</div>
    </div>
  );
}
