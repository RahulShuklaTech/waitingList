import { GOT_USERS } from "./action_types"

let initialState = {
    users: []
}

export default function chatroom_reducer(state = initialState, action) {
    
    switch (action.type) {
        
        case GOT_USERS: 
            
        return {users: action.payload}
        
        default:
            return state;
    }
}