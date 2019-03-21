import React from 'react';
import uuidv1 from 'uuid';
import PropTypes from 'prop-types';

class TodoTextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: props.todo
        };
        this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
        this.handleTodoChange = this.handleTodoChange.bind(this);
    }

    handleTodoChange(event) {
        this.setState({
            [event.target.id]: event.target.value //ou <=> todo: event.target.value
        });
    }

    handleTodoSubmit(event) {
        event.preventDefault();
        const { todo } = this.state;

        if (todo !== '') {
            if (this.props.modeEditing) {
                const id = this.props.todoId;
                this.props.updateTodo({ id: id, todo: todo, status: false });
            } else {
                const id = uuidv1();
                this.setState({ todo: '' });
                this.props.addTodo({ id: id, todo: todo, status: false });
            }
        }
    }

    render() {
        const labelClassName = (this.props.modeEditing) ? 'edit' : 'new-todo';
        return (
            <form onSubmit={this.handleTodoSubmit} className={labelClassName} style={{ display: 'inline' }} >
                <input type='text' id='todo' value={this.state.todo} onChange={this.handleTodoChange} placeholder='que faut-il faire?' />
            </form>
        );
    }
}

TodoTextInput.propTypes = {
    todo: PropTypes.string.isRequired
}

export default TodoTextInput;