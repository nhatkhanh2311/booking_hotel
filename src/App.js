import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import UpHotel from "./components/UpHotel";
import Nav from "./components/NavbarAdmin"
export default function App() {
    return (
        <Router>
            <Header/>
            <Nav></Nav>
            {/* <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="*">
                    <Error/>
                </Route>
            </Switch>
            <Footer/> */}
        </Router>
    );
}
