import { selector } from "recoil";
import { taskState } from "../atoms/taskAtom";
import { filterState } from "../atoms/filterAtom";

export const filteredTasksSelector = selector({
  key: "filteredTasksSelector",
  get: ({ get }) => {
    const tasks = get(taskState);
    const filter = get(filterState);

    switch (filter) {
      case "completed":
        return tasks.filter((task) => task.completed);

      case "pending":
        return tasks.filter((task) => !task.completed);

      default:
        return tasks;
    }
  },
});