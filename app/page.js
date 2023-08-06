import Image from "next/image";
import {
    About,
    Contact,
    Experience,
    Feedbacks,
    Hero,
    Navbar,
    Tech,
    Works,
    StarsCanvas,
    SocialLinks,
} from "../components";

import { herobg } from "@/assets";

export default function Home() {
    return (
        <div className="z-0 bg-primary relative overflow-x-hidden">
            
           

            <div className="bg-cover bg-no-repeat bg-center relative h-[80%]">
                <Image
                    src={herobg}
                    alt="Hero Background"
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center"
                />
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
                <SocialLinks />
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
}
