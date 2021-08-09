import { ADD_ROOM, DELETE_ROOMS, GOT_ROOMS, GOT_USERS, SIGNED_IN, SIGNING_IN } from "./action_types";
import firebase from "../firebaseConfig"
const database = firebase.database();



export const signIn = () => ({
    type: SIGNING_IN
})

export const signedIn = (data) => ({
    type: SIGNED_IN,
    payload: data
})

export const addRoomToState = (data) => ({
    type: ADD_ROOM,
    payload: data
})


export const gotUsers = (data) => ({
    type: GOT_USERS,
    payload: data
})


export const getWaitList = (userid) => {
    return async (dispatch) => { 
        try {
           const userList = await database.ref('users/').once('value'); 
           const user = Object.values(userList.val());
           dispatch(gotUsers(user));
           console.log(user)
        }catch(e){
            console.log(e)
        }
    }
 }


export const getRoomsFromDB = () => {
    return async (dispatch, getState) => {
        try {
            database.ref("rooms").on("value", (snapshot) => {

                dispatch(gotRooms(Object.values(snapshot.val())));
                
            });
        } catch (error) {
            console.error("error while fetching rooms".error);
        }
    }
}



export const addRoomToDB = (name,createdBy) => {
    return async (dispatch,getState) => {
        console.log("name",name)
        try {
                dispatch(addRoomToState({name,createdBy}))
                database.ref("rooms/" + name).set({ name, createdBy});

            }catch (error) {
            console.error(error);
        }
    }
}





export const gotRooms = (data) => ({
    type: GOT_ROOMS,
    payload: data
})

export const deleteRooms = (data) => ({
    type: DELETE_ROOMS,
    payload: data
})