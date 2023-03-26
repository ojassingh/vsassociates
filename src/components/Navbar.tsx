import { motion } from "framer-motion";
import Link from "next/link";
import { type } from "os";

export default function Navbar() {
 

  const links= [
    {
      id: 1,
      name: "Home",
      link: "#home",
    },
    {
      id: 2,
      name: "About",
      link: "#about",
    },
    ,
    {
      id: 3,
      name: "Services",
      link: "#services",
    },
    {
      id: 4,
      name: "Contact",
      link: "#contact",
    },
  ];

  return (
    <div className="grid place-content-end px-10 py-5">
      <ul className="flex gap-4">
        {links.map((link: any) => {
          return (
            <li id={link.id} className="text-secondary font-medium text-lg px-3 py-2 bg-gray-400/30 rounded-xl">
              <Link href={link.link}>{link.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
