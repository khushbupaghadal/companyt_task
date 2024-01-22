import { GETAPI } from "../Type/Type"

export let loginreducer = (state = [] , action) =>{
    switch(action.type) {
        case GETAPI : {
            return action.data
        }
        default:{
            return state
        }
    }
}