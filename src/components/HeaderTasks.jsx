import styles from "./HeaderTasks.module.css";

export function HeaderTasks({ total, completed }) {
  return (
    <main className={styles.content}>
      <div className={styles.header}>
        <div className={styles.createTasks}>
          <p>Tarefas criadas</p>&nbsp;
          <span>{total}</span>
        </div>
        <div className={styles.completedTasks}>
          <p>Concluídas</p>&nbsp;
          <span>{completed} de {total}</span>
        </div>
      </div>
    </main>
  );
}
