import css from "./DayCell.module.css";

export default function DayCell({
  day,
  year,
  month,
  dayOfWeek,
  tasks,
  setIsOpen,
  setSelectedDate,
  isToday,
}) {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const handleCLick = () => {
    setIsOpen(true);
    const date = new Date(year, month, day);
    setSelectedDate(date);
    console.log(date);
  };

  return (
    <div className={`${css.container_daycell} ${isToday ? css.activeDay : ""}`}>
      <div className={css.date}>
        <p className={css.day}>{day}</p>
        <p className={css.weekdays} onClick={handleCLick}>
          {weekDays[dayOfWeek]}
        </p>
      </div>
      <ul>
        {tasks.map((task) => {
          return (
            <li key={task.id}>
              <p>{task.title}</p>
              {task.description && <p>{task.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
