import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ListSearchResults from "../components/ListSearchResults";
import SearchBox from "../components/SearchBox";

export default function Search() {
    return (
        <>
            <Header/>
            <SearchBox/>
            <ListSearchResults/>
            <Footer/>
        </>
    );
}
