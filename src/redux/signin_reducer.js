import { SIGNED_IN, SIGNING_IN } from "./action_types";

let initialState = {
    email: "",
    displayName: "",
    photoURL: "",
    disableButton: false
}

export default function signin_reducer(state = initialState, action) {
    let copyState = JSON.parse(JSON.stringify(state));
    switch (action.type) {
        case SIGNING_IN:
            return { ...state, disableButton: true }

        case SIGNED_IN:
            let {email,displayName,photoURL,disableButton,userId} = action.payload
            copyState = {
                email,
                displayName,
                photoURL,
                disableButton,
                userId
            }

            return { ...copyState }

        default:
            return state;
    }
}