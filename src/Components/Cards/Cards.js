import React, { useState } from "react";
import "../Cards/Cards.css";
import { LuFileClock } from "react-icons/lu";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { TbListDetails } from "react-icons/tb";
import { IoTicketSharp } from "react-icons/io5";
import logo from "../../Assets/medi-assist.6d5482dae7faba272789.jpg";
import logo1 from "../../Assets/logoNivo.png";
// import CardDrawer from "./Drawer/Drawer";
// import Drawer from "../Cards/Drawer/Drawer";
import { Drawer } from "antd";

function Cards() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [DrawerOpen, setDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(true);

    // alert("Hello")
  };
  const onclose = () => {
    setIsDrawerOpen(false);

  };
  const toggleDrawer1 = () => {
    setDrawerOpen(true);

    // alert("Hello")
  };
  const onclose1 = () => {
    setDrawerOpen(false);

  };

  return (
    <>
      <Drawer title="Paramaount TPA" onClose={onclose} open={isDrawerOpen}>
        <div className="container my-3" style={{borderRadius:"10px",border:"1px black"}}>
            <h5>Name</h5>
            <h5>Email</h5>
            <h5>Phone</h5>
            <h5>Level</h5>
            <h5>Location</h5>
        </div>
      </Drawer>
      <Drawer title="Helth Card" onClose={onclose1} open={DrawerOpen}>
        <div className="container my-3" style={{borderRadius:"10px",border:"1px"}}>
            <h5>Name1</h5>
            <h5>Email1</h5>
            <h5>Phone1</h5>
            <h5>Level1</h5>
            <h5>Location1</h5>
        </div>
      </Drawer>
      <div className="container my-2">
        <div className="row my-3">
          <div className="col-md-4">
            <div className="card card_style">
              <div className="card_inside">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#">
                      <div className="card">
                        <div className="FistCard">
                          <LuFileClock
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "blue",
                            }}
                          />
                          <h6 className="TrackClaim">Track Claim</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <div className="card">
                        <div className="FistCard">
                          <FaArrowRightFromBracket
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "yellow",
                            }}
                          />
                          <h6 className="TrackClaim">Initiate Claim</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <a href="#">
                      <div className="card">
                        <div className="FistCard">
                          <TbListDetails
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "green",
                            }}
                          />
                          <h6 className="TrackClaim">Benifites Details</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <div className="card">
                        <div className="FistCard">
                          <IoTicketSharp
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "Red",
                            }}
                          />
                          <h6 style={{ color: "red" }} className="TrackClaim">
                            Raise Tickets
                          </h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card card_style" onClick={toggleDrawer}>
              <div className="">
                <div className="para_ant_card_cover">
                  <img
                    src={logo}
                    style={{
                      height: "160px",
                      width: "100%",
                      borderRadius: "9px",
                    }}
                    alt=""
                  />
                </div>
                <div>
                  <div className="Paramount_text my-1">
                    <h5>Paramount TPA</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card card_style" onClick={toggleDrawer1}>
              <div
                className="card backgroundImageShade"
                style={{ margin: "10px" }}
              >
                <div className="image_Wallet_Nivo">
                  <div style={{ paddingRight: "25px " }}>
                    <div
                      style={{
                        display: "flex",
                        marginLeft: "20px",
                        marginTop: "10px",
                      }}
                    >
                      <img
                        src={logo1}
                        style={{ height: "px", width: "36px" }}
                        alt=""
                      />
                    </div>
                    <div style={{ color: "white", textAlign: "end" }}>
                      <h6>Nivo Health Wallet Card</h6>
                    </div>
                  </div>
                  <div
                    class="d-flex mt-4 gap-3"
                    style={{ color: "rgb(255, 255, 255)" }}
                  >
                    <div className="Vertical_text_for_health">
                      VALID ONLY IN INDIA
                    </div>
                    <div>
                      <div className="Number_Health_wallet">1234567</div>
                      <div
                        className=" d-flex gap-3 align-items-end text-center"
                        style={{ fontSize: "14px", lineHeight: "1.2" }}
                      >
                        <div style={{ fontSize: "12px" }}>VALID UPTO</div>
                        <div>
                          <span style={{ fontSize: "9px" }}>MONTH/YEAR</span>
                          <div>12/2024</div>
                        </div>
                      </div>
                      <div className="Name_hc">Demo</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
