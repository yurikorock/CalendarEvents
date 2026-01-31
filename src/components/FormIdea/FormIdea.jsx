import { useEffect, useState } from "react";
import css from "./FormIdea.module.css";
import { nanoid } from "nanoid";

export default function FormIdea({
  setIsOpen,
  setTasks,
  initialDateTime,
  taskToEdit,
  setTaskToEdit,
}) {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [datetime, setDatetime] = useState(initialDateTime);

  const isFormValid = title.trim() !== "" && datetime !== "";

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [setIsOpen]);

  //ТІЛЬКИ заповнення форми при редагуванні таски
  useEffect(() => {
    if (taskToEdit !== null) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTitle(taskToEdit.title);
      setDescr(taskToEdit.description ?? "");
      setDatetime(`${taskToEdit.date}T00:00`);
    }
    if (taskToEdit === null) {
      setDatetime(initialDateTime);
    }
  }, [taskToEdit, initialDateTime]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // якщо форма порожня
    if (taskToEdit === null) {
      const newTask = {
        id: nanoid(),
        title: title,
        description: descr.trim(),
        date: datetime.split("T")[0],
      };

      setTasks((prev) => [...prev, newTask]);

      setTitle("");
      setDatetime("");
      setDescr("");
      setIsOpen(false);
    } else {
      // редагування
      setTasks((prev) =>
        prev.map((task) =>
          task.id === taskToEdit.id
            ? {
                ...task,
                title,
                description: descr.trim(),
                date: datetime.split("T")[0],
              }
            : task,
        ),
      );
      setTitle("");
      setDatetime("");
      setDescr("");
      setIsOpen(false);
      setTaskToEdit(null);
    }
  };

  return (
    <div className={css.overlay} onClick={() => setIsOpen(false)}>
      <div className={css.form_container} onClick={(e) => e.stopPropagation()}>
        <form onSubmit={handleSubmit}>
          <div className={css.form_name}>
            <h2>{taskToEdit ? "Edit idea item" : "Add new idea item"}</h2>
            <button type="button" onClick={() => setIsOpen(false)}>
              x
            </button>
          </div>

          <label htmlFor="title">
            Title<span>*</span>
            <input
              id="title"
              type="text"
              name="title"
              placeholder="Title goes here"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>

          <label htmlFor="description">
            Description
            <input
              id="description"
              type="text"
              name="description"
              value={descr}
              onChange={(e) => setDescr(e.target.value)}
            />
          </label>

          <label htmlFor="datetime">
            Date<span>*</span>
            <input
              id="datetime"
              type="datetime-local"
              name="datetime"
              required
              value={datetime}
              onChange={(e) => setDatetime(e.target.value)}
            />
          </label>

          <button type="submit" disabled={!isFormValid}>
            Save
          </button>
        </form>
      </div>
    </div>
  );
}
