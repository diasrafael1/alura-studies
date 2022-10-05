import { ChangeEvent, FormEvent, useState } from "react";
import { Task } from "../../types/task";
import { v4 as uuidv4 } from "uuid";
import Button from "../Button";
import "./styles.module.scss";

interface FormProps {
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>;
}

export default function Form({ setTasks }: FormProps) {
  const [newTask, setNewTask] = useState<Task>({
    id: "",
    task: "",
    time: "",
    selected: false,
    completed: false,
  });
  const formData = [
    {
      label: "Adicione um novo estudo",
      inputData: {
        type: "text",
        id: "task",
        placeholder: "O que você quer estudar?",
        value: newTask.task,
      },
    },
    {
      label: "Tempo",
      inputData: {
        type: "time",
        id: "time",
        step: "1",
        min: "00:00:00",
        max: "01:30:00",
        value: newTask.time,
      },
    },
  ];

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    setNewTask({ ...newTask, [e.target.name]: e.target.value });
  }

  function addNewTask(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!newTask.task || !newTask.time) return;

    setTasks((oldTasks) => [
      ...oldTasks,
      { ...newTask, selected: false, completed: false, id: uuidv4() },
    ]);
    setNewTask({
      id: "",
      task: "",
      time: "",
      selected: false,
      completed: false,
    });
  }

  return (
    <form onSubmit={addNewTask}>
      {formData.map((data, index) => (
        <div key={index}>
          <label htmlFor={data.inputData.id}>{data.label}</label>
          <input
            type={data.inputData.type}
            name={data.inputData.id}
            id={data.inputData.id}
            placeholder={data.inputData.placeholder}
            step={data.inputData.step}
            min={data.inputData.min}
            max={data.inputData.max}
            value={data.inputData.value}
            onChange={handleInput}
          />
        </div>
      ))}
      <Button type="submit">Adicionar</Button>
    </form>
  );
}
