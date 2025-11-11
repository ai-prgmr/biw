import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
import SearchComponent from "./Search";

// --- Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
export default function HeroSection2() {
  return (
    <section className="relative overflow-hidden">
      {/* Main Flex Container: Column on mobile, Row on large screen. min-h-[70vh] defines the height for the split. */}
      <div className=" flex flex-col lg:flex-row min-h-[70vh] items-center">
        {/* Left Side: Image / Visual (1/2 width on desktop) */}
        <motion.div
          // **CRITICAL FOR SPLIT:** lg:w-1/2 ensures 50% width on desktop. h-[40vh] on mobile, h-full on desktop to fill parent height.
          className="relative w-full lg:w-1/2 h-[40vh] md:h-[100vh] order-first lg:order-none"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Image - Using object-cover to ensure it fills the space */}
          <Image
            src={"/images/hero-section.jpeg"}
            alt="Assorted iron and steel hardware products on a wooden background"
            quality={90}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="brightness-100" // Darken the image slightly for text readability
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gray-900/10 lg:bg-gray-900/30"></div>
        </motion.div>

        {/* Right Side: Content (1/2 width on desktop) */}
        <motion.div
          // **CRITICAL FOR SPLIT:** lg:w-1/2 ensures 50% width on desktop. h-full ensures vertical alignment.
          className="w-full lg:w-1/2 p-8 sm:p-12 lg:p-16 text-center lg:text-left z-10 lg:h-full flex flex-col justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-red-600 leading-tight mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            Premium Iron & Steel Products
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-700 max-w-2xl lg:max-w-full mb-8 drop-shadow mx-auto lg:mx-0"
            variants={itemVariants}
          >
            Discover a comprehensive range of high-quality industrial components
            and raw materials designed for durability and performance.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex justify-center lg:justify-start space-x-4 mb-10"
            variants={itemVariants}
          >
            <Link
              href="/contact"
              className="flex items-center bg-red-600 text-white font-bold px-6 py-3 rounded-xl shadow-lg hover:bg-red-700 transition duration-300"
            >
              <Mail className="w-5 h-5 mr-2" /> Contact Sales
            </Link>
            <Link
              href="/products"
              className="flex items-center border-2 border-red-600 font-semibold px-6 py-3 rounded-xl bg-white text-red-600 transition duration-300"
            >
              View Products <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </motion.div>

          {/* Search Bar */}
          <motion.div
            className="w-full max-w-md lg:max-w-lg mx-auto lg:mx-0"
            variants={itemVariants}
          >
            <div className="relative">
              {/* Search input implementation omitted for brevity, but this container is ready for it */}
              <SearchComponent />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
