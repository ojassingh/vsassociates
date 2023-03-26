import { motion } from "framer-motion";
import Image from "next/image";
import vs from "../../public/vs_auto_x2.jpg";

export default function About() {
  return (
    <main className="h-screen bg-[#CED9B8] p-20 grid place-content-center">
      <h1 className="text-black font-bold text-5xl pt-10">Meet the founder!</h1>
      <div className="flex flex-wrap py-20 px-10 gap-2 place-content-center divide-x">
        <div className="flex-1">
          <div id="description">
            <p className="text-xl text-gray-900 rounded-3xl bg-back p-10">
            <span className="text-secondary font-medium">Vandana Singh</span> is a highly experienced company secretary in practice, with over a <span className="text-secondary font-medium">decade of experience in corporate law</span>. As the founder and owner of Vandana Singh and Associates, she advises businesses on secretarial compliance, formation and registration of Indian and offshore companies, and various companies law matters. Vandana's expertise in <span className="text-secondary font-medium">acquisition, restructuring, private equity, and joint ventures, including drafting various agreements and conducting due diligence</span>, make her a valuable asset to businesses operating in India. Her dedication to her clients and commitment to excellence have earned her a reputation as one of <span className="text-secondary font-medium">India's leading corporate lawyers</span>.
            </p>
          </div>
        </div>
        <div className="flex-1 grid place-content-center">
          <div id="image" className="grid place-content-center gap-2">
            <Image alt="" src={vs} className=" w-96 rounded-3xl " />
            <motion.button whileHover={{
            scale: 1.05,
            transition: { duration: 0.2 },
          }} className='px-4 py-3 bg-secondary text-white text-lg rounded-3xl'>
            Get in touch!
          </motion.button>
          </div>
        </div>
      </div>
    </main>
  );
}
