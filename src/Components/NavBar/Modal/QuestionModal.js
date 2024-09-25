import React, { useState } from "react";
import { Button, Modal } from "antd";
import { HiOutlineQuestionMarkCircle } from "react-icons/hi2";

const QuestionModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <HiOutlineQuestionMarkCircle
        style={{ color: "#5b0888" }}
        className="Question-mark-icon"
        onClick={showModal}
      />
      <Modal
        title="Wallet Summary"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="container my-3">
          <div className="mt-2 d-flex justify-content-between">
            <h6>Insurance:</h6>
            <h6 className="text-primary">50,000</h6>
          </div>
          <div className="d-flex justify-content-between">
            <h6>Non-Insurance:</h6>
            <h6 className="text-primary">50,000</h6>
          </div>
          <hr style={{margin:"1rem 0"}} />
          <div className=" d-flex justify-content-between">
            <h6>Total Spending:</h6>
            <h6 className="text-danger">1,00,000</h6>
          </div>
          <div className="mt-2 d-flex justify-content-between">
            <h6>Salary:</h6>
            <h6 className="text-success">60,000</h6>
          </div>
          <div className=" d-flex justify-content-between">
            <h6>Overspend:</h6>
            <h6 className="text-danger">40,000</h6>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default QuestionModal;
