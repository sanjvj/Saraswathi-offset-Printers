import React from "react";

const Hero = () => {
  return (
    <div className="relative m-10 h-[80vh] rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-custom-image bg-cover bg-center filter brightness-[0.40]"></div>
      <div className="relative z-10 flex flex-col gap-5 items-start ml-40 mr-60 justify-start my-52 h-full text-white">
        <h1 className="text-8xl font-bold">
          ELEVATE YOUR <br></br><span className="bg-gradient-to-r from-sky-400 via-sky-200 to-sky-400 bg-clip-text text-transparent">BRAND</span> <br></br>WITH EVERY PRINT.
        </h1>
       
      </div>
    </div>
  );
};

export default Hero;
