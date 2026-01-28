import css from "./DayCell.module.css";

export default function DayCell({ day, dayOfWeek, tasks, setIsOpen }) {
  const weekDays = ["Mn", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  return (
    <div className={css.container_daycell} >
      <div className={css.date}>
        <p className={css.day} >{day}</p>
        <p className={css.weekdays} onClick={() => setIsOpen(true)}>{weekDays[dayOfWeek]}</p>
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
