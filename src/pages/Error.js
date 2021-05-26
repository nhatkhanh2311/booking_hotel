import React from "react";
import {Link} from "react-router-dom";
import oops from "../assets/oops.svg";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Error() {
    return (
        <>
            <Header/>
            <section style={{display: 'flex', justifyContent: 'center', padding: '4rem 0'}}>
                <div style={{textAlign: 'center', textTransform: 'capitalize'}}>
                    <img src={oops} style={{height: '100px', marginBottom: '50px'}}/>
                    <h2>Trang bạn đang cần truy cập không tồn tại!</h2>
                    <Link to="/" style={{fontSize: '20px'}}>
                        {"<< Về trang chủ"}
                    </Link>
                </div>
            </section>
            <Footer/>
        </>
    );
}
