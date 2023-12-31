import { motion } from "framer-motion";
import Link from "next/link";

const TinyButton = () => {
  return <div className="absolute justify-center items-center border border-red-500 bottom-[12rem] left-[42%]">
  <Link href="#about">
      <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center  items-start p-2   ">
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
</div>;
};

export default TinyButton;
