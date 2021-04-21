import React from "react";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Error from "./pages/Error";
import UpHotel from "./components/UpHotel";

export default function App() {
    return (
        <div>
            <UpHotel></UpHotel>
        </div>
    );
}