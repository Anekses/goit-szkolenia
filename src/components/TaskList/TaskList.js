import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import { getTasks, getStatusFilter } from "../../redux/selectors";
import css from "./TaskList.module.css";
import { statusFilters } from "../../redux/constants";
import { useFilter } from "../../contexts/filterContext";
import { useTask } from "../../contexts/taskContext";

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

export const TaskList = () => {
  const { tasks } = useTask()

  const { status } = useFilter();

  const visibleTasks = getVisibleTasks(tasks, status);

  return (
    <ul className={css.list}>
      {visibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
