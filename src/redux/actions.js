import { ADD_COSA } from './action-types'
import axios from 'axios'


export const addCosa = (cosa) => {
    return {
        type: ADD_COSA,
        payload: cosa
    }
}

export const addCosaDeInternet = () => {

    return (dispatch) => {

        // Irme a internet a por la cosa
        axios.get('https://jsonplaceholder.typicode.com/todos/1/').then(
            // hacer el dispatch de addCosa para actualizar el store
            res => dispatch(addCosa(res.data.title))
        )
    }

}

export const updateTodos = (todos) => {
    return {
        type: "UPDATE_TODOS",
        payload: todos
    }
}

export const startUpdateTodos = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(
            res => dispatch(updateTodos(res.data))
        )
    }
}