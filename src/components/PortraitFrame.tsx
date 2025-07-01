"use client";
// Visa porträttbild. Importera Image från 'next/image'. Wrapper = motion.div med hover={{rotateZ:1}}. Ram: class 'ring-8 ring-surface-50 rounded-lg shadow-lg'. Bildkälla '/portrait.jpg' alt='Marcus'.
import { motion } from "framer-motion";
import Image from "next/image";

type PortraitFrameProps = {
  className?: string;
};

export default function PortraitFrame({ className }: PortraitFrameProps) {
  return (
    <motion.div
      whileHover={{ rotateZ: 2 }}
      className={`ring-4 ring-surface-50 rounded-lg shadow-lg mx-auto overflow-hidden ${
        className ?? ""
      }`}
    >
      <Image
        src="/portrait.jpg"
        alt="Marcus"
        fill
        className="object-cover rounded-lg w-full h-full"
        priority
      />
    </motion.div>
  );
}
