"use client";
// import { BallCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/hoc";
import { technologies } from "@/constants";
import Image from "next/image";
import { motion } from "framer-motion";
import { textVariant } from "@/utils/motion";
import { styles } from "@/app/styles";

const Tech = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Technologies I know</p>
                <h2 className={styles.sectionHeadText}>My Skills</h2>
            </motion.div>
            <div className="flex flex-row flex-wrap justify-center gap-10">
                {technologies.map((technology, index) => {
                    return (
                        // commented were 3d icons
                        // <div className="w-28 h-28" key={technology.name}>
                        //     <BallCanvas icon={technology.icon} />
                        // </div>

                        <div className="flex flex-col key={technology.name}">
                            <div
                                
                                className="relative w-[100px] h-[100px] flex justify-center items-center bg-black overflow-hidden rounded-full my-10 mx-auto"
                            >
                                <div
                                    className={`absolute inset-0 flex justify-center items-center mx-auto card-bg-gradient w-[50px] h-[140%] bg-sky-600 card-animate delay-${
                                        100 * index
                                    }`}
                                ></div>
                                <Image
                                    src={technology.icon}
                                    width={75}
                                    height={75}
                                    alt={technology.name}
                                    className="z-10 rounded-full"
                                ></Image>
                                <div className="absolute inset-[4px] bg-[#0e1538] rounded-full"></div>
                            </div>

                            <h2 className="font-bold text-center ">
                                {technology.name}
                            </h2>
                        </div>
                    );
                })}
            </div>
        </>

    );
};

export default SectionWrapper(Tech, "");
