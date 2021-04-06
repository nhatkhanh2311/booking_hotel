import React from "react";
import {Link} from "react-router-dom";

export default function Footer() {
    return (
        <footer>
            <div className="mastfoot">
                <div className="inner-footer">
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <ul className="col-12">
                                    <li>
                                        <Link>
                                            Về chúng tôi
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