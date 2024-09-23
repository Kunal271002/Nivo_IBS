import React, { useState } from "react";
import { Button, Drawer } from "antd";

function CardDrawer() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const toggleDrawer = () => {
    setIsDrawerOpen(true);
  };
  const onclose = () => {
    setIsDrawerOpen(false);
  };
  return (
    <>
      <Button type="primary" onClick={toggleDrawer}>
        Open
      </Button>
      <Drawer title="Basic Drawer" onClose={onclose} open={isDrawerOpen}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
}

export default CardDrawer;
