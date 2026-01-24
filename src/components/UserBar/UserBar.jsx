
import Filter from "../Filter/Filter.jsx";
import FormIdea from "../FormIdea/FormIdea.jsx";
import css from "./UserBar.module.css";
import { MdAddCircle } from "react-icons/md";

export default function UserBar({setIsOpen,currentDate,setCurrentDate }) {
 
  return (
    <div className={css.userbar_container} >
      <button className={css.btn} onClick={()=>setIsOpen(true)}>
        <MdAddCircle className={css.btn_icon} />
      </button>
      <Filter currentDate={currentDate} setCurrentDate={setCurrentDate}/>
    </div>
  );
}
