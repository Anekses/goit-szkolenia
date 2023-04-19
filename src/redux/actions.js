import { createAction } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";

// export const addTask = createAction("tasks/addTask", (text) => {
//   return {
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     }
//   }
// });

// export const deleteTask = taskId => {
//   return {
//     type: "tasks/deleteTask",
//     payload: taskId,
//   };
// };

// export const toggleCompleted = createAction("tasks/toggleCompleted");

export const setStatusFilter = createAction("filters/setStatusFilter")