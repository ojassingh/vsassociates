import { motion } from "framer-motion";
import Link from "next/link";
import { type } from "os";
import getLinks from "./NavLinks";

export default function Navbar() {

  const links = getLinks();
  return (
    <div className="grid lg:place-content-end xl:place-content-end sm:place-content-center md:place-content-center lg:px-10 xl:px-10 px-4 py-5">
      <ul className="flex gap-4">
        {links.map((link: any) => {
          return (
            <motion.li whileHover={{scale:1.05, transition: {duration: 0.1}}} key={link.id} className="text-secondary font-medium text-lg px-3 py-2 bg-gray-400/30 rounded-xl">
              <a href={link.link}>{link.name}</a>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
