import { useState, useEffect } from "react";
import { timeToSeconds } from "../../common/utils/time";
import { Task } from "../../types/task";
import Button from "../Button";
import Clock from "./Clock";
import style from "./styles.module.scss";

interface TimerProps {
  selected: Task | undefined;
  finishTask: () => void;
}

export default function Timer({ selected, finishTask }: TimerProps) {
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (selected?.time) setTime(timeToSeconds(selected.time));
  }, [selected]);

  function regressive(time: number) {
    setTimeout(() => {
      if (time > 0) {
        setTime(time - 1);
        return regressive(time - 1);
      }
      finishTask();
    }, 1000);
  }

  return (
    <div className={style.timer}>
      <p className={style.title}>Escolha um card e inicie o cronômetro</p>
      <div className={style.clockWrapper}>
        <Clock time={time} />
      </div>
      <Button onClick={() => regressive(time)}>Iniciar</Button>
    </div>
  );
}
