import { useEffect, useState } from "react";
import css from "./FormIdea.module.css";

export default function FormIdea({ setIsOpen }) {
  const [title, setTitle] = useState("");
  const [descr, setDescr] = useState("");
  const [datetime, setDatetime] = useState("");

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

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(title, descr, datetime);

    setTitle("");
    setDatetime("");
    setDescr("");
    setIsOpen(false);
  };

  return (
    <div className={css.overlay} onClick={() => setIsOpen(false)}>
      <div className={css.form_container}>
        <form onSubmit={handleSubmit}>
          <div className={css.form_name} onClick={(e) => e.stopPropagation()}>
            <h2>Add new idea item</h2>
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
