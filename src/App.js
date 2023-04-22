import { TaskList } from "./components/TaskList/TaskList";
import { Layout } from "./components/Layout/Layout";
import { AppBar } from "./components/AppBar/AppBar";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { CounterSlice } from "./examples/components/CounterSlice/CounterSlice";
import { CounterContext } from "./examples/components/CounterContext/CounterContext";
import ColorPicker from "./examples/components/ColorPicker/ColorPicker";
import ColorPickerClass from "./examples/components/ColorPickerClass/ColorPickerClass";
import Friends from "./examples/components/Friends/Friends";

const App = () => {
  return (
    <Layout>
      {/* <AppBar /> */}
      {/* <TaskForm /> */}
      {/* <TaskList /> */}
      <CounterSlice />
      <CounterContext />
      <ColorPicker />
      <ColorPickerClass />
      <Friends />
    </Layout>
  )
}

export default App;