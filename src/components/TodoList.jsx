import React from 'react';
import PropTypes from 'prop-types';
import TodoItem from './TodoItem.jsx';
import { IN_PROGRESS, DONE } from '../constants/filter-types';

export function TodoList(props) {
    function handleDeleteTodoClick(id) {
        props.deleteTodo({ id: id });
    }
    function handleDoneTodoChange(id) {
        props.doneTodo({ id: id });
    }
    function handleEditTodoClick(item) {
        if (!item.status) {
            props.editTodo(item.id);
        }
    }
    return (
        <ul className="todo-list">
            {props.todos && props.todos
                .filter((item) => {
                    if (props.filter === IN_PROGRESS) {
                        return !item.status;
                    }
                    if (props.filter === DONE) {
                        return item.status;
                    }
                    return true;
                })
                .map(
                    (item) => (
                        <li key={item.id} style={{ textDecoration: item.status ? 'line-through' : 'none' }}>
                            <input type='checkbox' style={{ margin: '0 14px 0 14px', display: item.editing ? 'none' : 'inline' }}
                                checked={item.status}
                                onChange={() => handleDoneTodoChange(item.id)} />
                            <TodoItem todo={item}
                                onClick={() => handleEditTodoClick(item)}
                                updateTodo={props.updateTodo}
                            />
                            <button style={{ marginLeft: '14px' }}
                                onClick={() => handleDeleteTodoClick(item.id)}>
                                x
                            </button>
                        </li>
                    )
                )
            }
        </ul>
    );
}

TodoList.propTypes = {
    deleteTodo: PropTypes.func.isRequired,
    doneTodo: PropTypes.func.isRequired,
    editTodo: PropTypes.func.isRequired,
    todos: PropTypes.array.isRequired
}