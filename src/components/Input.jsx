import styles from "./Input.module.css";
import { PlusCircle } from "phosphor-react";
import { useState } from "react";

export function Input({ onAddTask }) {
  const [task, setTask] = useState("");

  function handleClickInput() {
    if (task.trim() !== "") {
      onAddTask(task);
      setTask("");
    }
  }

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onClick={handleClickInput}
      />
      <button
        type="submit"
        onClick={() => {
          if (task.trim() !== "") {
            onAddTask(task);
            setTask("");
          }
        }}
      >
        Criar <PlusCircle size={20} />
      </button>
    </div>
  );
}
