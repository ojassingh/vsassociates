import { motion } from "framer-motion";
import Image from "next/image";
import Icon1 from "./icons/Icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import Icon4 from "./icons/Icon4";
import Icon5 from "./icons/Icon5";
import Icon6 from "./icons/Icon6";

export default function Services() {
  const services = [
    {
      key: 1,
      name: "Corporate Advisory",
      description:
        "Expert guidance on legal and regulatory matters related to Companies Act, SEBI, FEMA, FDI, and other corporate laws.",
    },
    {
      key: 2,
      name: "Winding Up",
      description:
        "Professional services to manage the process of winding up a company, including voluntary liquidation, in compliance with legal requirements.",
    },
    {
      key: 3,
      name: "Secretarial Auditing and Due Diligence",
      description:
        "Thorough evaluation and reporting on a company's compliance with Companies Act, 2013 and other regulations, as well as comprehensive due diligence reporting.",
    },
    {
      key: 4,
      name: "Mergers and Acquisitions",
      description:
        "Comprehensive support for all aspects of merger and acquisition transactions, including amalgamation and Scheme of Arrangements, to ensure a smooth and successful outcome.",
    },

    {
      key: 5,
      name: "Startup Registration",
      description:
        "Assistance with the registration process and compliance requirements for startups in India.",
    },
    {
      key: 6,
      name: "FEMA and RBI",
      description:
        "Advisory and compliance services related to the Foreign Exchange Management Act (FEMA) and Reserve Bank of India (RBI) regulations.",
    },
    {
      key: 7,
      name: "NCLT",
      description:
        "Representation and assistance in matters related to the National Company Law Tribunal (NCLT) including insolvency and bankruptcy proceedings.",
    },
  ];

  return (
    <div id="services" className="bg-back p-20">
      <h1 className="text-6xl font-bold text-secondary flex gap-10 ">Our services <span className="scale-150 mt-6"><Icon6/> </span></h1>
      <div id="service-menu" className="p-20">
        <div className="flex flex-wrap gap-10 text-black">
          {services.map((service: any, i: number)=>{
            return(<motion.div key={i}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              className="rounded-3xl w-80 bg-white shadow-xl grid gap-2 p-10"
            >
              <Icon1/>
  
              <h2 className="text-3xl font-semibold text-center text-secondary">
                {service.name}
              </h2>
              <p className="text-lg bg-pink-500/10 text-black p-2 rounded-xl text-center">
                {service.description}
              </p>
            </motion.div>)
          })}
        </div>
      </div>
    </div>
  );
}
