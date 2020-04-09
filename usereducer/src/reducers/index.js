import uuid from 'uuid';

export const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            const nextState = [
                ...state,
                {
                    uuid: uuid.v4(),
                    todo: action.payload,
                    completed: false,
                    date: new Date(),
                },
            ];
            return nextState;
        }
        case 'REMOVE_TODO': {
            // Stretch, do later
            const nextState = [
                ...state.filter((todo) => todo.uuid !== action.payload),
            ];
            return nextState;
        }
        case 'SET_COMPLETE': {
            
            const nextState = [
                ...state.map((todo) => {
                    if (todo.uuid === action.payload) {
                        return { ...todo, completed: !todo.completed };
                    }
                    return todo;
                }),
            ];
            return nextState;
        }
        case 'CLEAR_COMPLETE': {
            const nextState = [
                ...state.filter((todo) => todo.completed === false),
            ];
            return nextState;
        }
        case 'MOVE_LIST_ITEMS': {
            let nextState = state.filter(
                (column, index) => index !== action.payload.oldIndex
            );

            console.log(nextState);
            nextState.splice(
                action.payload.newIndex,
                0,
                state[action.payload.oldIndex]
            );
            console.log(nextState);
            return nextState;
        }
        default:
            return state;
    }
};
