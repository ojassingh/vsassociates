import { motion } from "framer-motion";
import Image from "next/image";
import vs from "../../public/vs_auto_x2.jpg";

export default function About() {
  return (
    <main id="about" className="h-screen bg-[#CED9B8] p-20 grid place-content-center">
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
            <div className="flex gap-2 w-full">
                <motion.a href="#contact" whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }} className='flex-2 px-4 py-3 bg-secondary text-white text-xl rounded-3xl text-center font-medium'>
                Get in touch!
            </motion.a>

            <motion.a href="https://www.linkedin.com/in/vandana-singh-5bbba120/" target="_blank" whileHover={{
                scale: 1.05,
                transition: { duration: 0.2 },
            }} className='flex-1 px-4 py-3 bg-secondary text-white text-lg rounded-3xl text-center grid place-content-center'>
                <svg className="text-white " xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
            </motion.a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
