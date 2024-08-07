import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between mx-20 mt-5">
        <div className="flex gap-4">
          <img src="logo.jpg" alt="Logo" className="h-14 w-10"></img>
          <h1 className="text-2xl font-bold">The Saraswathi <br></br>Offset Printers</h1>
          
        </div>
        <div>
          <ul className=" text-gray-600 flex gap-20 justify-end text-xl cursor-pointer mt-5 font-normal">
            <li>Home</li>
            <li>About Us</li>
            <li>Workflow</li>
            <li>Plant Layout</li>
            <li>Contact us</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
