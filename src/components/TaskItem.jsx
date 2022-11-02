import "../css/listItem.css";
import { BsCheckLg } from "react-icons/bs";

import { FaRegTimesCircle } from "react-icons/fa";

export const TaskItem = ({ title, completed, completedTask, deleteTask }) => {
  return (
    <li
      className={`taskItem taskItem${
        completed ? "--completed" : "--notCompleted"
      }`}
    >
      <span className="check" onClick={completedTask}>
        <BsCheckLg />
      </span>
      <span className="title">{title}</span>
      <span className="deleteTask" onClick={deleteTask}>
        <FaRegTimesCircle />
      </span>
    </li>
  );
};
