import { motion } from "framer-motion";
import getLinks from "./NavLinks";
import Link from "next/link";

export default function Footer() {
  const links = getLinks();

  return (
    <div className="bg-gray-900 text-gray-300 p-20">
      <div className="flex flex-wrap gap-10 place-content-center pb-10">
       
        <div className="">
          <h1 className="font-medium text-lg">Connect</h1>
          <ul className="">
            <li>
                <a href="https://www.linkedin.com/in/vandana-singh-5bbba120/" target="_blank">LinkedIn</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h1 className="font-medium text-lg">Go to</h1>
          <ul className="">
            {links.map((link: any, i: number) => {
              return (
                <li>
                  <Link key={i} href={link.link}>
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="px-20 text-center">
        <h1 className="">Vandana Singh and Associates</h1>
        <h1 className="">All Rights Reserved ©</h1>
      </div>
    </div>
  );
}
