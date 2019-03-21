import React from 'react';
import PropTypes from 'prop-types';
import TodoTextInput from './TodoTextInput.jsx';

function TodoItem(props) {
    if (props.todo.editing) {
        return <TodoTextInput todo={props.todo.todo}
            todoId={props.todo.id}
            modeEditing={props.todo.editing}
            updateTodo={props.updateTodo} />;
    }
    return <span onClick={props.onClick} style={{ width: '460px' }}>{props.todo.todo}</span>;
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        todo: PropTypes.string.isRequired,
        editing: PropTypes.bool.isRequired
    }).isRequired,
    updateTodo: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired
};

export default TodoItem;