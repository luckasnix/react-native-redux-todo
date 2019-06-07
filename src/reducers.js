import {combineReducers} from 'redux';
import {ADD_TASK} from './actions';

export function taskList(state = [],action) {
    switch (action['type']) {
        case ADD_TASK:
            let newState = [...state];
            let newTask = {
                'task' : action['task']
            }
            return newState.push(newTask);
        default:
            return state;
    }
}

export const reducers = combineReducers({
    'tasks' : taskList
});