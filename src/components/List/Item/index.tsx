import { Task } from "../../../types/task";
import style from "./styles.module.scss";

interface ItemProp {
  task: Task;
  selectTask: (task: Task) => void;
}

export default function Item({ task, selectTask }: ItemProp) {
  return (
    <li
      className={`${style.task} ${task.selected && style.taskSelected} ${
        task.completed && style.taskCompleted
      }`}
      onClick={() => !task.completed && selectTask(task)}
    >
      <h3>{task.task}</h3>
      <span>{task.time}</span>
      {task.completed && (
        <span className={style.concluded} aria-label="task concluded"></span>
      )}
    </li>
  );
}
