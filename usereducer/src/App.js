import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { TodoContext, DispatchContext } from './contexts/';
import { reducer } from './reducers/';
import { Grid } from 'lucid-ui';
import uuid from 'uuid';
import './App.css';
import 'lucid-ui/dist/lucid.css';

function App() {
    const [todoState] = React.useState([
        {
            uuid: uuid.v4(),
            todo: 'Some todo',
            completed: false,
            date: new Date(),
        },
        {
            uuid: uuid.v4(),
            todo: 'Some other todo',
            completed: true,
            date: new Date(),
        },
    ]);
    const [state, dispatch] = React.useReducer(reducer, todoState);

    return (
        <DispatchContext.Provider value={{ dispatch }}>
            <TodoContext.Provider value={{ state }}>
                <div className='App'>
                    <Grid>
                        <Grid.Cell is8>
                            <TodoList />
                        </Grid.Cell>
                        <Grid.Cell>
                            <TodoForm />
                        </Grid.Cell>
                    </Grid>
                </div>
            </TodoContext.Provider>
        </DispatchContext.Provider>
    );
}

export default App;
