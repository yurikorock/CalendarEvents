
import FormIdea from "../FormIdea/FormIdea.jsx";
import css from "./UserBar.module.css";
import { MdAddCircle } from "react-icons/md";

export default function UserBar({setIsOpen}) {
 
  return (
    <div className={css.userbar_container} onClick={()=>setIsOpen(true)}>
      <button className={css.btn}>
        <MdAddCircle className={css.btn_icon} />
      </button>
    </div>
  );
}
