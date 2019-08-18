import {combineReducers} from 'redux'
import {ADD_TASK,TOGGLE_TASK_STATUS,SET_TEXT_INPUT,EDIT_TASK,UPDATE_TASK} from './actions'

let curId = 1
export function taskList(state = [],action) {
    switch (action['type']) {
        case ADD_TASK:
            let newTask = {
                'id' : curId++,
                'task' : action['task'],
                'done' : false
            }
            return [...state,newTask]
        case UPDATE_TASK:
            return state.map((cur) => {
                if (cur['id'] === action['item']['id']) {
                    return action['item']
                }
                return cur
            })
        case TOGGLE_TASK_STATUS:
            return state.map((cur) => {
                if (cur['id'] === action['id']) {
                    return {
                        ...cur,
                        'done' : !cur['done']
                    }
                }
                return cur
            })
        default:
            return state
    }
}

const initialState = {
    'id' : null,
    'task' : '',
    'done' : false
}

export function textInput(state = initialState,action) {
    switch (action['type']) {
        case SET_TEXT_INPUT:
            return {
                ...state,
                'task' : action['text']
            }
        case ADD_TASK:
            return initialState
        case UPDATE_TASK:
            return initialState
        case EDIT_TASK:
            return action['item']
        default:
            return state
    }
}

export const reducers = combineReducers({
    'tasks' : taskList,
    'input' : textInput
})