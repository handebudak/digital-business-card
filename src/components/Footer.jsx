import React from "react";

export default function Footer() {
  return (
    <div className="flex justify-center space-x-8 bg-[#161619] w-full mt-10 border-[#161619] rounded-b-xl">
      <li className="list-none mt-5 my-5">
        <i className="fa-brands fa-twitter text-2xl text-[#161619] bg-[#918E9B] p-2 px-3 rounded"></i>
      </li>
      <li className="list-none mt-5 my-5">
        <i className="fa-brands fa-facebook text-2xl text-[#161619] bg-[#918E9B] p-2 px-3 rounded"></i>
      </li>
      <li className="list-none mt-5 my-5">
        <i className="fa-brands fa-square-instagram text-2xl text-[#161619] bg-[#918E9B] p-2 px-3  rounded"></i>
      </li>
      <li className="list-none mt-5 my-5">
        <i className="fa-brands fa-square-github text-2xl text-[#161619] bg-[#918E9B] p-2 px-3 rounded"></i>
      </li>
    </div>
  );
}
