import { useState } from "react";
import { useRecoilState } from "recoil";
import { taskState } from "../atoms/taskAtom";

function TaskForm() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useRecoilState(taskState);

  const addTask = () => {
    if (!text.trim()) return;

    setTasks([
      ...tasks,
      {
        id: crypto.randomUUID(),
        text,
        completed: false,
      },
    ]);

    setText("");
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // impede o recarregamento da página
    addTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nova tarefa"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button type="submit">
        Adicionar
      </button>
    </form>
  );
}

export default TaskForm;