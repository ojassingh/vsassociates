import { motion } from "framer-motion";
import Image from "next/image";
import vs from "../../public/vs_auto_x2.jpg";
import link from '../../public/linkedin.svg';

export default function About() {
  return (
    <main
      id="about"
      className=" bg-[#CED9B8] lg:p-20 p-6 grid place-content-center"
    >
      <h1 className="text-dark font-bold text-6xl pt-10">Meet the founder! 👋</h1>
      <div className="lg:flex xl:flex flex-wrap-reverse py-20 lg:px-10 px-4 gap-2 mx-auto divide-x">
        <div className="flex-1">
          <div id="description" className="">
            <p className="text-xl text-gray-900 rounded-3xl bg-back lg:p-10 p-6 shadow-xl">
              <span className="text-secondary font-medium">Vandana Singh</span>{" "}
              is a highly experienced company secretary in practice, with over a{" "}
              <span className="text-secondary font-medium">
                decade of experience in corporate law
              </span>
              . As the founder and owner of Vandana Singh and Associates, she
              advises businesses on secretarial compliance, formation and
              registration of Indian and offshore companies, and various
              companies law matters. Vandana's expertise in{" "}
              <span className="text-secondary font-medium">
                acquisition, restructuring, private equity, and joint ventures,
                including drafting various agreements and conducting due
                diligence
              </span>
              , make her a valuable asset to businesses operating in India. Her
              dedication to her clients and commitment to excellence have earned
              her a reputation as one of{" "}
              <span className="text-secondary font-medium">
                India's leading corporate lawyers
              </span>
              .
            </p>
          </div>
        </div>
        <div className="flex-1 grid place-content-center mt-4">
          <div id="image" className="grid place-content-center gap-2">
            <Image alt="" src={vs} className=" w-96 rounded-3xl shadow-xl" />
            <div className="flex gap-3 w-full">
              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="flex-2 px-4 py-3 bg-secondary text-white text-xl rounded-2xl text-center font-medium shadow-xl"
              >
                Get in touch!
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/vandana-singh-5bbba120/"
                target="_blank"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
                className="flex-1 px-4 py-3 bg-secondary text-white text-lg rounded-2xl text-center grid place-content-center shadow-xl"
              >
                <Image src={link} alt="linkedin" className="text-white" />
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
