"use client";
// Visa porträttbild. Importera Image från 'next/image'. Wrapper = motion.div med hover={{rotateZ:1}}. Ram: class 'ring-8 ring-surface-50 rounded-lg shadow-lg'. Bildkälla '/portrait.jpg' alt='Marcus'.
import { motion } from "framer-motion";
import Image from "next/image";

type PortraitFrameProps = {
  small?: boolean;
  className?: string;
};

export default function PortraitFrame({ small, className }: PortraitFrameProps) {
  return (
    <motion.div
      whileHover={{ rotateZ: 2 }}
      className={`ring-4 ring-surface-50 rounded-lg shadow-lg mx-auto overflow-hidden ${
        small ? "w-32 h-32" : "w-48 h-48"
      } ${className ?? ""}`}
    >
      {/* TODO: Byt ut till din riktiga porträttbild */}
      <Image
        src="/portrait.jpg"
        alt="Marcus"
        width={small ? 128 : 192}
        height={small ? 128 : 192}
        className="object-cover rounded-lg w-full h-full"
        priority
      />
    </motion.div>
  );
}
