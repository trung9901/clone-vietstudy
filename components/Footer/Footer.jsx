import React from "react";
import { AiOutlineFacebook, IconName } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-[#301a52]">
        <div className="w-[1200px] grid grid-cols-5 m-auto relative py-[100px]">
          <div className="">
            <h2 className="text-[20px] font-bold text-[white]">Community</h2>
            <div className="py-[15px]  leading-8">
              <ul>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Team</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Courses</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-bold text-[white]">About Us</h2>
            <div className="py-[15px]  leading-8">
              <ul>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Team</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Courses</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-bold text-[white]">
              Customer Care
            </h2>
            <div className="py-[15px]  leading-8">
              <ul>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Team</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Courses</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-bold text-[white]">
              Get to Know Us
            </h2>
            <div className="py-[15px]  leading-8">
              <ul>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Team</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Courses</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <h2 className="text-[20px] font-bold text-[white]">
              Ways to Learn
            </h2>
            <div className="py-[15px]  leading-8">
              <ul>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Team</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Our Courses</a>
                </li>
                <li className="block text-[#b0b2b5]">
                  <a href="">Testimonials</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <div class=" w-[1200px] m-auto text-black ">
            <hr />
          </div>
        </div>
        <div class="grid grid-cols-[400px_300px_400px] w-[1200px] m-auto py-[50px]">
          <div class="text-white">
            Copyright © 2022 by ThemeREX. All Rights Reserved.
          </div>
          <div class="m-auto">
            <img
              src="https://lingvico.themerex.net/wp-content/uploads/2018/07/logo.png"
              alt=""
            />
          </div>
          <div className="grid grid-cols-[25px_25px_25px_25px] gap-5 m-auto">
            <div className="border border-[#271544] w-[30px] text-white py-[5px] pl-[7px]  ">
              <FaFacebookF />
            </div>
            <div className="border border-[#271544] w-[30px] text-white pt-[5px] pl-[7px]  ">
              <FaFacebookF />
            </div>
            <div className="border border-[#271544] w-[30px] text-white pt-[5px] pl-[7px]  ">
              <FaFacebookF />
            </div>
            <div className="border border-[#271544] w-[30px] text-white pt-[5px] pl-[7px]  ">
              <FaFacebookF />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
