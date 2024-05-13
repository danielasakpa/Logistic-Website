"use client";

import React from "react";
import { headerLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavItems = () => {
  const pathName = usePathname();

  return (
    <ul className="flex w-full flex-col items-start gap-6 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathName === link.route;
        return (
          <div key={link.label} className="relative">
            <li
              className={`${
                isActive && "text-opacity-60"
              } text-white sm:w-[70px] lg:w-[80px] md:w-auto flex-center p-medium-14 lg:p-regular-18 whitespace-nowrap hover:text-opacity-60`}
            >
              <Link href={link.route}>{link.label}</Link>
            </li>
            {isActive && (
              <span className="hidden sm:block absolute sm:-top-[39px] lg:-top-[35px] left-0 -z-10 h-3 w-full bg-purple"></span>
            )}
          </div>
        );
      })}
    </ul>
  );
};

export default NavItems;
