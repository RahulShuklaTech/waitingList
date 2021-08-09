import React from 'react'
import { useSelector } from 'react-redux'
import firebase from "../firebaseConfig"
import { useHistory } from "react-router-dom";



const Nav = () => {
    let history = useHistory();
    let state = useSelector(state => state);
    console.log(state)
    let { photoURL,displayName } = state.user;

    return (
        <div className="nav">
            <h1>Waiting Room</h1>
            <div className="right-top" >
                <h2>{displayName}</h2>

                <img src={photoURL} alt="pic" />
                <div>
                    <button onClick={() => {
                        firebase.auth().signOut().then(() => {
                            history.push({
                                pathname: "/"
                            })

                        }).catch((error) => {
                            // An error happened.
                        });
                    }}>Sign Out</button>

                </div>
            </div>

        </div>
    )
}

export default Nav
