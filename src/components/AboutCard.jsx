import React from 'react'
import { SiHiveBlockchain, SiStrapi, SiFSecure } from "react-icons/si";
const AboutCard = ({icon,heading,text}) => {
  return (
    <div>
        <div className="flex flex-col border text-left rounded-2xl py-12 px-8">
              <div>
                <div className="bg-[var(--primary-blue)] inline-block p-2 rounded-[50%]">
                  {/* <SiHiveBlockchain size={40} /> */}
                  {icon}
                </div>
                <h3 className="text-xl font-bold">{heading}</h3>
                <p>
                  {text}
                </p>
              </div>
            </div>
    </div>
  )
}

export default AboutCard