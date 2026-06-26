import { useRecoilState } from "recoil";
import { taskState } from "../atoms/taskAtom";

function ClearCompletedButton() {

  const [tasks, setTasks] = useRecoilState(taskState);

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  return (
    <button
      className="clear-btn"
      onClick={clearCompleted}
    >
      Limpar Concluídas
    </button>
  );
}

export default ClearCompletedButton;