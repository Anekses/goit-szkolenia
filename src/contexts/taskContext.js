import { nanoid } from "nanoid";
import { createContext, useContext, useState } from "react";

const TaskContext = createContext();

const initialState = [
    { id: 0, text: "Learn HTML and CSS", completed: true },
    { id: 1, text: "Get good at JavaScript", completed: true },
    { id: 2, text: "Master React", completed: false },
    { id: 3, text: "Discover Redux", completed: false },
    { id: 4, text: "Build amazing apps", completed: false },
  ]

export const useTask = () => useContext(TaskContext);

export const TaskProvider = ({ children }) => {
    const [tasks, setTasks] = useState(initialState);

    const tasksCompleted = tasks.filter((task) => task.completed)
    const tasksActive = tasks.filter((task) => !task.completed)

    const addTask = (name) => {
        const newTask = {
            id: nanoid(),
            completed: false,
            text: name,
          }
        setTasks(oldTasksList => [...oldTasksList, newTask])
    }

    const deleteTask = (taskId) => {
        const newState = tasks.filter(task => task.id !== taskId)

        setTasks(newState)
    }

    const toggleCompleted = (taskId) => {
        const newState = tasks.map(task => {
            if (task.id !== taskId) return task;
            return {
                ...task,
                completed: !task.completed
            }
        })

        setTasks(newState);
    }

    return (
        <TaskContext.Provider value={{tasks, tasksActive, tasksCompleted, addTask, toggleCompleted, deleteTask}}>
            {children}
        </TaskContext.Provider>
    )
}