import { useTheme } from "next-themes";
import Link from "next/link";
import React, { useEffect, useState } from "react";

import { BiMoon, BiSun } from "react-icons/bi";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="dark:bg-dark bg-white flex justify-between  font-semibold drop-shadow-md px-14 py-5">
      <Link href="/">
        <a className="font-extrabold text-xl">Where in the world?</a>
      </Link>
      <div className="flex items-center">
        <button
          className="flex items-center space-x-2"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {mounted && theme === "light" ? (
            <>
              <BiSun />
            </>
          ) : (
            <BiMoon />
          )}
          <p className="capitalize">{theme} Mode</p>
        </button>
      </div>
    </div>
  );
};

export default NavBar;
