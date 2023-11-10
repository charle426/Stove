import img1 from "../assets/IMG-20231107-WA0002.jpg";
import img2 from "../assets/IMG-20231107-WA0001.jpg";
import React from "react";
import { motion } from "framer-motion"
export default function CareerWhyWeAreHere() {
   const containRestrain = React.useRef(null)
       


 
 
    return (
      <section className="px-2 py-5 md:px-10">
        <div className="bg-white rounded-[30px] py-5 px-2 md:px-5">
          <div>
            <h1 className="text-[1.5rem] md:text-[3.5rem] font-semibold max-w-[800px]">
              What inspires us?
            </h1>
            <p className="max-w-[600px] md:translate-x-7 translate-x-0 ">
              Over 20 years, the number of gas users have grown 10 times faster
              than the traditional use of other means. People now choose to use
              gas not just for cooking but because they can now convert auto
              engines.
            </p>
          </div>
          <motion.div
            ref={ containRestrain }
            className="flex group mt-6 rounded-[20px] items-center relative overflow-hidden w-full"
            id="dragPics"
          >
            <div className="relative overflow-hidden w-full max-w-[1000px] rounded-[20px]">
              <img
                src={img1}
                alt="image"
                className="rounded-[20px] grayscale w-full object-contain z-10"
              />
            </div>
            <motion.div
              drag="x"
              dragConstraints={{ left: 20, right: 50 }}
              dragElastic={0.5}
              // dragTransition={{ bounceDamping: 10 }}
              id="drag"
              className="absolute flex max-w-[1000px] justify-start items-center left-[50%] select-none w-full cursor-ew-resize"
            >
              <div className="absolute top-[50%] translate-y-[-50%] left-[-30px] border-white border-[2px] rounded-full p-1 z-[300]">
                <div className="bg-white border-white group-hover:border-[#a8e92f] group-hover:bg-[#a8e92f] w-[50px] h-[50px] rounded-full relative"></div>
              </div>
              <img
                src={img2}
                alt="image"
                className="w-full object-cover z-10 left-[550px]  duration-200 select-none pointer-events-none border-white group-hover:border-[#a8e92f] border-l-[3px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    );
}