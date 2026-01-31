export default function getInitialDate() {
  const saved = localStorage.getItem("calendarCurrentMonth");
  if (!saved) {
    return new Date();
  }
  const [year, month] = saved.split("-");
  return new Date(year, month - 1, 1);
}
