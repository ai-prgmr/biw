"use client";
import ProductCarousel from "@/app/components/HotDeals";
import { productsData } from "../lib/productData";
import Search from "@/app/components/Search";
import Export from "./components/Export";
import CategorySection from "./components/CategorySection";
import { motion } from "framer-motion";
import Image from "next/image";
import FeaturedProducts from "./components/FeaturedProducts";
import {
  Download,
  ArrowRight,
  Globe,
  Award,
  Users,
  Wrench,
} from "lucide-react";
const features = [
  {
    icon: <Globe className="w-8 h-8 text-blue-600" />,
    title: "Export Ready",
    description:
      "International quality standards and certifications for global markets",
  },
  {
    icon: <Award className="w-8 h-8 text-blue-600" />,
    title: "Premium Quality",
    description:
      "High-grade iron and steel products manufactured with precision",
  },
  {
    icon: <Users className="w-8 h-8 text-blue-600" />,
    title: "Trusted Partner",
    description:
      "Reliable supplier for businesses worldwide with proven track record",
  },
  {
    icon: <Wrench className="w-8 h-8 text-blue-600" />,
    title: "Custom Solutions",
    description:
      "Tailored manufacturing solutions to meet specific requirements",
  },
];
const featuredProducts = [
  { ...productsData.nails[0], categorySlug: "nails" },
  { ...productsData.bolts[1], categorySlug: "bolts" },
  { ...productsData.hooks[0], categorySlug: "hooks" },
  { ...productsData.rivets[1], categorySlug: "rivets" },
  { ...productsData.chains[0], categorySlug: "chains" },
  { ...productsData.nails[2], categorySlug: "nails" },
  { ...productsData.bolts[0], categorySlug: "bolts" },
];
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
export default function HomePage() {
  return (
    <div className="flex flex-col ">
      {/* <section className="relative w-full h-96 md:h-[500px] flex items-center justify-center text-center rounded-b-xl shadow-xl">
        <div className="relative z-10 p-4">
          <button className="italic  bg-[#B20000] font-bold text-white px-4 py-2 rounded hover:bg-red-700 transition-colors duration-300">
            Since 1964
          </button>
          <h1 className="text-4xl md:text-6xl text-red-500 font-extrabold tracking-tight drop-shadow-lg p-4">
            Premium Iron & Steel Products
          </h1>

          <Search />
        </div>
      </section> */}
      <section className="relative aspect-9/16 md:aspect-video overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={"/images/hero-section.jpeg"}
            alt="Assorted iron and steel hardware products on a wooden background"
            layout="fill"
            objectFit="cover"
            quality={90}
            className="brightness-[0.4]" // Darken the image slightly for text readability
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
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-lg"
            variants={itemVariants}
          >
            Premium Iron & Steel Products
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-200 max-w-2xl mb-8 drop-shadow"
            variants={itemVariants}
          >
            Discover a comprehensive range of high-quality industrial components
            and raw materials designed for durability and performance.
          </motion.p>

          {/* Search Bar */}
          <motion.div className="w-full max-w-md" variants={itemVariants}>
            <div className="relative">
              <Search />
            </div>
          </motion.div>
        </motion.div>
      </section>
      {/*Why us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <CategorySection />
      {/* Featured Products Section */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-gray-800 text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>
        {/* Render the ProductCarousel component */}
        <ProductCarousel products={featuredProducts} />
      </section>
      <FeaturedProducts />
      {/* Export Section */}
      <Export />
    </div>
  );
}
