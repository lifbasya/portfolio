"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Saat page load, ambil preferensi dari localStorage dan tampilkan navbar dengan animasi
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark-mode");
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    const root = document.documentElement;
    root.classList.toggle("dark-mode");
    const isDark = root.classList.contains("dark-mode");
    setIsDarkMode(isDark);
    localStorage.setItem("theme", isDark ? "dark" : "light");
  };

  return (
    <nav
      className="flex justify-between w-full items-center px-8 lg:px-10 py-3.5 bg-white dark-mode:bg-black rounded-[20px] border border-[#CBCBCB] left-0 right-0 m-auto top-5 mt-4"
    >
      <div>
        <img src="logo.png" alt="logo" className="w-8 lg:w-9" />
      </div>

      <div className="flex gap-8 justify-center items-center">
        <div className="hidden md:flex gap-6">
          <Link href="https://github.com/lifbasya" target="_blank">
            <img
              src="github.svg"
              alt="instagram"
              className="transition-transform duration-200 hover:scale-105"
            />
          </Link>
          <Link
            href="https://mail.google.com/mail/?view=cm&fs=1&to=alifattallahbasya@gmail.com"
            target="_blank"
          >
            <img
              src="gmail.svg"
              alt="gmail"
              className="transition-transform duration-200 hover:scale-105"
            />
          </Link>
          <Link href="https://www.linkedin.com/in/alifbasya/" target="_blank">
            <img
              src="linkedin.svg"
              alt="linkedin"
              className="transition-transform duration-200 hover:scale-105"
            />
          </Link>
        </div>

        <div
          onClick={toggleDarkMode}
          className={`group p-4 rounded-xl border-2 cursor-pointer transition-all duration-300
            ${
              isDarkMode ? "bg-black hover:bg-white" : "bg-white hover:bg-black"
            }`}
        >
          <img
            src={isDarkMode ? "sun.svg" : "moon.svg"}
            alt="theme icon"
            className={`w-5 lg:w-6 transition-all duration-300 project-img
              ${
                isDarkMode
                  ? "invert group-hover:invert-0"
                  : "group-hover:invert"
              }`}
          />
        </div>
      </div>
    </nav>
  );
}
