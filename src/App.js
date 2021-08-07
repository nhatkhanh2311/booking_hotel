import React from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import User from "./pages/User";
import Director from "./pages/Director";
import Search from "./pages/Search";
import Hotel from "./pages/Hotel";
import Booking from "./components/user/Booking"

export default function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>

                <Route path="/booking" render={() => {
                    return <Booking/>
                }}>
                </Route>

                <Route path="/search" render={() => {
                    return <Search/>
                }}>

                </Route>
                <Route path="/hotel" render={() => {
                    return <Hotel/>
                }}>
                </Route>

                <Route path="/account" render={() => {
                    switch (localStorage.getItem('roles')) {
                        case 'ROLE_ADMIN': return <Redirect to="/admin"/>
                        case 'ROLE_DIRECTOR': return <Redirect to="/director"/>
                        case 'ROLE_USER': return <Redirect to="/user"/>
                    }
                    return <Redirect to="/"/>
                }}>
                </Route>

                <Route path="/admin" render={() => {
                    return localStorage.getItem('roles') === 'ROLE_ADMIN' ? <Admin/> : <Redirect to="/"/>
                }}>
                </Route>

                <Route path="/director" render={() => {
                    return localStorage.getItem('roles') === 'ROLE_DIRECTOR' ? <Director/> : <Redirect to="/"/>
                }}>
                </Route>

                <Route path="/user" render={() => {
                    return localStorage.getItem('roles') === 'ROLE_USER' ? <User/> : <Redirect to="/"/>
                }}>
                </Route>

                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
        </Router>
    );
}
