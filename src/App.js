import { useTask } from "./hooks/useTask";

import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {

  const { addTask, deleteTask, updateTask, tasks } = useTask();

  return (
    <div className="min-h-screen bg-white dark:bg-gray-800">
      <Header totalTasks={tasks.length}/>
      <div className="grid grid-cols-3 gap-10 m-4">
        <TaskForm addTask={addTask}/>
        <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      </div>
    </div>
  );
}

export default App;
