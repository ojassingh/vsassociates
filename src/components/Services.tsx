import { motion } from "framer-motion";
import Image from "next/image";
import Icon1 from "./icons/icon1";
import Icon2 from "./icons/Icon2";
import Icon3 from "./icons/Icon3";
import Icon4 from "./icons/Icon4";
import Icon5 from "./icons/Icon5";
import Icon6 from "./icons/Icon6";


export default function Services() {
  return (
    <div id="services" className="bg-back p-20">
      <h1 className="text-6xl font-bold text-secondary">Our services</h1>
      <div id="service-menu" className="p-20 grid gap-10">
        <div className="flex flex-wrap gap-10 text-black">
          <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="flex-1 rounded-3xl bg-white shadow-xl grid gap-2 p-10">
            {/* <Image src="" alt="" /> */}
            <Icon1/>

            <h2 className="text-3xl font-semibold text-center text-secondary">Service A</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lectus turpis, gravida eget nisl auctor, pulvinar blandit erat.
              Sed sed nulla ac quam aliquet dapibus et vel lorem. Vestibulum
              gravida.
            </p>
          </motion.div>

          <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="flex-1 rounded-3xl bg-white shadow-xl grid gap-2 p-10">
            <Icon2/>
            <h2 className="text-3xl font-semibold text-center text-secondary">Service B</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lectus turpis, gravida eget nisl auctor, pulvinar blandit erat.
              Sed sed nulla ac quam aliquet dapibus et vel lorem. Vestibulum
              gravida.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-10 text-black">
          <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="flex-1 rounded-3xl bg-white shadow-xl grid gap-2 p-10">
          <Icon3/>
            <h2 className="text-3xl font-semibold text-center text-secondary">Service A</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lectus turpis, gravida eget nisl auctor, pulvinar blandit erat.
              Sed sed nulla ac quam aliquet dapibus et vel lorem. Vestibulum
              gravida.
            </p>
          </motion.div>

          <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="flex-1 rounded-3xl bg-white shadow-xl grid gap-2 p-10">
          <Icon4/>
            <h2 className="text-3xl font-semibold text-center text-secondary">Service B</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lectus turpis, gravida eget nisl auctor, pulvinar blandit erat.
              Sed sed nulla ac quam aliquet dapibus et vel lorem. Vestibulum
              gravida.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-10 text-black">
          <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="flex-1 rounded-3xl bg-white shadow-xl grid gap-2 p-10">
          <Icon5/>
            <h2 className="text-3xl font-semibold text-center text-secondary">Service A</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lectus turpis, gravida eget nisl auctor, pulvinar blandit erat.
              Sed sed nulla ac quam aliquet dapibus et vel lorem. Vestibulum
              gravida.
            </p>
          </motion.div>

          <motion.div whileHover={{scale: 1.03, transition: {duration: 0.2}}} className="flex-1 rounded-3xl bg-white shadow-xl grid gap-2 p-10">
          <Icon6/>
            <h2 className="text-3xl font-semibold text-center text-secondary">Service B</h2>
            <p className="text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              lectus turpis, gravida eget nisl auctor, pulvinar blandit erat.
              Sed sed nulla ac quam aliquet dapibus et vel lorem. Vestibulum
              gravida.
            </p>
          </motion.div>
        </div>

        
      </div>
    </div>
  );
}
