import clipboard from "../assets/clipboard.svg";

import styles from "./ContentEmpty.module.css";

export function ContentEmpty() {
  return (
    <div className={styles.contentEmpty}>
      <img src={clipboard} alt="" />
      <p>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
