import { TaskList } from "./components/TaskList/TaskList";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";
import { selectError, selectIsLoading } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <Layout>
      <AppBar />
      <TaskForm />
      {isLoading && !error && <h4>Loading in progress, please wait...</h4>}
      {error}
      <TaskList />
    </Layout>
  )
}

export default App;