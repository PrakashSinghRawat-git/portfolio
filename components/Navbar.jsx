"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { styles } from "@/app/styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import { saveAs } from "file-saver";

const Navbar = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);

    const downloadResumeHandler = () => {
        const pdfUrl =
            "https://www.mediafire.com/file/13butuday73fgq7/prakash-resume.pdf/file";

        saveAs(pdfUrl, "prakash-resume.pdf");
    };
    return (
        <nav
            className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary `}
        >
            <div className="w-full flex justify-between items-center max-w-7xl  gap-10 mx-auto ">
                <Link
                    href="/"
                    className="flex items-center gap-2"
                    onClick={() => {
                        setActive("");
                        window.scrollTo(0, 0);
                    }}
                >
                    <Image
                        src={logo}
                        width="9px"
                        height="9px"
                        alt="logo"
                        className="w-9 h-9 object-contain"
                    ></Image>
                    <p className="text-white text-[18px] font-bold cursor-pointer flex ">
                        <span>Prakash &nbsp;</span>
                        <span className="md:block hidden"> Rawat
                        </span>
                    </p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row sm:gap-5 gap-10 justify-end  text-[18px] ">
                    {navLinks.map((link, index) => {
                        return (
                            <li
                                className={`${
                                    active === link.title
                                        ? "text-white"
                                        : "text-secondary"
                                } hover:text-white  font-medium cursor-pointer`}
                                key={link.id}
                                onClick={() => {
                                    setActive(link.title);
                                }}
                            >
                                <Link href={`#${link.id}`}>{link.title}</Link>
                            </li>
                        );
                    })}
                    <li
                        className="text-sky-300
                         hover:text-white text-[18px] font-medium cursor-pointer text-sm flex items-center underline underline-offset-4"
                        onClick={downloadResumeHandler}
                    >
                        Download Resume
                    </li>
                </ul>

                {/* mobile navigation */}
                <div className="sm:hidden flex flex-1 justify-end items-center ">
                    <Image
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[28px] h-[28px] object-contain cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    ></Image>
                    <div
                        className={`${
                            !toggle ? "hidden" : "flex"
                        } p-6 black-gradient absolute top-20 right-9 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
                    >
                        <ul className="list-none flex justify-end items-start flex-col gap-4">
                            {navLinks.map((link, index) => {
                                return (
                                    <li
                                        className={`${
                                            active === link.title
                                                ? "text-white"
                                                : "text-secondary"
                                        }font-poppins font-medium curso-pointer text-[16px]`}
                                        key={link.id}
                                        onClick={() => {
                                            setToggle(!toggle);
                                            setActive(link.title);
                                        }}
                                    >
                                        <Link href={`#${link.id}`}>
                                            {link.title}
                                        </Link>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
