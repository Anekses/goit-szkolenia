import { TaskList } from "./components/TaskList/TaskList";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "./redux/operations";
import { getTasks } from "./redux/selectors";

const App = () => {
  const dispatch = useDispatch();
  const { items, isLoading, error} = useSelector(getTasks)

  useEffect(() => {
    dispatch(fetchTasks())
  }, [dispatch])

  return (
    <div>
      {isLoading && <h1>Loading!</h1>}
      {error && <p>{error}</p>}
      
      <div>
        {items.length > 0 && JSON.stringify(items)}
      </div>
    </div>
  )

  // return (
  //   <Layout>
  //     <AppBar />
  //     <TaskForm />
  //     <TaskList />
  //   </Layout>
  // )
}

export default App;