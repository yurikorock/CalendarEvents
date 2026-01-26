import css from "./CalendarGrid.module.css"
import DayCell from "../DayCell/DayCell.jsx";

export default function CalendarGrid({ currentDate }) {
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
        return <DayCell key={day} day={day} dayOfWeek={dayOfWeek} />;
      })}
    </div>
  );
}
