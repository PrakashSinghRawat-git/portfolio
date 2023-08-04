"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
    return (
        <section className="relative flex flex-col justify-center ml-[6.5rem] w-screen mt-[4.25rem] h-screen mx-auto">
            <div
                className={`${styles.paddingX} max-w-7xl mx-auto flex pb-5 pt-[4rem] mt-5 ml-10 flex-row items-start gap-5 `}
            >
                <div className="flex flex-col justify-center items-center mt-5">
                    <div className="w-5 h-5 rounded-full bg-[#915eff]  " />
                    <div className="w-1 sm:h-80 h-40 violet-gradient" />
                </div>
                <div className="">
                    <h1 className={`${styles.heroHeadText}`}>
                        Hi, I&apos;m
                        <span className="text-[#915eff]  "> Prakash</span>
                    </h1>
                    <p className={`${styles.heroSubText} mt-2 text-white-100`}>
                        I&apos;m a full stack developer,
                        <br className="sm:block hidden" />
                        freelancer and love to learn new skills
                    </p>
                </div>
            </div>
            {/* <ComputersCanvas /> */}

            <div className=" w-full flex justify-center items-center">
                <Link href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2 ">
                        <motion.dev
                            animate={{ y: [0, 24, 0] }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </Link>
            </div>
        </section>
    );
};

export default Hero;
