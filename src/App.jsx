import { useState } from "react";

import { Header } from "./components/Header";
import { Task } from "./components/Task";
import { Input } from "./components/Input";
import { HeaderTasks } from "./components/HeaderTasks";

import "./global.css";
import styles from "./App.module.css";
import { ContentEmpty } from "./components/ContentEmpty copy";

export function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(text) {
    const newTask = {
      id: crypto.randomUUID(),
      text,
      isCompleted: false,
    };
    setTasks((prev) => [...prev, newTask]);
  }

  function handleToggleTask(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  }

  function handleDeleteTask(id) {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <div>
      <Header />
      <main>
        <Input onAddTask={handleAddTask} />
        <HeaderTasks total={totalTasks} completed={completedTasks} />
        {tasks.length === 0 ? (
          <ContentEmpty />
        ) : (
          <ol className={styles.tasks}>
            {tasks.map((task) => (
              <Task
                key={task.id}
                content={task.text}
                isCompleted={task.isCompleted}
                onToggle={() => handleToggleTask(task.id)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
          </ol>
        )}
      </main>
    </div>
  );
}
