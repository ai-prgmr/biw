"use client";
import { motion } from "framer-motion";
import {
  ProductType,
  productsData,
  categories,
  Category,
} from "@/lib/productData";
import Link from "next/link";
import Image from "next/image";
import { Factory, ShieldCheck, Zap } from "lucide-react";
// Function to process and group the product data
const getGroupedProducts = (): Record<string, ProductType[]> => {
  const grouped: Record<string, ProductType[]> = {};

  // Iterate through the actual categories list to ensure correct order
  categories.forEach((category: Category) => {
    const products = productsData[category.slug] || [];
    if (products.length > 0) {
      // Ensure product objects include all fields from the ProductType interface
      grouped[category.slug] = products.map((product: ProductType) => ({
        ...product,
        categorySlug: category.slug, // Ensure categorySlug is set
      })) as ProductType[];
    }
  });

  return grouped;
};

const groupedProducts = getGroupedProducts();

// Helper to get the display name of a category
const getCategoryDisplayName = (slug: string): string => {
  // Use the actual imported categories array
  return categories.find((c: Category) => c.slug === slug)?.name || slug;
};

export default function ProductsPage() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  const title = "Our Products";
  const tagline =
    "Engineered for maximum tensile strength and durability. Choose from various coatings, including Galvanized and Zinc Plated.";
  return (
    <section className="min-h-screen bg-gray-50 pb-16">
      {/* Primary Title and Tagline */}
      <div className="bg-gray-900 py-8 px-4 mx-auto max-w-full text-center mb-12 lg:py-16 lg:px-12">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-200 lg:text-xl sm:px-16 xl:px-48">
          {tagline}
        </p>

        {/* Key Value Propositions (Sub-header features) */}
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-lg font-medium justify-center">
          <span className="flex items-center text-blue-400">
            <Factory className="h-4 w-4 mr-2" /> Made in India
          </span>
          <span className="flex items-center text-blue-400">
            <ShieldCheck className="h-4 w-4 mr-2" /> ISO 9001 Certified
          </span>
          <span className="flex items-center text-blue-400">
            <Zap className="h-4 w-4 mr-2" /> Fast Dispatch
          </span>
        </div>
      </div>
      <div className="container mx-auto px-4 pb-12">
        {/* Product Grid */}
        {Object.keys(groupedProducts).map((categorySlug) => (
          <motion.section
            key={categorySlug}
            className="mb-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            variants={containerVariants}
          >
            {/* Category Header */}
            <h3 className="text-3xl font-bold text-indigo-600 mb-6 border-l-4 border-indigo-600 pl-4">
              <Link
                href={`/${getCategoryDisplayName(categorySlug).toLowerCase()}`}
                className="hover:underline"
              >
                {getCategoryDisplayName(categorySlug)}
              </Link>
              <span className="text-indigo-500 text-base font-semibold ml-2">
                ({groupedProducts[categorySlug].length} Products)
              </span>
            </h3>

            {/* Product Grid for Category */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6"
              // Stagger animation based on category index to feel continuous
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {groupedProducts[categorySlug].map((product) => (
                <motion.div key={product.id} variants={itemVariants}>
                  <Link
                    href={`/${product.categorySlug}/${product.slug}`}
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
                </motion.div>
              ))}
            </motion.div>
          </motion.section>
        ))}
      </div>
    </section>
  );
}
