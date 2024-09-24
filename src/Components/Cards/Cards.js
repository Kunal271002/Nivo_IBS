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
import { IoPerson } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { Drawer } from "antd";
import { Card, Space } from "antd";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaLevelUpAlt } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

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
        <Space direction="vertical" size={16}>
          <Card
            // title="Default size card"
            // extra={<a href="#">More</a>}
            style={{ width: 320 }}
          >
            <div className="d-flex justify-content-between">
              <h6>
                <strong
                  className="d-flex align-item-center"
                  style={{ gap: "6px" }}
                >
                  <IoPerson style={{ color: "#5b0888" }} />
                  Name:
                </strong>
              </h6>
              <div>
                <h6>H1</h6>
              </div>
            </div>
            <hr style={{ margin: "8px 0px" }} />
            <div className="d-flex justify-content-between">
              <h6>
                <strong
                  className="d-flex align-item-center"
                  style={{ gap: "6px" }}
                >
                  <MdEmail style={{ color: "#5b0888" }} />
                  Email:
                </strong>
              </h6>
              <div>
                <h6>H1</h6>
              </div>
            </div>
            <hr style={{ margin: "8px 0px" }} />
            <div className="d-flex justify-content-between">
              <h6>
                <strong
                  className="d-flex align-item-center"
                  style={{ gap: "6px" }}
                >
                  <FaPhoneAlt style={{ color: "#5b0888" }} />
                  Phone:
                </strong>
              </h6>
              <div>
                <h6>H1</h6>
              </div>
            </div>
            <hr style={{ margin: "8px 0px" }} />
            <div className="d-flex justify-content-between">
              <h6>
                <strong
                  className="d-flex align-item-center"
                  style={{ gap: "6px" }}
                >
                  <FaLevelUpAlt style={{ color: "#5b0888" }} />
                  Level:
                </strong>
              </h6>
              <div>
                <h6>H1</h6>
              </div>
            </div>
            <hr style={{ margin: "8px 0px" }} />
            <div className="d-flex justify-content-between">
              <h6>
                <strong
                  className="d-flex align-item-center"
                  style={{ gap: "6px" }}
                >
                  <FaLocationDot style={{ color: "#5b0888" }} />
                  Location:
                </strong>
              </h6>
              <div>
                <h6>H1</h6>
              </div>
            </div>
          </Card>
        </Space>
      </Drawer>
      <Drawer title=" Download Health Card" onClose={onclose1} open={DrawerOpen}>
        <Space direction="vertical" size={16}>
          <Card style={{ width: 320 }}>
            <div className="d-flex justify-content-between">
              <h6>
                <strong
                  className="d-flex align-item-center"
                  style={{ gap: "6px" }}
                >
                  Employee
                </strong>
              </h6>
              <button className="Download-btn-health-card">
                <div className="svg-wrapper-1">
                  <div className="svg-wrapper">
                    <FaCloudDownloadAlt />
                  </div>
                  <div>
                    <span>Download</span>
                  </div>
                </div>
              </button>
            </div>
          </Card>
        </Space>
      </Drawer>
      <div className="container my-2">
        <div className="row my-3">
          <div className="col-md-4">
            <div className="card card_style">
              <div className="card_inside">
                <div className="row">
                  <div className="col-md-6">
                    <a href="#">
                      <div
                        className="card"
                        style={{ borderColor: "rgba(13, 110, 253, 1)" }}
                      >
                        <div className="FistCard">
                          <LuFileClock
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "rgba(13, 110, 253, 1)",
                            }}
                          />
                          <h6 className="TrackClaim">Track Claim</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <div
                        className="card"
                        style={{ borderColor: "rgba(255, 193, 27, 1)" }}
                      >
                        <div className="FistCard">
                          <FaArrowRightFromBracket
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "rgba(255, 193, 27, 1)",
                            }}
                          />
                          <h6 className="text-warning">Initiate Claim</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6">
                    <a href="#">
                      <div
                        className="card"
                        style={{ borderColor: "rgba(25, 135, 84, 1)" }}
                      >
                        <div className="FistCard">
                          <TbListDetails
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "green",
                            }}
                          />
                          <h6 className="text-success">Benifites Details</h6>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6">
                    <a href="#">
                      <div
                        className="card"
                        style={{ borderColor: "rgba(220, 53, 69, 1)" }}
                      >
                        <div className="FistCard">
                          <IoTicketSharp
                            style={{
                              height: "30px",
                              width: "30px",
                              color: "rgba(220, 53, 69, 1)",
                            }}
                          />
                          <h6 style={{ color: "red" }} className="text-danger">
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
