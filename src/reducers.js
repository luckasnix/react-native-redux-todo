import {combineReducers} from 'redux';
import {ADD_TASK,TOGGLE_TASK_STATUS} from './actions';

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
        case TOGGLE_TASK_STATUS:
            return state.map((cur) => {
                if (cur['id'] === action['id']) {
                    return {
                        ...cur,
                        'done' : !cur['done']
                    };
                }
                return cur;
            });
        default:
            return state;
    }
}

export const reducers = combineReducers({
    'tasks' : taskList
});