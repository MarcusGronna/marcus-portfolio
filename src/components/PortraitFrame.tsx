"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaLinkedin, FaGithub } from "react-icons/fa";

type PortraitFrameProps = {
  flipped: boolean; // styr om kortet är 180°
  onToggle: () => void; // klick-handler från Home
  className?: string;
  small?: boolean; // kan behållas om du behöver
};

export default function PortraitFrame({
  flipped,
  onToggle,
  className = "",
  small = false,
}: PortraitFrameProps) {
  const size = small ? "w-40 sm:w-48 md:w-64" : "w-64 sm:w-80 md:w-96";

  return (
    <motion.div
      whileHover={{ scale: 1.05, rotateZ: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      onClick={onToggle}
      className={`
        relative aspect-square mb-6 mx-auto overflow-hidden cursor-pointer
        ring-inset ring-4 ring-brand-600 rounded-full shadow-xl perspective-1000
        ${size} ${className}
      `}
    >
      {/* Inre kortet som roteras */}
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="absolute inset-0 [transform-style:preserve-3d]"
      >
        {/* FRAMSIDA */}
        <div className="absolute inset-0 backface-hidden">
          <Image
            src="/portrait.jpg"
            alt="Marcus"
            fill
            sizes="(max-width: 768px) 50vw, 384px"
            className="object-cover rounded-full "
            priority
          />
        </div>

        {/* BAKSIDA */}
        <div
          className="absolute inset-0 rotateY-180 backface-hidden
                        bg-brand-600 text-surface-50 rounded-full
                        flex flex-col items-center justify-center gap-4"
        >
          <a href="mailto:hi@marcusgronna.com" className="underline">
            hi@marcusgronna.com
          </a>
          <div className="flex gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/marcus-gr%C3%B6nn%C3%A5-6a5006260/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/MarcusGronna"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
