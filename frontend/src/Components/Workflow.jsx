import React from "react";
import "../index.css";
const Workflow = () => {
  return (
    <div className="">
      <h1 className="text-5xl font-normal my-20 text-center">
        Walk Through our Workflow
      </h1>
      <div className="timeline">
        <div className="container left-container">
          <div className="text-box">
            <h2>Pre-Press</h2>
            <p>
              In the Pre-Press stage, designs are created or refined using
              software like CorelDRAW and then transferred onto CTP plates for
              high-quality printing.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>

        <div className="container right-container">
          <div className="text-box">
            <h2>Press</h2>
            <p>
              The Press stage involves using the CTP plates to print materials,
              handling tasks for CPC, P14, P24, and P28 projects. This ensures
              consistent and high-quality output.
            </p>
            <span className="right-container-arrow"></span>
          </div>
        </div>

        <div className="container left-container">
          <div className="text-box">
            <h2>Post-Press</h2>
            <p>
              Post-Press focuses on finishing touches like cutting, die-cutting,
              and scoring to prepare the printed materials for final use or
              distribution.
            </p>
            <span className="left-container-arrow"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Workflow;
