import { motion } from "framer-motion";
import Link from "next/link";
import { type } from "os";
import getLinks from "./NavLinks";

export default function Navbar() {

  const links = getLinks();
  return (
    <div className="grid place-content-end px-10 py-5">
      <ul className="flex gap-4">
        {links.map((link: any) => {
          return (
            <motion.li whileHover={{scale:1.05, transition: {duration: 0.1}}} key={link.id} className="text-secondary font-medium text-lg px-3 py-2 bg-gray-400/30 rounded-xl">
              <Link href={link.link}>{link.name}</Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
}
