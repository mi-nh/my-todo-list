import React from 'react';
import TodoTextInput from '../components/TodoTextInput.jsx';
import { connect } from 'react-redux';
import { addTodo, doneTodo, deleteTodo } from '../actions/index';
import { ALL } from '../constants/filter-types';


function mapDispatchToProps(dispatch) {
    return {
        addTodo: todo => dispatch(addTodo(todo)),
        doneTodo: todo => dispatch(doneTodo(todo)),
        deleteTodo: todo => dispatch(deleteTodo(todo))
    }
}

function handleAllTodoDoneChange(event, callback) {
    callback({ items: ALL, checked: event.target.checked });
}

function handleAllTodoDeleteClick(callback) {
    callback({ items: ALL });
}

function Header(props) {
    return (
        <div>
            <input type='checkbox' onChange={(event) => handleAllTodoDoneChange(event, props.doneTodo)} style={{ marginLeft: '14px' }} />
            <TodoTextInput addTodo={props.addTodo} todo='' />
            <button onClick={() => handleAllTodoDeleteClick(props.deleteTodo)} style={{ marginLeft: '14px' }}>tout supprimer</button>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(Header);