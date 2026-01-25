import { useState } from "react";
import "./App.css";
import FormIdea from "./components/FormIdea/FormIdea.jsx";
import UserBar from "./components/UserBar/UserBar.jsx";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid.jsx";

function App() {
  const [open, setIsOpen] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <>
      <UserBar
        setIsOpen={setIsOpen}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}
      />
      {open && <FormIdea setIsOpen={setIsOpen} />}
      <CalendarGrid currentDate={currentDate} />
    </>
  );
}

export default App;
