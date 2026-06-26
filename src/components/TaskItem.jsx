import { useRecoilState } from "recoil";
import { taskState } from "../atoms/taskAtom";

function TaskItem({ task }) {
  const [tasks, setTasks] = useRecoilState(taskState);

  const toggleTask = () => {
    setTasks(
      tasks.map((t) =>
        t.id === task.id
          ? { ...t, completed: !t.completed }
          : t
      )
    );
  };

  const removeTask = () => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <li>
      <span
        style={{
          textDecoration: task.completed ? "line-through" : "none",
        }}
      >
        {task.text}
      </span>

      <button onClick={toggleTask}>
        {task.completed ? "Desfazer" : "Concluir"}
      </button>

      <button onClick={removeTask}>
        Remover
      </button>
    </li>
  );
}

export default TaskItem;