import React from 'react';
import PropTypes from 'prop-types';
import TodoFooterLink from './TodoFooterLink.jsx';
import { ALL, IN_PROGRESS, DONE } from '../constants/filter-types';

export default function TodoFooter(props) {
    const totalRemaining = props.todos.reduce((acc, cur) => {
        if (!cur.status) {
            return acc + 1;
        }
        return acc;
    }, 0);

    return (
        <div>
            <span className='todo-count' style={{marginLeft:'5px'}}>{totalRemaining} tache(s) restante(s)</span>
            <TodoFooterLink label='Toutes' onClick={() => props.setVisibilityFilter({ filter: ALL })} />
            <TodoFooterLink label='En cours' onClick={() => props.setVisibilityFilter({ filter: IN_PROGRESS })} />
            <TodoFooterLink label='Terminés' onClick={() => props.setVisibilityFilter({ filter: DONE })} />
        </div>
    );
}

TodoFooter.propTypes = {
    todos: PropTypes.array.isRequired,
    setVisibilityFilter: PropTypes.func.isRequired
}