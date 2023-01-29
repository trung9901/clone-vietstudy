import React from "react";
import { BiArrowFromLeft, BiSearch, BiTimeFive } from "react-icons/bi";
import { FaBuffer, FaCodepen } from "react-icons/fa";
import ContentRight from "../../components/courses/contentRight";
import Header from "../../components/Header/Header1";
import styles from "./courses.module.css";
const index = () => {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.content}>
        <div className={styles.content_left}>
          <div className="grid grid-cols-[650px_100px]">
            <div>
              <form className="p-[6px] relative border w-[630px]">
                <input
                  className="w-[93%]"
                  type="text"
                  placeholder="Search..."
                />
                <button className="absolute r-[px] bg-[#f24080] text-white font-bold px-[8px] py-[5px]">
                  <BiSearch />
                </button>
              </form>
            </div>
            <div className="flex">
              <div className="p-[10px]">
                <FaCodepen />
              </div>
              <div className="p-[10px]">
                <FaBuffer />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[300px_1fr] py-[30px] bg-[#ededec] gap-8 my-[20px]">
            <div className="img pl-[30px]">
              <img
                src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-7-copyright-760x428.jpg"
                alt=""
              />
            </div>
            <div className="contenitem">
              <div className="flex">
                <button className="bg-[#41246d] p-[5px] text-white hover:bg-[#f24080]">
                  Spanish
                </button>
                <span className="pl-[20px] text-[#8a819a] text-[15px]">
                  Mery Stivens
                </span>
              </div>
              <p className="font-bold text-[20px] py-[10px]">Basic skill</p>
              <div className="grid grid-cols-3">
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
              </div>
              <p className="py-[10px]">
                This course is available all year round for different periods.
                Cource description If you are…
              </p>
              <div className="flex justify-between pt-[15px]">
                <div>
                  <p>$220</p>
                </div>
                <div>
                  <button class="bg-[#f24080] text-white p-[5px] px-[10px] mr-[20px]">
                    {" "}
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[300px_1fr] py-[30px] bg-[#ededec] gap-8 my-[20px]">
            <div className="img pl-[30px]">
              <img
                src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-7-copyright-760x428.jpg"
                alt=""
              />
            </div>
            <div className="contenitem">
              <div className="flex">
                <button className="bg-[#41246d] p-[5px] text-white hover:bg-[#f24080]">
                  Spanish
                </button>
                <span className="pl-[20px] text-[#8a819a] text-[15px]">
                  Mery Stivens
                </span>
              </div>
              <p className="font-bold text-[20px] py-[10px]">Basic skill</p>
              <div className="grid grid-cols-3">
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
              </div>
              <p className="py-[10px]">
                This course is available all year round for different periods.
                Cource description If you are…
              </p>
              <div className="flex justify-between pt-[15px]">
                <div>
                  <p>$220</p>
                </div>
                <div>
                  <button class="bg-[#f24080] text-white p-[5px] px-[10px] mr-[20px]">
                    {" "}
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[300px_1fr] py-[30px] bg-[#ededec] gap-8 my-[20px]">
            <div className="img pl-[30px]">
              <img
                src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-7-copyright-760x428.jpg"
                alt=""
              />
            </div>
            <div className="contenitem">
              <div className="flex">
                <button className="bg-[#41246d] p-[5px] text-white hover:bg-[#f24080]">
                  Spanish
                </button>
                <span className="pl-[20px] text-[#8a819a] text-[15px]">
                  Mery Stivens
                </span>
              </div>
              <p className="font-bold text-[20px] py-[10px]">Basic skill</p>
              <div className="grid grid-cols-3">
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
              </div>
              <p className="py-[10px]">
                This course is available all year round for different periods.
                Cource description If you are…
              </p>
              <div className="flex justify-between pt-[15px]">
                <div>
                  <p>$220</p>
                </div>
                <div>
                  <button class="bg-[#f24080] text-white p-[5px] px-[10px] mr-[20px]">
                    {" "}
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-[300px_1fr] py-[30px] bg-[#ededec] gap-8 my-[20px]">
            <div className="img pl-[30px]">
              <img
                src="https://lingvico.themerex.net/wp-content/uploads/2018/07/post-7-copyright-760x428.jpg"
                alt=""
              />
            </div>
            <div className="contenitem">
              <div className="flex">
                <button className="bg-[#41246d] p-[5px] text-white hover:bg-[#f24080]">
                  Spanish
                </button>
                <span className="pl-[20px] text-[#8a819a] text-[15px]">
                  Mery Stivens
                </span>
              </div>
              <p className="font-bold text-[20px] py-[10px]">Basic skill</p>
              <div className="grid grid-cols-3">
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
                <div className="flex">
                  <div className="py-[4px] pr-[5px]">
                    <BiTimeFive className="text-[#f24080] " />
                  </div>
                  <p>14 Weeks</p>
                </div>
              </div>
              <p className="py-[10px]">
                This course is available all year round for different periods.
                Cource description If you are…
              </p>
              <div className="flex justify-between pt-[15px]">
                <div>
                  <p>$220</p>
                </div>
                <div>
                  <button class="bg-[#f24080] text-white p-[5px] px-[10px] mr-[20px]">
                    {" "}
                    View More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex my-[10px] ">
            <button className="border p-[10px] px-[20px] bg-[#f24080] text-white">
              1
            </button>
            <button className="border p-[10px] px-[20px] mx-[10px]">2</button>
            <button className="border p-[10px] px-[20px]">3</button>
            <button className="border p-[10px] px-[20px] mx-[10px]">4</button>
            <button className="border p-[10px] px-[20px]">5</button>
            <button className="border p-[10px] px-[20px] mx-[10px]">6</button>
            <button className="border p-[10px] px-[20px]">7</button>
            <button className="border p-[10px] px-[20px] mx-[10px]">
              <BiArrowFromLeft />
            </button>
          </div>
        </div>

        {/* content right */}
        <div>
          <ContentRight />
        </div>
      </div>
    </div>
  );
};

export default index;
