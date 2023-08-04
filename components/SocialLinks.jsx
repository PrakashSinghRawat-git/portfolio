"use client";
import Link from "next/link";
import { BallCanvas } from "@/components/canvas";
import { SectionWrapper } from "@/hoc";
import { socialLinks } from "@/constants";
import { styles } from "@/app/styles";
import { textVariant } from "@/utils/motion";
import { motion } from "framer-motion";

const SocialLinks = () => {
    
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Connect with me</p>
                <h2 className={styles.sectionHeadText}>Social Links</h2>
            </motion.div>

            <div className="flex flex-row flex-wrap justify-center gap-10">
                {socialLinks.map((social) => {
                    return (
                        <div className="flex flex-col justify-center items-center hover:transform hover:scale-110 transition-transform" key={social.name}>
                            <div className="w-28 h-28">
                                <Link href={social.href} target="_blank">
                                    <BallCanvas icon={social.icon} />
                                </Link>
                            </div>
                            <h2 className="font-bold text-center ">{social.name}</h2>
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default SectionWrapper(SocialLinks, "");
