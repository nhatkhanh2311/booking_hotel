import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./components/login/Login";

export default function App() {
    return (
        <Router>
            <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
            </Switch>
            <Footer/>
        </Router>
    );
}