import React from "react";
import {
  PhoneIcon,
  MapPinIcon,
  EnvelopeOpenIcon,
} from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {};
type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactMe = (props: Props) => {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:mrudulpatel04@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message}`;
  };
  return (
    <div className="h-screen relative flex flex-col text-center md:flex-row md:text-left max-w-7xl justify-evenly mx-auto items-center px-10">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact Me
      </h3>
      <div className="mt-32 flex flex-col space-y-10">
        {/* <h4 className="font-semibold text-center">
          I have got just what you need.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Let's Talk.</span>
        </h4> */}

        <div className="space-y-10">
          <div className="flex items-center space-x-5">
            <PhoneIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p>+918698793479</p>
          </div>
          <div className="flex items-center space-x-5">
            <EnvelopeOpenIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">mrudulpatel04@gmail.com</p>
          </div>
          <div className="flex items-center space-x-5">
            <MapPinIcon className="h-7 w-7 animate-pulse text-[#F7AB0A]" />
            <p className="text-2xl">.</p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col space-y-2 w-full mx-auto"
          >
            <div className="flex space-x-2">
              <input
                {...register("name")}
                placeholder="Name"
                className="contactInput w-full"
                type="text"
              />
              <br />
              <input
                {...register("email")}
                placeholder="Email"
                className="contactInput w-full"
                type="email"
              />
            </div>
            <input
              {...register("subject")}
              placeholder="Subject"
              className="contactInput"
              type="text"
            />
            <textarea
              {...register("message")}
              placeholder="Message"
              className="contactInput"
            ></textarea>
            <button
              type="submit"
              className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg"
            >
              Submit
            </button>
          </form>
        </div>
        {/* <footer className="uppercase text-center w-full flex container items-center md:inline-flex text-gray-400 ml-3">
          &#169; 2023 All Rights Reserved
        </footer> */}

        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-start justify-start">
            &#169; 2023 All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
};

export default ContactMe;
