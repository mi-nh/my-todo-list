import React from 'react';
import { TodoList } from '../components/TodoList.jsx';
import TodoFooter from '../components/TodoFooter.jsx';
import { connect } from 'react-redux';
import { deleteTodo, doneTodo, editTodo, updateTodo, setVisibilityFilter } from '../actions/index';


const mapStateToProps = (state) => {
    return {
        todos: state.todos,
        displayTodos: state.displayTodos,
        filter: state.filter
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: id => dispatch(deleteTodo(id)),
        doneTodo: todo => dispatch(doneTodo(todo)),
        editTodo: id => dispatch(editTodo(id)),
        updateTodo: todo => dispatch(updateTodo(todo)),
        setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
    };
}

function MainSection(props) {
    return (
        <div className="main">
            <TodoList 
                todos={ props.todos }
                filter={ props.filter }
                deleteTodo={ props.deleteTodo }
                doneTodo={ props.doneTodo }
                editTodo={ props.editTodo }
                updateTodo={ props.updateTodo }
            />
            <TodoFooter todos={ props.todos } setVisibilityFilter={ props.setVisibilityFilter } />
        </div>
    );
}
export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
