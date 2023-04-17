import { useSelector } from "react-redux"
import { Task } from "../Task/Task";
import { getStatusFilter, getTasks } from "../../redux/selectors";

import css from "./TaskList.module.css";

const getVisibleTasks = (tasks, statusFilter) => {
    switch(statusFilter) {
        case statusFilter.all:
            return tasks;
        case statusFilter.active:
            return tasks.filter(task => !task.completed)
        case statusFilter.completed:
            return tasks.filter(task => task.completed)
        default:
            return tasks;
    }
}


export const TaskList = () => {
    const tasks = useSelector(getTasks);
    const statusFilter = useSelector(getStatusFilter);

    const visibileTasks = getVisibleTasks(tasks, statusFilter)

    return (
        <ul className={css.list}>
            {visibileTasks.map(task => (
                <li className={css.listItem} key={task.id}>
                    <Task task={task} />
                </li>
            ))}
        </ul>
    )
}