import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { productsData } from "@/lib/productData";
export default function FeaturedProducts() {
  const featuredProducts = [
    { ...productsData.nails[0], categorySlug: "nails" },
    { ...productsData.bolts[1], categorySlug: "bolts" },
    { ...productsData.hooks[0], categorySlug: "hooks" },
    { ...productsData.rivets[1], categorySlug: "rivets" },
    { ...productsData.chains[0], categorySlug: "chains" },
    { ...productsData.nails[2], categorySlug: "nails" },
    { ...productsData.bolts[0], categorySlug: "bolts" },
  ];
  const gridItems = [...featuredProducts, null];
  const featuredContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.08,
      },
    },
  };

  const featuredItemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={featuredContainerVariants}
    >
      <div className="flex justify-between items-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900">Best Sellers</h2>
        <Link
          href="/products"
          className="inline-flex items-center text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
        >
          View All Products
          <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </div>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        variants={featuredContainerVariants}
      >
        {gridItems.map((product, index) => (
          <motion.div key={index} variants={featuredItemVariants}>
            {product ? (
              <Link
                href={`/${product.slug}/${product.slug}`}
                className="block h-full"
              >
                <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden h-full flex flex-col border border-gray-100 hover:border-indigo-300">
                  <div className="relative w-full h-70 flex items-center justify-center overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="p-4 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm flex-grow line-clamp-3">
                      {product.description}
                    </p>
                    <div className="mt-4 text-center">
                      <span className="inline-block bg-indigo-500 text-white font-bold py-2 px-4 rounded-full text-sm">
                        View Details
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ) : (
              /* 8th Card: View All Products Link */
              <Link href="/products" className="block h-full">
                <motion.div
                  className="h-full flex flex-col items-center justify-center rounded-xl border-4 border-dashed border-indigo-300 bg-indigo-50 hover:bg-indigo-100 transition-all duration-300 shadow-md transform hover:scale-[1.02] cursor-pointer"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <ChevronRight className="w-12 h-12 text-indigo-600 mb-3 p-1 border-2 border-indigo-600 rounded-full" />
                  <h3 className="text-xl font-bold text-indigo-700 text-center px-4">
                    Explore Our Entire Inventory
                  </h3>
                  <p className="text-sm text-indigo-500 mt-1">
                    30+ products waiting.
                  </p>
                </motion.div>
              </Link>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
