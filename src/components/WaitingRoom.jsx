import React, { useEffect, useRef } from 'react'
import Nav from './Nav'
import { useDispatch, useSelector } from 'react-redux';
import { addRoomToDB, getRoomsFromDB, getWaitList } from '../redux/action';



export default function WaitingRoom() {
    
    const dispatch = useDispatch();
    const state = useSelector(state => state);

    const { users } = state.chatroom;
    const { displayName } = state.user;


    useEffect(() => {
        dispatch(getWaitList())
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const queueNumber  = users.findIndex((user => user.username === displayName))      

    return (
        <div className="chatrooms">
            <Nav />
            <div className="chat-rooms-container">
                <h1 className="header">Waiting Room</h1>
                <div className="chatrooms-menu">
                    <h2>Hi {displayName},</h2>
                    <h3>Your queue number is {queueNumber+1} of {users.length}</h3>

            
                </div>
                
            </div>
        </div>
    )
}


