import React from "react";
import {Link} from "react-router-dom";
import facebook from "../assets/facebook.svg"

export default function Footer() {
    return (
        <footer>
            <div className="mastfoot">
                <div className="inner-footer">
                    <div className="row">
                        <div className="follow col-12">
                            {"Theo dõi trên "}
                            <Link>
                                <img src={facebook}/>
                            </Link>
                        </div>
                        <div className="col-12">
                            <div className="row">
                                <ul className="col-12">
                                    <li>
                                        <Link className="footer-link">
                                            Về chúng tôi
                                        </Link>
                                    </li>
                                    <li>
                                        <Link className="footer-link">
                                            Trợ giúp
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}