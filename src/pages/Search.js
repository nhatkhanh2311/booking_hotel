import React, {useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchResults from "../components/SearchResults";
// import SearchBox from "../components/SearchBox";

export default function Search() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header/>
            {/* <SearchBox/> */}
            <SearchResults/>
            <Footer/>
        </>
    );
}
