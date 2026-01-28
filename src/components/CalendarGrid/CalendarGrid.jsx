import css from "./CalendarGrid.module.css";
import DayCell from "../DayCell/DayCell.jsx";

export default function CalendarGrid({ currentDate, tasks, setIsOpen }) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const lastDayInMonth = new Date(year, month + 1, 0).getDate();
  const daysInMonth = Array.from({ length: lastDayInMonth }, (_, i) => i + 1);
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  return (
    <div className={css.container_grid}>
      {/* Пусті клітинки перед першим днем */}
      {Array.from({ length: firstDayOfMonth }).map((_, i) => (
        <div key={`empty-${i}`} />
      ))}

      {daysInMonth.map((day) => {
        const dayOfWeek = new Date(year, month, day).getDay();

        const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        const dayTasks = tasks.filter((task) => task.date === fullDate);

        return (
          <DayCell
            key={day}
            day={day}
            dayOfWeek={dayOfWeek}
            tasks={dayTasks}
            setIsOpen={setIsOpen}
          />
        );
      })}
    </div>
  );
}
