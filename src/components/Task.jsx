import styles from "./Task.module.css";
import { Circle, Check, Trash } from "phosphor-react";

export function Task({ content, isCompleted, onToggle, onDelete }) {
  return (
    <li className={isCompleted ? styles.listBoxCheck : styles.listBox}>
      <button
        className={isCompleted ? styles.checkCircle : styles.circle}
        onClick={onToggle}
        title="Marcar como concluída"
      >
        {isCompleted ? <Check size={15} /> : <Circle size={20} />}
      </button>

      <p className={isCompleted ? styles.checkedText : ""}>{content}</p>

      <button
        className={styles.delete}
        title="Deletar tarefa"
        onClick={onDelete}
      >
        <Trash size={20} />
      </button>
    </li>
  );
}
