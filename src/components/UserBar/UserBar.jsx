import FormIdea from "../FormIdea/FormIdea.jsx";
import css from "./UserBar.module.css";
import { MdAddCircle } from "react-icons/md";

export default function UserBar() {
  return (
    <div className={css.userbar_container}>
      <button className={css.btn}>
        <MdAddCircle className={css.btn_icon} />
      </button>
      
    </div>
  );
}
