
import { createSlice } from '@reduxjs/toolkit';
import { tasksInitialState } from './reducer';
import { nanoid } from 'nanoid';

const tasksSlice = createSlice({
    name: "tasks",
    initialState: tasksInitialState,
    reducers: {
        addTask: {
            reducer(state, action) {
                state.push(action.payload) 
            },
            prepare(text) {
                return {
                    payload: {
                        id: nanoid(),
                        completed: false,
                        text,
                      }
                }
            }
        },
        deleteTask(state, action) {},
        toggleCompleted(state, action) {
            for (const task of state) {
                if (task.id === action.payload) {
                  task.completed = !task.completed
                }
              }
        }
    }
});

export const { addTask, deleteTask, toggleCompleted } = tasksSlice.actions;
export const tasksReducer = tasksSlice.reducer