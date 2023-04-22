import { createReducer } from "@reduxjs/toolkit";
import { addTask, setStatusFilter, toggleCompleted } from "./actions";
import { statusFilters } from "./constants";

export const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

// export const tasksReducerOld = (state = tasksInitialState, action) => {
//   switch (action.type) {
//     case "tasks/addTask":
//       return [...state, action.payload];
//     case "tasks/deleteTask":
//       return state.filter(task => task.id !== action.payload);
//     case toggleCompleted.type:
//       return state.map(task => {
//         if (task.id !== action.payload) {
//           return task;
//         }
//         return { ...task, completed: !task.completed };
//       });
//     default:
//       return state;
//   }
// };

// export const tasksReducer = createReducer(tasksInitialState, {
//   [addTask]: (state, action) => {
//     state.push(action.payload) 
//   },
//   [toggleCompleted]: (state, action) => {
//     for (const task of state) {
//       if (task.id === action.payload) {
//         task.completed = !task.completed
//       }
//     }
//   }
// })

const filtersInitialState = {
  status: statusFilters.active,
};

export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
};

// export const rootReducer = combineReducers({
//   tasks: tasksReducer,
//   filters: filtersReducer,
// });
