import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { BiMoon, BiSun } from "react-icons/bi";
const NavBar = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return (
    <div className="dark:bg-darker bg-white flex justify-between dark:text-white text-dark font-semibold drop-shadow-md px-14 py-5">
      <h1 className="font-extrabold text-xl">Where in the world?</h1>
      <div className="flex items-center">
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
          {mounted && theme === "light" ? <BiSun /> : <BiMoon />}
        </button>
      </div>
    </div>
  );
};

export default NavBar;
