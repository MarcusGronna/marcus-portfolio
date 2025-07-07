"use client";
// Visa porträttbild. Importera Image från 'next/image'. Wrapper = motion.div med hover={{rotateZ:1}}. Ram: class 'ring-8 ring-surface-50 rounded-lg shadow-lg'. Bildkälla '/portrait.jpg' alt='Marcus'.
import { motion } from "framer-motion";
import Image from "next/image";

type PortraitFrameProps = {
  className?: string;
  small?: boolean;
};

export default function PortraitFrame({ className }: PortraitFrameProps) {
  // Gör porträttbilden ännu större på mobil
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateZ: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className={`relative mt-8 ring-4 ring-brand-600 rounded-full shadow-xl mx-auto overflow-hidden w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96${
        className ? ` ${className}` : ""
      }`}
    >
      <span
        className=" pointer-events-none absolute inset-0 z-10 before:absolute before:inset-0 before:bg-linear-to-t before:from-black/20 before:to-transparent before:rounded-full"
        aria-hidden="true"
      />
      <Image
        src="/portrait.jpg"
        alt="Marcus"
        fill
        sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
        className="object-cover rounded-full w-full h-full"
        priority
      />
    </motion.div>
  );
}
