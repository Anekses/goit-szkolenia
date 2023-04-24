
import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    extraReducers: {
        [fetchTasks.pending](state, action) {
            state.isLoading = true;
        },
        [fetchTasks.fulfilled](state, action) {
            state.isLoading = false;
            state.error = null;
            state.items = action.payload;
        },
        [fetchTasks.rejected](state, action) {
            state.isLoading = false;
            state.error = action.payload;
            state.items = [];
        }

    }
});

export const tasksReducer = tasksSlice.reducer
