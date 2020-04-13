import React from 'react';
import TodoItem from './TodoItem';
import { TodoContext, DispatchContext } from '../contexts';
import { moveListItems } from '../actions';
import { DraggableList } from 'lucid-ui';

const TodoList = () => {
    const { state } = React.useContext(TodoContext);
    const { dispatch } = React.useContext(DispatchContext);

    const handleDrop = ({oldIndex, newIndex}) => {
        dispatch(moveListItems({ oldIndex, newIndex }))
    }
    return (
        <DraggableList
            onDrop={handleDrop}
            style={{ width: '100%' }}
            hasDragHandle={false}
        >
            {state.map((todo) => (
                <DraggableList.Item key={todo.uuid}>
                    <TodoItem todo={todo} />
                </DraggableList.Item>
            ))}
        </DraggableList>
    );
};

export default TodoList;
