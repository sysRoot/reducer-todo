import React from 'react'
import TodoItem from './TodoItem'
import {TodoContext} from '../contexts'

const TodoList = () => {
    const {todoState} = React.useContext(TodoContext)

    const todos = todoState.map(todo => <TodoItem key={todo.uuid} todo={todo}/>)
    return (<ul>{todos}</ul>);
}
 
export default TodoList;