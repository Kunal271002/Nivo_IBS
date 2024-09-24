import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { IoIosCart } from "react-icons/io";
import { Card, Space } from "antd";
import { RiFirstAidKitFill } from "react-icons/ri";
import { MdPersonalInjury } from "react-icons/md";
import { FaHandHoldingHeart } from "react-icons/fa";

import "./NotificationDrawer.css";
function CartDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };
  const onclose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <IoIosCart
        style={{ color: "#5b0888" }}
        className="Question-mark-icon"
        onClick={toggleDrawer}
      />
      <Drawer width={550} title="Cart" onClose={onclose} open={isDrawerOpen}>
        <div>
          <div>
            <h5 className="mb-5" style={{ marginTop: "-18px" }}>
              Insurance
            </h5>
          </div>
          <div style={{ marginTop: "-32px" }}>
            <Card style={{ width: 500, marginBottom: "16px" }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <RiFirstAidKitFill
                    style={{ height: "26px", width: "26px", color: "#5b0888" }}
                  />
                  <div>
                    <h6>
                      <strong style={{ color: "#5b0888" }}>
                        Group Medical Cover
                      </strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Ensured: 2 Lakhs
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>
                    Price :<strong className="text-success"> ₹ 10000</strong>
                  </h6>
                  <p className="mt-2">
                    <strong style={{ color: "Red" }}>₹ 1800.00</strong>
                  </p>
                </div>
              </div>
            </Card>
            <Card style={{ width: 500, marginBottom: "16px" }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <MdPersonalInjury
                    style={{ height: "26px", width: "26px", color: "#5b0888" }}
                  />
                  <div>
                    <h6>
                      <strong style={{ color: "#5b0888" }}>
                        Group Personal Accident
                      </strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Insured: 1 Lakh
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>
                    Price :<strong className="text-success"> ₹ 15000</strong>
                  </h6>
                  <p className="mt-2">
                    <strong style={{ color: "Red" }}>₹ 2700.00</strong>
                  </p>
                </div>
              </div>
            </Card>
            <Card style={{ width: 500, marginBottom: "16px" }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <FaHandHoldingHeart
                    style={{ height: "26px", width: "26px", color: "#5b0888" }}
                  />
                  <div>
                    <h6>
                      <strong style={{ color: "#5b0888" }}>
                        ABC Insurance
                      </strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Insured: 3 Lakhs
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>
                    Price :<strong className="text-success"> ₹ 15000</strong>
                  </h6>
                  <p className="mt-2">
                    <strong style={{ color: "Red" }}>₹ 2700.00</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
        <hr style={{ margin: "8px 0px" }} />
        <div>
          <div>
            <h5 className="mb-5" style={{ marginTop: "18px" }}>
              Non-Insurance
            </h5>
          </div>
          <div style={{ marginTop: "-32px" }}>
            <Card style={{ width: 500, marginBottom: "16px" }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <RiFirstAidKitFill
                    style={{ height: "26px", width: "26px", color: "#5b0888" }}
                  />
                  <div>
                    <h6>
                      <strong style={{ color: "#5b0888" }}>
                        Group Medical Cover
                      </strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Ensured: 2 Lakhs
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>
                    Price :<strong className="text-success"> ₹ 10000</strong>
                  </h6>
                  <p className="mt-2">
                    <strong style={{ color: "Red" }}>₹ 1800.00</strong>
                  </p>
                </div>
              </div>
            </Card>
            <Card style={{ width: 500, marginBottom: "16px" }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <MdPersonalInjury
                    style={{ height: "26px", width: "26px", color: "#5b0888" }}
                  />
                  <div>
                    <h6>
                      <strong style={{ color: "#5b0888" }}>
                        Group Personal Accident
                      </strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Insured: 1 Lakh
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>
                    Price :<strong className="text-success"> ₹ 15000</strong>
                  </h6>
                  <p className="mt-2">
                    <strong style={{ color: "Red" }}>₹ 2700.00</strong>
                  </p>
                </div>
              </div>
            </Card>
            <Card style={{ width: 500, marginBottom: "16px" }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <FaHandHoldingHeart
                    style={{ height: "26px", width: "26px", color: "#5b0888" }}
                  />
                  <div>
                    <h6>
                      <strong style={{ color: "#5b0888" }}>
                        ABC Insurance
                      </strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Insured: 3 Lakhs
                    </span>
                  </div>
                </div>
                <div style={{ textAlign: "right" }}>
                  <h6>
                    Price :<strong className="text-success"> ₹ 15000</strong>
                  </h6>
                  <p className="mt-2">
                    <strong style={{ color: "Red" }}>₹ 2700.00</strong>
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CartDrawer;
