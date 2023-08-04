"use client";
import React from "react";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "@/app/styles";
import { github } from "@/assets";
import { link } from "@/assets";
import { SectionWrapper } from "@/hoc";
import { projects } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

const ProjectCard = ({
    index,
    name,
    description,
    tags,
    image,
    source_code_link,
    site_link
}) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{ max: 45, scale: 1, speed: 450 }}
                className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <Image
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover rounded-2xl "
                    ></Image>
                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-[5px]
                            transition-transform hover:scale-110"
                            onClick={() => {
                                window.open(source_code_link, "_blank");
                            }}
                        >
                            <Image
                                src={github}
                                alt={github}
                                className="w-1/2 h-1/2 object-contain"
                            ></Image>
                        </div>
                        <div
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer mx-[1px]
                            transition-transform hover:scale-110"
                            onClick={() => {
                                window.open(site_link, "_blank");
                            }}

                        >
                            <Image
                                src={link}
                                alt={link}
                                className="w-1/2 h-1/2 object-contain"
                            ></Image>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <h3 className="text-white font-bold text-[24px] ">
                        {name}
                    </h3>
                    <p className="mt-2 text-secondary text-[14px] ">
                        {" "}
                        {description}
                    </p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => {
                        return (
                            <p
                                key={tag.name}
                                className={`text-[14px] ${tag.color} `}
                            >
                                #{tag.name}
                            </p>
                        );
                    })}
                </div>
            </Tilt>
        </motion.div>
    );
};
const Works = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>My work</p>
                <h2 className={styles.sectionHeadText}>Projects</h2>
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px]  max-w-3xl leading-[30px]"
                >
                    Following projects showcases my skill and experience through real-world examples of my work. Each project is briefly described with links to code repository and the project site. It reflects my ability to solve complex problems, ability to work with different technologies, and my project management skills.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => {
                    return (
                        <ProjectCard
                            key={`project-${index}`}
                            {...project}
                            index={index}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(Works, "work");
