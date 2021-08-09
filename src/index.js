import React from "react";
import ReactDOM from 'react-dom';
import { Provider, useSelector } from 'react-redux';
import "./index.css"
import SignInPage from "./components/SignInPage"
import WaitingRoom from "./components/WaitingRoom"
import { store } from './redux/store';
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";



ReactDOM.render(
  <Provider store={store}>
    <Router>
      
      <Switch>
        <Route exact path={'/'} component={SignInPage} />

        <PrivateRoute exact path={'/WaitingRoom'} component={WaitingRoom} />
      </Switch>

    </Router>
  </Provider>
  ,
  document.getElementById('root')
);


function PrivateRoute({ children, ...rest }) {
  let user = useSelector(state => state.user)
  console.log("user",user)
  return (
    <Route
      {...rest}
      render={({ location }) =>
       user.email !== ""  ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
}