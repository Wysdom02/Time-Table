import { getStudents } from "../actions/students.js";

const initialState = {
    students: []
}

export default function(state = initialState,action){
    switch(action.type){
        case getStudents:
        return{
            ...state,
            students: action.payload
        }
        default:
            return state;
    }
}