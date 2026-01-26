import css from "./DayCell.module.css";

export default function DayCell({ day, dayOfWeek }) {
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
  return (
    <div className={css.container_daycell}>
      <div className={css.date}>
        <p>{day}</p>
        <p>{weekDays[dayOfWeek]}</p>
      </div>
      <p>title</p>
    </div>
  );
}
