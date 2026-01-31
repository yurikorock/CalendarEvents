import { useEffect, useState } from "react";
import "./App.css";
import FormIdea from "./components/FormIdea/FormIdea.jsx";
import UserBar from "./components/UserBar/UserBar.jsx";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid.jsx";
import { formatDateForInput } from "./utils/formatDate.js";

function App() {
  const [open, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) ?? [];
  });

  // стейт для того коли юзер клікає на день в календарі
  const [selectedDate, setSelectedDate] = useState(new Date());
  const initialDateTime = formatDateForInput(selectedDate);

  // стейт для редагування таски
  const [taskToEdit, setTaskToEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  return (
    <>
      <UserBar
        setIsOpen={setIsOpen}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      {open && (
        <FormIdea
          setIsOpen={setIsOpen}
          setTasks={setTasks}
          currentDate={currentDate}
          initialDateTime={initialDateTime}
          taskToEdit={taskToEdit}
          setTaskToEdit={setTaskToEdit}
        />
      )}
      <CalendarGrid
        currentDate={currentDate}
        tasks={tasks}
        setTasks={setTasks}
        setIsOpen={setIsOpen}
        setSelectedDate={setSelectedDate}
        setTaskToEdit={setTaskToEdit}
      />
    </>
  );
}

export default App;
