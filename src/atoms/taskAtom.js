import { atom } from "recoil";

const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

export const taskState = atom({
  key: "taskState",
  default: savedTasks,
});