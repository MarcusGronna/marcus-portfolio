"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type PortraitFrameProps = {
  className?: string;
  small?: boolean; // -- behåll tills vidare
};

export default function PortraitFrame({ className }: PortraitFrameProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.03, rotateZ: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      /* ➊ relative + aspect-square håller cirkeln perfekt
         ➋ bredd skalar upp på större skärmar, höjd följer automatiskt */
      className={`relative aspect-square mt-8 ring-4 ring-brand-600 rounded-full shadow-xl mx-auto overflow-hidden
                  w-64 sm:w-80 md:w-96${className ? ` ${className}` : ""}`}
    >
      {/* diskret vignette-overlay */}
      <span
        className="pointer-events-none absolute inset-0 z-10 before:absolute before:inset-0
                   before:bg-gradient-to-t before:from-black/20 before:to-transparent before:rounded-full"
        aria-hidden="true"
      />
      <Image
        src="/portrait.jpg"
        alt="Marcus"
        fill /* fill är OK eftersom parent = relative */
        sizes="(max-width: 768px) 50vw, 384px"
        className="object-cover rounded-full" /* ingen w-/h-klass = inget ratio-fel */
        priority
      />
    </motion.div>
  );
}
