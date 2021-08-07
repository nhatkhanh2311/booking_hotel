import React, {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";

export default function Search() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header color="rgb(5, 24, 43)"/>
            <SearchResults/>
            <Footer/>
        </>
    );
}
