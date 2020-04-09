import React from 'react';
import { DispatchContext } from '../contexts';
import { addTodo, clearComplete } from '../actions';
import { ButtonGroupDumb as ButtonGroupDumb, TextField, ButtonGroup} from 'lucid-ui'

const TodoForm = () => {
    const [todoItem, setTodoItem] = React.useState('');
    const { dispatch } = React.useContext(DispatchContext);
    const buttonStyle = { width: '100px' };

    return (
        <>
            <TextField
                type='text'
                value={todoItem}
                onChange={(e) => setTodoItem(e.target.value)}
                onSubmit={() => dispatch(addTodo(todoItem))}
                placeholder='Enter your Todo!'
            />
            <ButtonGroup>
            <ButtonGroup.Button kind='primary' style={buttonStyle} onClick={() => dispatch(addTodo(todoItem))}>Add</ButtonGroup.Button>
            <ButtonGroup.Button kind='danger' style={buttonStyle} onClick={() => dispatch(clearComplete())}>Clear Complete</ButtonGroup.Button>
            </ButtonGroup>
        </>
    );
};

export default TodoForm;
