import React, { useState } from "react";
import { Button, Drawer } from "antd";
import { IoIosCart } from "react-icons/io";
import { Card, Space } from "antd";
import { RiFirstAidKitFill } from "react-icons/ri";

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
            <h5 className="mb-5" style={{marginTop:"-18px"}}>Insurance</h5>
          </div>
          <div style={{ marginTop: "-32px" }}>
            <Card style={{ width: 500 }}>
              <div className="d-flex justify-content-between align-items-center ">
                <div className="d-flex gap-3 align-items-center">
                  <RiFirstAidKitFill style={{height:"26px", width:"26px"}}/>
                  <div>
                    <h6>
                      <strong>Group Medical Cover</strong>
                    </h6>
                    <span className="ant-typography ant-typography-secondary text-success css-3rel02">
                      Sum Ensured: 2 Lakhs
                    </span>

                  </div>
                </div>
                <div>h1</div>
              </div>
            </Card>
            <Card style={{ width: 500 }} className="my-3">
              <p>Card content</p>
            </Card>
            <Card style={{ width: 500 }} className="my-3">
              <p>Card content</p>
            </Card>
          </div>
        </div>
      </Drawer>
    </>
  );
}

export default CartDrawer;
