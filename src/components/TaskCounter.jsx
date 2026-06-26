import { useRecoilValue } from "recoil";
import { taskCounterSelector } from "../selectors/taskCounterSelector";

function TaskCounter() {

  const counter = useRecoilValue(taskCounterSelector);

  return (
    <div className="counter">
      <p>Total: {counter.total}</p>
      <p>Concluídas: {counter.completed}</p>
      <p>Pendentes: {counter.pending}</p>
    </div>
  );
}

export default TaskCounter;