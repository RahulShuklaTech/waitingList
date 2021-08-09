import signin_reducer from "./signin_reducer";
import {applyMiddleware, combineReducers, createStore} from "redux";
import chatroom_reducer from "./chatroom_reducer";
import thunk from "redux-thunk"


const rootReducer = combineReducers({
    user: signin_reducer,
    chatroom: chatroom_reducer
})

export const store = createStore(rootReducer,applyMiddleware(thunk));