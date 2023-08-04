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
    SocialLinks
} from "../components";

export default function Home() {
    return (
        <div className="relative z-0 bg-primary">
            <div className="bg-red-500">hello</div>
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
                <Navbar />
                <Hero />
            </div>
            <About />
            <Experience />
            <Tech />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
                <SocialLinks/>
                <Contact />
                <StarsCanvas />
            </div>
        </div>
    );
}
