import { useSelector } from "react-redux";
import { StatusFilter } from "./components/StatusFilter/StatusFilter";
import { TaskList } from "./components/TaskList/TaskList";

const App = () => {

  return (
    <div>
      <StatusFilter />
      <TaskList />
    </div>
  )
}

export default App;