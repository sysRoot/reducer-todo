import React from 'react';
import { DispatchContext } from '../contexts';
import { addTodo } from '../actions';

const TodoForm = () => {
    const [todoItem, setTodoItem] = React.useState('');
    const { dispatch } = React.useContext(DispatchContext);
    return (
        <>
            <input
                type='text'
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                placeholder='Enter your Todo!'
            />
            <button onClick={() => dispatch(addTodo(todoItem))}>Add</button>
            <button>Clear Complete</button>
        </>
    );
};

export default TodoForm;
