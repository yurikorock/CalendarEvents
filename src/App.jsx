import { useState } from "react";
import "./App.css";
import FormIdea from "./components/FormIdea/FormIdea.jsx";
import UserBar from "./components/UserBar/UserBar.jsx";
import CalendarGrid from "./components/CalendarGrid/CalendarGrid.jsx";

function App() {
  const [open, setIsOpen] = useState(false);
  return (
    <>
      <UserBar setIsOpen={setIsOpen} />
      {open && <FormIdea setIsOpen={setIsOpen} />}
      <CalendarGrid />
    </>
  );
}

export default App;
