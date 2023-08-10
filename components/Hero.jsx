"use client";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { ComputersCanvas } from "./canvas";
// import TinyButton from "./TinyButton";

const Hero = () => {
    return (
        <section className="relative flex flex-col justify-center ml-[6.5rem] w-screen mt-[4.25rem] h-screen mx-auto">
            <div
                className={` max-w-7xl  flex pb-5 pt-[4rem] md:mt-[-8rem] lg:ml-[180px]  flex-row items-start  gap-5`}
            >
                <div className="flex flex-col justify-center items-center mt-5 ml-[-4.80rem]">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]  " />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div className="">
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I&apos;m
                        <span className="text-[#915eff]  "> Prakash</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I&apos;m a full stack web developer,
                        <br />
                        freelancer and <br className="sm:hidden block" />I love
                        to learn new skills
                    </p>
                </div>
            </div>
            {/* <ComputersCanvas /> */}

            {/* <TinyButton /> */}
        </section>
    );
};

export default Hero;
