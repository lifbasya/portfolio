"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    title: "SPACE TRAVEL WEBSITE",
    image: "space-img.png",
    tech: ["NEXT JS", "TAILWIND"],
    link: "https://spacetravel-alif.netlify.app/",
  },
  {
    title: "SIMPLE DARK FORM",
    image: "form-img.png",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://alif-signupscreen.netlify.app/",
  },
  {
    title: "QR CODE GENERATOR",
    image: "qr-img.png",
    tech: ["HTML", "CSS", "JAVASCRIPT"],
    link: "https://qrcode-alif.netlify.app/",
  },
  {
    title: "TICTACTOE GAME",
    image: "tictac-img.png",
    tech: ["REACT", "TAILWIND"],
    link: "https://tictactoe-alif.netlify.app/",
  },
  // Tambah lebih banyak data sesuai kebutuhan
];

export default function Home() {

  return (
    <>
      <main className="w-full px-0 lg:px-10 py-14 lg:py-16">
        <section className="flex flex-col gap-14 lg:gap-0 lg:flex-row justify-center lg:justify-between items-center">
          {/* Text content */}
          <div
            className="w-full max-w-[588px] flex flex-col gap-10 lg:gap-16 justify-center"
          >
            <div className="flex flex-col gap-6 sm:gap-4 text-center lg:text-left">
              <h1 className="text-5xl font-semibold lg:text-6xl leading-14 lg:leading-16">
                HELLO, I AM ALIF BASYA
              </h1>
              <p className="font-medium text-base lg:text-lg roboto">
                Based in Indonesia, I am a fullstack developer I’m constantly
                learning and growing right now.
              </p>
            </div>
            <div className="text-center lg:text-left">
              <button
                onClick={() =>
                  document
                    .getElementById("footer")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="font-semibold text-lg lg:text-xl border-b-2 w-fit cursor-pointer"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Image */}
          <div
            className="flex flex-col gap-4 justify-center items-center"
          >
            <img
              src="head.svg"
              alt="myhead"
              className="max-w-38"
              style={{
                animation: "bobbing 1.5s ease-in-out infinite",
              }}
            />

            <style>
              {`
               @keyframes bobbing {
                 0%, 100% { transform: translateY(0); }
                 50% { transform: translateY(-10px); }
               }
             `}
            </style>
            <img src="body.svg" alt="myface" className="max-w-64" />
          </div>
        </section>
        <hr className="my-12 lg:my-16 border border-[#CBCBCB]" />
        <section
          className="flex flex-col gap-10 lg:gap-14 project-container"
        >
          {/* Judul PROJECT dengan animasi dari kiri */}
          <h2
            className="text-3xl md:text-4xl font-semibold lg:text-6xl"
          >
            PROJECT
          </h2>

          {/* Grid project muncul dengan animasi */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 justify-between gap-15"
          >
            {projects.map((project, index) => (
              <div
                key={index}
                onClick={() => window.open(project.link, "_blank")}
                className="cursor-pointer flex flex-col gap-5 w-full transition-all duration-700 transform"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full transform transition-transform duration-300 hover:scale-105 project-img"
                />
                <div className="flex flex-col gap-2">
                  <h4 className="font-semibold text-xl">{project.title}</h4>
                  <div className="roboto flex gap-4 text-base">
                    {project.tech.map((item, idx) => (
                      <p key={idx}>{item}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      <footer
        className="w-full px-0 lg:px-10 py-16"
        id="footer"
      >
        {/* Strip atas */}
        <div
          className="flex mb-12 justify-center lg:justify-start"
        >
          <div className="bg-black w-14 h-4"></div>
          <div className="bg-white w-14 h-4"></div>
        </div>

        {/* Konten utama */}
        <div
          className="flex flex-col text-center lg:text-left lg:flex-row justify-center lg:justify-between gap-10"
        >
          {/* Kiri */}
          <div
            className="flex flex-col gap-10 lg:gap-14 w-full lg:max-w-xl"
          >
            <div className="flex flex-col gap-8">
              <h2 className="font-semibold text-5xl lg:text-6xl">
                Can we create together ?
              </h2>
              <p className="text-base font-medium roboto">
                Let’s create something amazing I’m always open to new
                opportunities and collaborations.
              </p>
            </div>
            <div className="flex gap-6 sm:gap-8 lg:gap-12 justify-center lg:justify-start items-center flex-wrap">
              <Link href="https://www.kodein.sch.id/" target="_blank"><img src="kodein.svg" className="w-10 transition-transform duration-200 hover:scale-105" style={{ filter: 'none !important' }} /></Link>
              <Link
                href="https://github.com/lifbasya"
                target="_blank"
                className="font-medium lg:text-xl text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 hover"
              >
                GITHUB{" "}
                <span className="font-bold text-[22px] ml-0.5 md:ml-2">↗</span>
              </Link>
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=alifattallahbasya@gmail.com"
                target="_blank"
                className="font-medium lg:text-xl text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 hover"
              >
                EMAIL{" "}
                <span className="font-bold text-[22px] ml-0.5 md:ml-2">↗</span>
              </Link>
              <Link
                href="https://www.linkedin.com/in/alifbasya/"
                target="_blank"
                className="font-medium lg:text-xl text-lg border-b-2 border-transparent hover:border-black transition-all duration-300 hover"
              >
                LINKEDIN{" "}
                <span className="font-bold text-[22px] ml-0.5 md:ml-2">↗</span>
              </Link>
            </div>
          </div>

          {/* Kanan: Panah scroll to top */}
          <div
            className="flex flex-col justify-center items-center"           
          >
            <div
              className="bg-white px-6 py-5 rounded-2xl cursor-pointer hover:opacity-90 warna"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
              <img src="Arrow.svg" alt="logo" className="w-4 lg:w-5" />
            </div>
            <div className="bg-black lg:w-0.5 h-full garis"></div>
          </div>
        </div>
      </footer>
    </>
  );
}
