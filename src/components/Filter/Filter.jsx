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
  //якщо рік місяць число
  //   const handleDateChange = (e) => {
  //     setCurrentDate(new Date(e.target.value));
  //   };

  const handleMonthChange = (e) => {
    const [year, month] = e.target.value.split("-");
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const value = `${currentDate.getFullYear()}-${String(
    currentDate.getMonth() + 1,
  ).padStart(2, "0")}`;

  const monthYear = currentDate.toLocaleDateString("uk-UA", {
    month: "long",
    year: "numeric",
  });


    // console.log("Date is now :", value);

  return (
    <div className={css.filter_container}>
      <button onClick={handlePrevMonth}>&lt;</button>
      <span>{monthYear}</span>
      <button onClick={handleNextMonth}>&gt;</button>
      <input type="month" value={value} onChange={handleMonthChange} />
    </div>
  );
}
