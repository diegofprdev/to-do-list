import { useTask } from "./hooks/useTask";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const { save, deleteTask, tasks } = useTask();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <Header />
      <div className="grid grid-cols-3 gap-10 m-4">
        <TaskForm save={save}/>
        <TaskList tasks={tasks} deleteTask={deleteTask}/>
      </div>
    </div>
  );
}

export default App;
