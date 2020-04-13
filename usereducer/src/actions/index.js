
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const SET_COMPLETE = 'SET_COMPLETE';
export const CLEAR_COMPLETE = 'CLEAR_COMPLETE';
export const MOVE_LIST_ITEMS = 'MOVE_LIST_ITEMS'

export const addTodo = (todoItem) => {
    return ({type: ADD_TODO, payload: todoItem})
}
// Stretch, do later
export const remTodo = (id) => {
    return ({type: REMOVE_TODO, payload: id})
}
export const setComplete = (id) => {
    return ({type: SET_COMPLETE, payload: id})
}
export const clearComplete = () => {
    return ({type: CLEAR_COMPLETE})
}
export const moveListItems = ({oldIndex, newIndex}) => {
    return ({type: MOVE_LIST_ITEMS, payload: {oldIndex, newIndex}})
}