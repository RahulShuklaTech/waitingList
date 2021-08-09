import WaitingRoom from "./WaitingRoom"
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import React from "react";
import SignInPage from "./SignInPage";


export default function Wrapper(){
    return (
        <Router>
           
            <Switch>
                 <Route exact path={'/'} component = {SignInPage} />
                 <Route exact path={'/WaitingRoom'} component ={WaitingRoom} />
            </Switch>



        </Router>
    )
}