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
  setTaskToEdit,
}) {
  const weekDays = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

  const handleCLick = () => {
    setIsOpen(true);
    const date = new Date(year, month, day);
    setSelectedDate(date);
    // console.log(date);
  };

  const editTaskInForm = (task) => {
    setTaskToEdit(task);
    setIsOpen(true);
    const date = new Date(year, month, day);
    setSelectedDate(date);
    // console.log(date);

    // console.log("Редагуємо таск:", task);
  };

  return (
    <div className={`${css.container_daycell} ${isToday ? css.activeDay : ""}`}>
      <div className={css.date}>
        <p className={css.day} onClick={handleCLick}>
          {day}{" "}
        </p>
        <p className={css.weekdays}>{weekDays[dayOfWeek]}</p>
      </div>
      <ul className={css.tasks_list}>
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              onClick={() => editTaskInForm(task)}
              className={css.task_container}
            >
              <p>{task.title}</p>
              {task.description && <p>{task.description}</p>}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
