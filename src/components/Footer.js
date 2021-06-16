import React from "react";
import logo from "../assets/logo.png";
import "./css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div className="footer-container">

        <div className="footer-content about-us">
          <div className="footer-title">ABOUT US</div>
          <hr className="hr" />
          <div className="f-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
              eveniet quibusdam porro molestias eligendi laborum sint amet
              repellendus pariatur reiciendis praesentium numquam rem sed
              nostrum, asperiores quaerat quam facere officiis.
            </p>
          </div>
          <div className="f-logo">
            <img id="logo" src={logo} alt="This is logo" />
          </div>
        </div>
        
        
        <div className="footer-content social">
          <div className="footer-contact">
            <div className="footer-title">CONTACT INFOR</div>
            <hr className="hr" />
            <div className="f-content">
              <ul className="list-infor-footer">
                <li className="infor-footer">
                  <i className="bx bx-envelope-open icon-footer"></i>
                  bookingHotelCNPM@gmail.com
                </li>
                <li className="infor-footer">
                  <i class='bx bx-mobile icon-footer'></i> 01365484574
                </li>
                <li className="infor-footer">
                  <i className="bx bxs-map icon-footer"></i>154 - Nguyen Luong Bang -
                  Lien Chieu - Da Nang
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-connect">
            <div className="footer-title">CONNECT WITH US</div>
            <hr className="hr" />
            <div className="f-content">
              <ul className="list-infor-footer connect">
                <li className="infor-footer">
                  <a href="https://www.instagram.com/" target="_blank">
                    <i className="bx bxl-instagram-alt icon-footer"></i>
                  </a>
                </li>
                <li className="infor-footer">
                  <a href="https://www.facebook.com/" target="_blank">
                    <i className="bx bxl-facebook-square icon-footer"></i>
                  </a>
                </li>
                <li className="infor-footer">
                  <a href="https://twitter.com/?lang=vi" target="_blank">
                    <i className="bx bxl-twitter icon-footer"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>


        <div className="footer-content payment">
          <div className="footer-title">PAYMENT ACCEPTED</div>
          <hr className="hr" />
          <div className="f-content payment-content">
            <span>VISA</span>
            <span>PayPal</span>
            <span>MasterCard</span>
          </div>
        </div>


        <div className="footer-content recent-post">
          <div className="footer-title">RECENT POST</div>
          <hr className="hr" />
          <div className="f-content recent-post-content">
            <a href="#"> post1</a>
            <a href="#"> post2</a>
            <a href="#"> post3</a>
            <a href="#"> post4</a>
            <a href="#"> post5</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
