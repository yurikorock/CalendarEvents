import css from "./FormIdea.module.css";

export default function FormIdea() {
  return (
    <div className={css.form_container}>
      <form>
        <div className={css.form_name}>
          <h2>Add new idea item</h2>
          <button>x</button>
        </div>

        <label htmlFor="title">
          Title<span>*</span>
          <input
            id="title"
            type="text"
            name="title"
            placeholder="Title goes here"
            required
          />
        </label>

        <label htmlFor="description">
          Description
          <input id="description" type="text" name="description" />
        </label>

        <label htmlFor="datetime">
          Date<span>*</span>
          <input id="datetime" type="datetime-local" name="datetime" required />
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
