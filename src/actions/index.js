import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO, UPDATE_TODO, SET_VISIBILITY_FILTER } from '../constants/action-types';

export function addTodo(payload) {
    return {
        type: ADD_TODO, 
        payload
    };
}
export function deleteTodo(payload) {
    return {
        type: DELETE_TODO,
        payload
    }
}
export function doneTodo(payload) {
    return {
        type: DONE_TODO,
        payload
    }
}
export function editTodo(id, payload) {
    return {
        type: EDIT_TODO,
        id: id
    };
}
export function updateTodo(payload) {
    return {
        type: UPDATE_TODO,
        payload
    };
}
export function setVisibilityFilter(payload) {
    return {
        type: SET_VISIBILITY_FILTER,
        payload
    };
}