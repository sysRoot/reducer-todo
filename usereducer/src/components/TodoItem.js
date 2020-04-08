import React from 'react';
import { DispatchContext } from '../contexts';
import { setComplete } from '../actions';
import '../App.css';

const TodoItem = ({ todo }) => {
    const { dispatch } = React.useContext(DispatchContext);
    return (
        <li
            onClick={(e) => {
                e.stopPropagation();
                dispatch(setComplete(todo.uuid));
            }}
        >
            <span
                className={todo.completed ? 'completeTodo' : 'incompleteTodo'}
            >
                {todo.todo}
            </span>
        </li>
    );
};

export default TodoItem;
