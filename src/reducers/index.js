import { ADD_TODO, DELETE_TODO, DONE_TODO, EDIT_TODO, UPDATE_TODO, SET_VISIBILITY_FILTER } from '../constants/action-types';
import { ALL, IN_PROGRESS, DONE } from '../constants/filter-types';

const initialState = {
    todos: [{ id: '1', todo: 'Programmer une todo', status: false, editing: false }],
    filter: ALL
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_TODO) {
        return Object.assign({}, state, {
            todos: state.todos.concat(action.payload)
        });
    }
    if (action.type === DELETE_TODO) {
        let todosDeleted;
        if (action.payload.items && action.payload.items === ALL) {
            todosDeleted = [];
        } else {
            todosDeleted = state.todos.filter(todo => todo.id !== action.payload.id);
        }
        return Object.assign({}, state, {
            todos: todosDeleted
        });
    }
    if (action.type === DONE_TODO) {
        return Object.assign({}, state, {
            todos: state.todos.map((todo) => {
                if (action.payload.id && todo.id === action.payload.id) {
                    todo.status = !todo.status;
                } else if (action.payload.items && action.payload.items === ALL) {
                    todo.status = action.payload.checked;
                }
                return todo;
            })
        });
    }
    if (action.type === EDIT_TODO) {
        return Object.assign({}, state, {
            todos: state.todos.map((todo) => {
                if (todo.id === action.id) {
                    todo.editing = true;
                }
                return todo;
            })
        });
    }
    if (action.type === UPDATE_TODO) {
        return Object.assign({}, state, {
            todos: state.todos.map((todo, index) => {
                if (todo.id === action.payload.id) {
                    state.todos[index] = action.payload;
                    state.todos[index].editing = false;
                }
                return state.todos[index];
            })
        });
    }
    if (action.type === SET_VISIBILITY_FILTER) {
        switch (action.payload.filter) {
            case IN_PROGRESS:
                return Object.assign({}, state, {
                    filter: IN_PROGRESS
                });
            case DONE:
                return Object.assign({}, state, {
                    filter: DONE
                });
            default:
                return Object.assign({}, state, {
                    filter: ALL
                });
        }
    }
    return state;
};

export default rootReducer;