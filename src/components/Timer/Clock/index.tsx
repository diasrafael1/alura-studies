import style from "./styles.module.scss";

export default function Clock({ time = 0 }: { time: number }) {
  const minutes = String(Math.floor(time / 60));
  const seconds = String(time % 60).padStart(2);
  return (
    <>
      <span className={style.clockNumber}>{minutes[0]}</span>
      <span className={style.clockNumber}>{minutes[1] ?? "0"}</span>
      <span>:</span>
      <span className={style.clockNumber}>
        {seconds[0] === " " ? "0" : seconds[0]}
      </span>
      <span className={style.clockNumber}>{seconds[1] ?? "0"}</span>
    </>
  );
}
