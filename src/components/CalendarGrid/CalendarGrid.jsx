import css from "./CalendarGrid.module.css";
import DayCell from "../DayCell/DayCell.jsx";
import { formatDateForInput } from "../../utils/formatDate.js";

export default function CalendarGrid({
  currentDate,
  tasks,
  setIsOpen,
  setSelectedDate,
}) {
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  // Кількість днів у місяці
  const lastDayInMonth = new Date(year, month + 1, 0).getDate();
  const daysInMonth = Array.from({ length: lastDayInMonth }, (_, i) => i + 1);

  // Перший день місяця (0=Sunday, 1=Monday,...)
  const jsFirstDay = new Date(year, month, 1).getDay();
  // Переводимо так, щоб понеділок був 0
  const firstDayOfMonth = (jsFirstDay + 6) % 7;

  return (
    <div className={css.container_grid}>
      {/* Пусті клітинки перед першим днем */}
      {Array.from({ length: firstDayOfMonth }).map((_, i) => (
        <div key={`empty-${i}`} className={css.emptyCell} />
      ))}
      {/* Дні місяця */}
      {daysInMonth.map((day) => {
        // День тижня для кожного дня
        const jsDay = new Date(year, month, day).getDay();
        const dayOfWeek = (jsDay + 6) % 7;

        const fullDate = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;

        const dayTasks = tasks.filter((task) => task.date === fullDate);

        // визначаємо сьогоднішній день
        const today = new Date();
        const todayToString = formatDateForInput(today).split("T")[0];
        //
        const isToday = fullDate === todayToString;
        {/* console.log(fullDate);
        console.log(todayToString); */}

        return (
          <DayCell
            key={day}
            day={day}
            year={year}
            month={month}
            dayOfWeek={dayOfWeek}
            tasks={dayTasks}
            setIsOpen={setIsOpen}
            setSelectedDate={setSelectedDate}
            isToday={isToday}
          />
        );
      })}
    </div>
  );
}
