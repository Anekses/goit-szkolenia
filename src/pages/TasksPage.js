import { useDispatch, useSelector } from "react-redux"
import { AppBar } from "../components/AppBar/AppBar"
import { TaskForm } from "../components/TaskForm/TaskForm"
import { TaskList } from "../components/TaskList/TaskList"
import { selectIsLoading } from "../redux/selectors"
import { useEffect } from "react"
import { fetchTasks } from "../redux/operations"

export const TasksPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <div>
      <AppBar />
      <TaskForm />
      <div>{isLoading && 'In progress'}</div>
      <TaskList />
    </div>
  )
}