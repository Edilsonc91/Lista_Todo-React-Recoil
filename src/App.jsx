import { useEffect } from "react";
import { useRecoilValue } from "recoil";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import FilterButtons from "./components/FilterButtons";
import TaskCounter from "./components/TaskCounter";
import ClearCompletedButton from "./components/ClearCompletedButton";

import { taskState } from "./atoms/taskAtom";

function App() {
  const tasks = useRecoilValue(taskState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <div className="container">
      <h1>Lista de Tarefas</h1>

      <TaskForm />

      <TaskCounter />

      <FilterButtons />

      <TaskList />

      <ClearCompletedButton />
    </div>
  );
}

export default App;