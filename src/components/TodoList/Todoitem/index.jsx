import { FiSquare, FiCheckSquare, FiTrash2 } from "react-icons/fi";
import styles from "./styles.module.css";

function TodoItem({ todo, onRemoveClick, onDoneClick }) {
  return (
    <li className={`${styles.container} ${todo.itsDone ? styles.checked : ""}`} key={todo.value}>
      <button className={styles.check} onClick={onDoneClick}>
        {todo.itsDone ? <FiCheckSquare size={20} /> : <FiSquare size={20} />}
      </button>
      <span>{todo.value}</span>
      <button className={styles.trash} onClick={onRemoveClick}>
        <FiTrash2 size={20}/>
      </button>
    </li>
  );
}

export default TodoItem;
