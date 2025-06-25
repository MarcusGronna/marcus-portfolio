// Visa porträttbild. Importera Image från 'next/image'. Wrapper = motion.div med hover={{rotateZ:1}}. Ram: class 'ring-8 ring-surface-50 rounded-lg shadow-lg'. Bildkälla '/portrait.jpg' alt='Marcus'.
import { motion } from "framer-motion";
import Image from "next/image";

export default function PortraitFrame({ small }: { small?: boolean }) {
  return (
    <motion.div
      whileHover={{ rotateZ: 1 }}
      className={`ring-4 ring-surface-50 rounded-lg shadow-lg mx-auto ${
        small ? "w-32 h-32" : "w-48 h-48"
      }`}
    >
      <Image
        src="/portrait.jpg"
        alt="Marcus"
        width={192}
        height={192}
        className="object-cover rounded-lg w-48 h-48" // w-48 och h-48 matchar 192px
        priority
      />
    </motion.div>
  );
}
