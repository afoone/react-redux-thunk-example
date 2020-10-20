import { ADD_COSA } from './action-types'

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_COSA:
            return {
                ...state,
                cosas: [...state.cosas, action.payload]
            }
        case "REMOVE_COSA":
            console.log(action)
            return {
                ...state,
                cosas: state.cosas.filter(i => i !== action.payload)
            }
        case "ORDER_COSAS":
            return {
                ...state,
                cosas: state.cosas.sort()
            }
        case "UPDATE_TODOS":
            return {
                ...state,
                todos: action.payload
            }
        default:
            return state
    }
}

export default reducer