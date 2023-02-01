import React from "react";
import terminal from '../assests/terminal.png'

const Developers = () => {
  return (
    <div className="w-full text-white bg-black">
      <div className="max-w-[1240px] mx-auto px-4 py-16 md:flex">
        <div className="text-center">
          <h1 className="p-4">Superpowers for TradeX developers</h1>
          <p>
            Checkout the <span className="text-[var(--primary-blue)]">documentation</span>, the{" "}
            <span className=" text-[var(--primary-blue)]">quick start</span> or a guide below to
            integrate your project with thousands of tokens and billions of
            liquidity.
          </p>
        </div>
        <div className="flex justify-center w-full py-16">
            <img className="max-w-[250px] shadow-lg shadow-cyan-500/50" src={terminal} alt="   " />
        </div>
      </div>
    </div>
  );
};

export default Developers;
