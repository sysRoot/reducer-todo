import React from 'react';
import { DispatchContext } from '../contexts';
import { setComplete } from '../actions';
import Moment from 'react-moment';
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
            -- <Moment format="DD/MM/YYYY">{todo.date}</Moment>
        </li>
    );
};

export default TodoItem;
