export const ADD_TASK = 'ADD_TASK';
export function addTask(task) {
    return {
        'type' : ADD_TASK,
        'task' : task
    };
}
export const TOGGLE_TASK_STATUS = 'TOGGLE_TASK_STATUS';
export function toggleTaskStatus(id) {
    return {
        'type' : TOGGLE_TASK_STATUS,
        'id' : id
    };
}