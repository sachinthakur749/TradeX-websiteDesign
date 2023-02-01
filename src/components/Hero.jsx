import React from "react";
import video from "../assests/video.mp4";

const Hero = () => {
  return (
    <div className="w-full h-[90vh] top-[90px] ">
      <video
        className="object-cover h-full w-full absolute -z-10 "
        src={video}
        autoPlay
        loop
        muted
      />
      <div className="w-full h-[90%] flex flex-col justify-center items-center text-center text-white px-4 ">
        <h1>Decentralized</h1>
        <h1 className="py-2"><span className="text-[var(--primary-blue)]">Trading</span> Protocol</h1>
        <p className="text-xl py-4">Guaranteed liquidity trading for millions of users and top etherum application</p>
        <div>
          <button className="m-2">Use TradeX</button>
          <button className="m-2">FAQ</button>
        </div>
      </div>
      <div>
        <p className="text-white text-xl text-center">
          Total Volume Secured : $42,345,1213,32
        </p>
      </div>
    </div>
  );
};

export default Hero;
