import React from "react";
import SearchBox from "../components/SearchBox";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HomePage from "../components/HomePage";

export default function Home() {
    return (
        <>
            <Header/>
            <SearchBox/>
            <HomePage/>
            <Footer/>
        </>
    );
}
