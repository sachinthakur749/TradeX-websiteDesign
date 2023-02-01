import React from "react";
import { SiHiveBlockchain, SiStrapi, SiFSecure } from "react-icons/si";
import { VscServerProcess } from "react-icons/vsc";
import {AiTwotoneApi} from 'react-icons/ai'
import {GrTestDesktop} from 'react-icons/gr'
import { FaNetworkWired} from 'react-icons/fa'
import AboutCard from "./AboutCard";

const About = () => {
  return (
    <div className="w-full bg-black text-white ">
      <div className="max-w-[1240px] mx-auto px-4 py-16 text-center bg-black">
        <div>
          <h1 className="py-4">A Growing Protocol Ecosystem </h1>
          <p className="py-4 text-xl">
            The Defi Protocol system empowers developers, liquidity providers,
            and traders to participate in a financial marketplace that is open
            and accessible to all.
          </p>
          <div className=" grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* ---card ------ */}
            <AboutCard
              icon={<SiHiveBlockchain size={40} />}
              heading={"Reliable, tamper-proof network"}
              text={
                "Use decentralization, trusted nodes, premium data, and cryptographic proofs to connect highly accurate and available data/APIs to any smart contract"
              }
            />
            <AboutCard
              icon={<AiTwotoneApi size={40} />}
              heading={"Seamless connection to any API"}
              text={
                "Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."
              }
            />
            <AboutCard
              icon={<GrTestDesktop className="text-white" size={40} />}
              heading={"Proven, ready-made solutions"}
              text={
                "Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications"
              }
            />
            <AboutCard
              icon={<FaNetworkWired size={40} />}
              heading={"Secure off-chain computation"}
              text={
                "Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
