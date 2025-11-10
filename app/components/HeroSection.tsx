import { motion } from "framer-motion";
import Image from "next/image";
import SearchComponent from "@/app/components/Search";
import Link from "next/link";
import { Mail, ArrowRight } from "lucide-react";
export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative aspect-9/16 md:aspect-video overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={"/images/hero-section.jpeg"}
          alt="Assorted iron and steel hardware products on a wooden background"
          layout="fill"
          objectFit="cover"
          quality={90}
          className="brightness-[0.3]" // Darken the image slightly for text readability
        />
        {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>{" "} */}
        {/* Gradient overlay */}
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
          variants={itemVariants}
        >
          Premium Iron & Steel Products
        </motion.h1>
        <motion.button
          variants={itemVariants}
          className="italic  bg-[#B20000] font-bold text-white px-4 py-3 mb-8 rounded hover:bg-red-700 transition-colors duration-300"
        >
          Since 1964
        </motion.button>
        <motion.p
          className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow"
          variants={itemVariants}
        >
          Discover a comprehensive range of high-quality industrial components
          and raw materials designed for durability and performance.
        </motion.p>
        {/* Search Bar */}
        <motion.div className="w-full max-w-xl" variants={itemVariants}>
          <div className="relative">
            <SearchComponent />
          </div>
        </motion.div>
        {/* --- NEW CTA BUTTONS --- */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 mb-10"
          variants={itemVariants}
        >
          {/* Primary CTA: Contact Sales (Red) */}
          <Link
            href="/contact"
            className="flex items-center justify-center px-8 py-3 text-lg font-semibold bg-red-600 text-white rounded-lg shadow-xl hover:bg-red-700 transition-colors duration-300 min-w-[200px]"
          >
            <Mail className="w-5 h-5 mr-2" /> Contact Sales
          </Link>

          {/* Secondary CTA: View Products (Outline) */}
          <Link
            href="/products"
            className="flex items-center justify-center px-8 py-3 text-lg font-semibold border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-colors duration-300 min-w-[200px]"
          >
            View Products <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </motion.div>
        {/* --- END CTA BUTTONS --- */}
      </motion.div>
    </section>
  );
}
