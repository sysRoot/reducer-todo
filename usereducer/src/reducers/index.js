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
                }
            ];
            return nextState
        }
        // case 'REMOVE_TODO': {
        //Stretch, do later
        // }
        case 'SET_COMPLETE': {
        }
        case 'CLEAR_COMPLETE': {
        }

        default:
            return state;
    }
};
