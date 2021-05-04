import React from "react";
import "./css/Error.css";
import {Link} from "react-router-dom";
import oops from "../assets/oops.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error() {
    return (
        <>
            <Header/>
            <section className="error-page">
                <div className="error-container">
                    <img src={oops} height="100"/>
                    <h2>Trang bạn đang cần truy cập không tồn tại!</h2>
                    <Link to="/" className="to-home">
                        {"<< Về trang chủ"}
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    )
}
