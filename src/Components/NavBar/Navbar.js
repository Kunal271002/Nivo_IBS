import React from "react";
import "../NavBar/Navbar1.css";
import "../NavBar/Navbar2.css";
import logo from "../../Assets/nivologo1.f63d196aa9c5cd4f9aeaba030fbe64a8.svg";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { Dropdown } from "antd";
import { DownOutlined, SmileOutlined } from '@ant-design/icons';
import { MenuProps } from 'antd';
import { Space } from 'antd';

function Navbar() {
  
  return (
    <div className="navbar_properties">
      <div className="FirstNavBar">
        <div className="container">
          <div className="d-flex text align-items-center py-2 justify-content-between">
            <div className="d-flex gap-3">
              <div className="d-flex gap-1 align-items-center">
                <FaLocationDot className="nav_location_icon" />
                <div className="nav_location_text">Location</div>
              </div>
              <div className="d-flex gap-1 align-items-center">
                <IoMail className="nav_location_icon" />
                <div className="nav_location_text">Email@Example.com</div>
              </div>
            </div>
            <div>
              <div className="nav-middle-marquee">
                <div className="marqee_-design">
                  <div className="insideMarqueeContainer">
                    <div className="finalChild">
                      <div className="nav-middle-text">
                        Note : We help you to Grow your Business
                      </div>
                    </div>
                  </div>
                </div>
                <div className="marqee_-design"></div>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bottom_nav-Nivotime">
        <div className="container">
          <a className="background-nav2-nivo navbar_barand_nivo">
            <img src={logo} alt="" style={{ width: "140px" }} />
          </a>

          <button
            aria-controls="responsive-navbar-nav"
            type="button"
            aria-label="Toggle navigation"
            className="navbar-toggler collapsed"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="justify-content-center navbar-collapse collapse"
            id="responsive-navbar-nav"
          >
            <div className="gap-4 navbar-nav">
              <a className="nav-bar-link-btn" href="#">
                Home
              </a>
              <a className="nav-bar-link-btn" href="#">
                Dashboard
              </a>
              <a className="nav-bar-link-btn" href="#">
                Benifits
              </a>
              <a className="nav-bar-link-btn" href="#">
                Useful Forms And Guides
              </a>
              <div className="ant-space css-3rel02 ant-space-horizontal ant-space-align-center ant-space-gap-row-small ant-space-gap-col-small ant-dropdown-trigger">
                <div className="nav-bar-link-btn ant-space-item">
                  Quick Links
                </div>
                {/* <div className="ant-space-item nav-bar-link-btn" ><RiArrowDropDownLine /></div> */}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
