import React from "react";
import imgHande from "../assets/ornek5.webp";

export default function Navbar() {
  return (
    <>
      <div className=" w-full h-full flex items-center justify-center">
        <img
          className="w-full  rounded-t-xl h-[450px]  "
          src={imgHande}
          alt="Hande Budak"
        />
      </div>
      <div className="p-6">
        <p className="text-3xl mt-10 text-white">Hande Budak</p>
        <p className="text-white mt-1">Frontend Developer</p>
        <p className="text-white mt-4">www.handebudak.dev</p>
        <div className="flex mt-4 gap-3">
          <a href="mailto:bdkhande@gmail.com">
            <button className="bg-[#FFFFFF] rounded-lg px-8 py-2">
              <i class="fa-solid fa-square-envelope"></i> E-Mail
            </button>
          </a>
          <a
            target="_blank"
            href="https://www.linkedin.com/in/hande-budak-658702159/"
          >
            <button className="bg-[#5093E2] rounded-lg px-8 py-2 text-white">
              <i class="fa-brands fa-linkedin"></i> LinkedIn
            </button>
          </a>
        </div>
      </div>
    </>
  );
}
