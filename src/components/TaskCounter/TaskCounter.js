import css from "./TaskCounter.module.css";
import { useTask } from "../../contexts/taskContext";

export const TaskCounter = () => {
  const { tasksActive, tasksCompleted } = useTask()

  return (
    <div>
      <p className={css.text}>Active: {tasksActive.length}</p>
      <p className={css.text}>Completed: {tasksCompleted.length}</p>
    </div>
  );
};
