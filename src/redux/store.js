import { tasksReducer, filtersReducer } from "./reducer";
const { configureStore } = require("@reduxjs/toolkit");

export const store = configureStore({
    reducer: {
        tasks: tasksReducer,
        filters: filtersReducer
    }
})