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
export const SET_TEXT_INPUT = 'SET_TEXT_INPUT';
export function setTextInput(text) {
    return {
        'type' : SET_TEXT_INPUT,
        'text' : text
    };
}
export const EDIT_TASK = 'EDIT_TASK';
export function editTask(item) {
    return {
        'type' : EDIT_TASK,
        'item' : item
    };
}
export const UPDATE_TASK = 'UPDATE_TASK';
export function updateTask(item) {
    return {
        'type' : UPDATE_TASK,
        'item' : item
    };
}