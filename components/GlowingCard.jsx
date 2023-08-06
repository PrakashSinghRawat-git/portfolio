import React from "react";

const GlowingCard = () => {
    return (
        <div className="relative w-[300px] h-[300px] flex justify-center items-center bg-black overflow-hidden rounded-[20px] my-10 mx-auto">
            <h2 className="text-white text-[10em] z-10">02</h2>
            <div className="mx-auto absolute inset-0  card-bg-gradient w-[150px] h-[140%] my-auto card-animate bg-sky-600 "></div>
            <div className="absolute inset-[4px] bg-[#0e1538] rounded-[20px]"></div>
        </div>
    );
};

export default GlowingCard;
