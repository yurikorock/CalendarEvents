import { useState } from "react";
import css from "./FIlter.module.css";

export default function Filter() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const handlePrevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1),
    );
  };

  const handleNextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1),
    );
  };

  const handleDateChange = (e) => {
    setCurrentDate(new Date(e.target.value));
  };

  const monthYear = currentDate.toLocaleDateString("uk-UA", {
    month: "long",
    year: "numeric",
  });

  const current = currentDate.toISOString().split("T")[0];
  console.log("Date is now :", current);

  return (
    <div className={css.filter_container}>
      <button onClick={handlePrevMonth}>&lt;</button>
      <span>{monthYear}</span>
      <button onClick={handleNextMonth}>&gt;</button>
      <input
        type="date"
        value={currentDate.toISOString().split("T")[0]}
        onChange={handleDateChange}
      />
    </div>
  );
}
