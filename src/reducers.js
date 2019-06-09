import {combineReducers} from 'redux';
import {ADD_TASK} from './actions';

let curId = 0;
export function taskList(state = [],action) {
    switch (action['type']) {
        case ADD_TASK:
            let newTask = {
                'id' : curId++,
                'task' : action['task'],
                'done' : false
            }
            return [...state,newTask];
        default:
            return state;
    }
}

export const reducers = combineReducers({
    'tasks' : taskList
});