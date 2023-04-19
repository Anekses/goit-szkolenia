import { filtersReducer } from "./reducer";
import { tasksReducer } from "./tasksSlice";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer
    }
})