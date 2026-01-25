export default function DayCell({ day, dayOfWeek }) {
  const weekDays = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Нд"];
  return (
    <div>
      
      <p>{day}</p>
      <p>{weekDays[dayOfWeek]}</p>
      <p>title</p>
    </div>
  );
}
