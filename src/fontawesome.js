// импоритруем библиотеку
import { library } from "@fortawesome/fontawesome-svg-core";

// импоритруем нужные иконки
import {
  faPenToSquare,
  faTrash,
  faCircleCheck,
  faRotateLeft,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPenToSquare, faTrash, faCircleCheck, faRotateLeft);

/* <FontAwesomeIcon
  icon="fa-solid fa-pen-to-square"
  style={{ color: "#3f115e" }}
/>;
<FontAwesomeIcon icon="fa-solid fa-trash" style={{ color: "#3f115e" }} />;
<FontAwesomeIcon
  icon="fa-solid fa-circle-check"
  style={{ color: "#3f115e" }}
/>;
<FontAwesomeIcon icon="fa-solid fa-rotate-left" style={{ color: "#3f115e" }} />; */
