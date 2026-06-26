import { selector } from "recoil";
import { taskState } from "../atoms/taskAtom";

export const taskCounterSelector = selector({
  key: "taskCounterSelector",

  get: ({ get }) => {
    const tasks = get(taskState);

    const total = tasks.length;
    const completed = tasks.filter(task => task.completed).length;
    const pending = total - completed;

    return {
      total,
      completed,
      pending,
    };
  },
});