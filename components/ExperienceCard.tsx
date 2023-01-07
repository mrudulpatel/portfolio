import React from "react";
import { motion } from "framer-motion";
import { Experience } from "../typings";
import { urlFor } from "../sanity";

type Props = {
  exp: Experience;
};

const ExperienceCard = ({ exp }: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden top-4 mx-auto mt-5">
      <motion.img
        className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src={urlFor(exp?.companyImage).url()}
        alt=""
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">{exp?.jobTitle}</h4>
        <p className="font-bold text-2xl mt-1">{exp?.company}</p>
        <div className="flex space-x-2 my-2">
          {exp?.technologies?.map((technology, i) => (
            <img
              key={technology._id}
              src={urlFor(technology?.image).url()}
              alt=""
              className="rounded-full h-10 w-10"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">
          {new Date(exp.dateStarted).toDateString()} -{" "}
          {exp.isCurrentlyWorkingHere
            ? "Present"
            : new Date(exp.dateEnded).toDateString()}
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg h-32 overflow-y-scroll scrollbar-thin scrollbar-thumb-[#F7AB0A] scrollbar-track-gray-400/20">
          {exp?.points.map((point,i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
