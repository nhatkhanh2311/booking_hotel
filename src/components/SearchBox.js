import React from "react";
import "./css/SearchBox.css"
import {Link} from "react-router-dom";

export default function SearchBox() {
    return (
        <div className="cover-img">
            <div className="cover-container">
                <div className="cover">
                    <h1 className="cover-heading">Giải pháp đặt phòng khách sạn sang trọng và hiện đại</h1>
                </div>
                <div id="search-box">
                    <form id="inventory-search" action method="get">
                        <div className="row mb-1">
                            <div className="col-12 col-md-1 d-none d-md-inline-block"></div>

                            <div className="col-12 col-md-4 col-lg-4 pr-0 pl-1">
                                <div className="search-input-container">
                                    <div className="input-label">
                                        điểm đến
                                    </div>
                                    <input id="search-keyword" color="#292e46" type="text"
                                           placeholder="Bạn dự định đến đâu?"/>
                                </div>
                            </div>

                            <div className="col-9 col-md-3 col-lg-3 pr-0 pl-1">
                                <div className="search-input-container">
                                    <div className="input-label">
                                        check-in / check-out
                                    </div>
                                    <div className="search-input-date text-left">
                                        <input id="search-date-range" className="input-date"
                                               placeholder="Chọn khoảng thời gian"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-3 col-md-1 col-lg-1 text-center pr-0 pl-1">
                                <div className="search-input-container">
                                    <div className="input-label">
                                        số người
                                    </div>
                                    <div className="search-input-guests d-inline-block pl-1">
                                        <input id="search-guests" maxLength="1" min="1" max="5" type="number" value="2"
                                               className="input-guests d-inline-block"/>
                                    </div>
                                </div>
                            </div>

                            <div className="col-12 col-md-2 col-lg-2 pr-0 pl-1">
                                <Link id="button-submit">
                                    <div className="search-input-container search">
                                        Search
                                    </div>
                                </Link>
                            </div>

                            <div className="col-12 col-md-1 d-none d-md-inline-block"></div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
