import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "./constants";

export const selectStatusFilter = state => state.filters.status

export const selectTasks = state => state.tasks.items

export const selectIsLoading = state => state.tasks.isLoading

export const selectError = state => state.tasks.error

export const selectVisibleTasks = state => {
    const statusFilter = selectStatusFilter(state);
    const tasks = selectTasks(state);

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
};

export const selectTaskCountOld = state => {
    const tasks = selectTasks(state);

    console.log('selectTaskCount invoked')

    return tasks.reduce(
        (acc, task) => {
            if (task.completed) {
            acc.completed += 1;
            } else {
            acc.active += 1;
            }
            return acc;
        },
        { active: 0, completed: 0 }
    );
}

export const selectTaskCount = createSelector(
    [selectTasks],
    (tasks) => {

        console.log('selectTaskCount NEW ONE')

        return tasks.reduce(
            (acc, task) => {
                if (task.completed) {
                acc.completed += 1;
                } else {
                acc.active += 1;
                }
                return acc;
            },
            { active: 0, completed: 0 }
        );
    }
)