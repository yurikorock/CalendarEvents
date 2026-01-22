import css from "./FormIdea.module.css";

export default function FormIdea() {
  return (
    <div className={css.form_container}>
      <form>
        <div className={css.form_name}>
          <h2>Add new idea item</h2>
          <button>x</button>
        </div>

        <label>
          Title<span>*</span>
          <input
            type="text"
            name="title"
            placeholder="Title goes here"
            required
          />
        </label>

        <label>
          Description
          <input type="text" name="description" />
        </label>

        <label>
          Date<span>*</span>
          <input type="datetime-local" name="datetime" required ></input>
          
        </label>

        <button type="submit">Save</button>
      </form>
    </div>
  );
}
