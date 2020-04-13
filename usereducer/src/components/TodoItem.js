import React from 'react';
import { DispatchContext } from '../contexts';
import { setComplete, remTodo } from '../actions';
import { ButtonGroupDumb as ButtonGroup, Button, Dialog } from 'lucid-ui';
import Moment from 'react-moment';
import '../App.css';

const TodoItem = ({ todo }) => {
    const [isShown, setShown] = React.useState(false);
    const { dispatch } = React.useContext(DispatchContext);
    const buttonStyle = { width: '100px' };
    const promptDialog = () => {
        setShown(!isShown);
    };
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                height: 50,
            }}
        >
            <Dialog
                isShown={isShown}
                handleClose={() => setShown(!isShown)}
                size='small'
            >
                <div key={todo.uuid}>
                    Do you want to delete the following todo:
                    <br />
                    {todo.todo}
                </div>
                <Dialog.Footer>
                    <Button kind='invisible' onClick={() => setShown(!isShown)}>
                        No
                    </Button>
                    <Button
                        kind='primary'
                        onClick={() => {
                            setShown(!isShown);
                            dispatch(remTodo(todo.uuid));
                        }}
                    >
                        Yes
                    </Button>
                </Dialog.Footer>
            </Dialog>
            <span
                className={todo.completed ? 'completeTodo' : 'incompleteTodo'}
            >
                {todo.todo}
            </span>

            <div>
                <Moment format='DD/MM/YYYY'>{todo.date}</Moment>{' '}
                <ButtonGroup>
                    <ButtonGroup.Button
                        style={buttonStyle}
                        onClick={() => {
                            dispatch(setComplete(todo.uuid));
                        }}
                    >
                        {todo.completed ? 'Complete' : 'Incomplete'}
                    </ButtonGroup.Button>

                    <ButtonGroup.Button
                        style={buttonStyle}
                        onClick={() => setShown(!isShown)}
                    >
                        X
                    </ButtonGroup.Button>
                </ButtonGroup>
            </div>
        </div>
    );
};

export default TodoItem;
