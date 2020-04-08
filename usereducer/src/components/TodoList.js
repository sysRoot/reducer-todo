import React from 'react'
import TodoItem from './TodoItem'
import {TodoContext} from '../contexts'

const TodoList = () => {
    const {state} = React.useContext(TodoContext)

    console.log(state)
    const todos = state.map(todo => <TodoItem key={todo.uuid} todo={todo}/>)
    return (<ul>{todos}</ul>);
}
 
export default TodoList;