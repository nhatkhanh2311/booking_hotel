import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Admin from "./pages/Admin";
import User from "./pages/User";


export default function App() {
    return (
        <Router>
            
             <Header/>
            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>
                <Route path="/director">

                </Route>
                <Route path="/user">
                    <User/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
            <Footer/> 
        </Router>
    );
}
