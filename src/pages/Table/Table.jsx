import TableItem from "../../components/TableItem/TableItem";
import vocabulary from "../../components/Data/vocabulary.json";
import style from "./table.module.scss";

export default function Table() {
  //возвращаем разметку таблицы
  //создаем функцию map для обращения к каждому объекту из массива и использованию их в компоненте TableItem
  return (
    <div>
      <div className={style.table}>
        <div className={style.table_row}>
          <div className={style.table_col}>English</div>
          <div className={style.table_col}>Transcription</div>
          <div className={style.table_col}>Russian</div>
          <div className={style.table_col}>Edit</div>
        </div>

        {vocabulary.map((item, index) => (
          <TableItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
