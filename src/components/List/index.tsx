import { Task } from "../../types/task";
import Item from "./Item";
import style from "./styles.module.scss";

interface ListProps {
  tasks: Task[];
  selectTask: (task: Task) => void;
}

export default function List({ tasks, selectTask }: ListProps) {
  return (
    <aside className={style.list}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((task) => (
          <Item selectTask={selectTask} key={task.id} task={task} />
        ))}
      </ul>
    </aside>
  );
}
