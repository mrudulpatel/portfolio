import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import { Experience } from "../typings";

type Props = {
  exp: Experience[];
};

const Experiences = ({ exp }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 mx-auto justify-evenly items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>
      <br />
      <br />
      <br />
      <div className="w-full flex space-x-5 top-10 overflow-x-scroll snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-400/20">
        {exp.map((exp) => (
          <ExperienceCard exp={exp} key={exp._id} />
        ))}
      </div>
    </motion.div>
  );
};

export default Experiences;
