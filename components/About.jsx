"use client";
import Link from "next/link";
import Image from "next/image";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "@/app/styles";
import { services } from "@/constants";
import { fadeIn, textVariant } from "@/utils/motion";

import { SectionWrapper } from "@/hoc";

const ServiceCard = ({ index, title, icon }) => {
    return (
        <Tilt className="xs:w-[250px] w-full">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
            >
                <div
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <Image
                        src={icon}
                        alt={title}
                        className="w-16 h-15 object-contain"
                    />
                    <h3 className="text-white text-[20px] font-bold text-center">
                        {title}
                    </h3>
                </div>
            </motion.div>
        </Tilt>
    );
};
const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] "
            >
                I'm a student of ECE(AI+ML) of 2026 batch at
                <span className="cursor-pointer font-semibold text-sky-500">
                    <Link href="http://nsut.ac.in/" ></Link> Netaji Subhash
                    University of Technology
                </span>
                . I'm a full stack web-developer, having built many project
                using React, nextJs, Node.js, firebase and MongoDB. I'm a
                passionate and quick learner with a solid foundation in
                Javascript. I am seeking opportunities to join a fast-paced and
                innovative company or people where I can leverage my skills to
                work on exciting projects. Whether it's collaborating with a
                team or contributing to a dynamic community, I am eager to take
                on challenges and build cutting-edge web products that make a
                positive impact. Let's create the future together!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10 ">
                {services.map((service, index) => {
                    return (
                        <ServiceCard
                            key={service.title}
                            index={index}
                            {...service}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
