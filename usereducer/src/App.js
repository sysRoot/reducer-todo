import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import {TodoContext} from './contexts/';
import uuid from 'uuid';
import './App.css';

function App() {
    const [todoState, setTodoState] = React.useState([
        {
            uuid: uuid.v4(),
            todo: 'Some todo',
            complete: false,
            date: new Date(),
        },
        {
            uuid: uuid.v4(),
            todo: 'Some other todo',
            complete: true,
            date: new Date(),
        },
    ]);
    const [state, dispatch]
    return (
        <TodoContext.Provider value={{todoState, setTodoState}}>
            <div className='App'>
                <TodoForm />
                <TodoList />
            </div>
        </TodoContext.Provider>
    );
}

export default App;
