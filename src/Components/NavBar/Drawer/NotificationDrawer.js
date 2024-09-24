import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { FaBell } from "react-icons/fa6";
import insurance from "../../../Assets/Downloads.png";

import "./NotificationDrawer.css";
function NotificationDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };
  const onclose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <FaBell
        style={{ color: "#5b0888" }}
        className="Question-mark-icon"
        onClick={toggleDrawer}
      />
      <Drawer title="Notifications" onClose={onclose} open={isDrawerOpen}>
        <div>
          <div className="notifications-cards">
            <div className="notification-content">
              <img
                src={insurance}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
              <div className="mx-2">
                <a href="#" className="notification-drawer-text">
                  Insurance Renewal
                </a>
                <p className="notification-handler">
                  Your insurance policy is due for renewal on 2024-08-15.
                </p>
              </div>
            </div>
          </div>
          <div className="notifications-cards">
            <div className="notification-content">
              <img
                src={insurance}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
              <div className="mx-2">
                <a href="#" className="notification-drawer-text">
                  Insurance Renewal
                </a>
                <p className="notification-handler">
                  Your insurance policy is due for renewal on 2024-08-15.
                </p>
              </div>
            </div>
          </div>
          <div className="notifications-cards">
            <div className="notification-content">
              <img
                src={insurance}
                alt=""
                style={{ height: "40px", width: "40px" }}
              />
              <div className="mx-2">
                <a href="#" className="notification-drawer-text">
                  Insurance Renewal
                </a>
                <p className="notification-handler">
                  Your insurance policy is due for renewal on 2024-08-15.
                </p>
              </div>
            </div>
          </div>
         
        </div>
      </Drawer>
    </>
  );
}

export default NotificationDrawer;
