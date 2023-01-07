import React from "react";
import { motion } from "framer-motion";
import { NextPage } from "next";

type Props = {};

const BackgroundCircles:NextPage = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative justify-center top-10 flex items-center"
    >
      <div className="absolute  border border-[#333333] rounded-full mt-52 h-[200px] w-[200px] animate-ping"></div>
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[300px] w-[300px]"></div>
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[500px] w-[500px]"></div>
      <div className="absolute border border-[#F7AB0A] rounded-full mt-52 h-[650px] w-[650px] opacity-20 animate-pulse"></div>
      <div className="absolute border border-[#333333] rounded-full mt-52 h-[800px] w-[800px]"></div>
    </motion.div>
  );
};

export default BackgroundCircles;
