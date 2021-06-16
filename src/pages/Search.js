import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
import SearchBox from "../components/SearchBox";

export default function Search() {
    return (
        <>
            <Header/>
            <SearchBox/>
            <SearchResults/>
            <Footer/>
        </>
    );
}
