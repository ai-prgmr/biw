import Link from "next/link";
import { motion } from "framer-motion";
export default function CategorySection() {
  const categories = [
    {
      name: "Nails",
      slug: "nails",
      description: "Essential fasteners for construction and carpentry.",
    },
    {
      name: "Bolts",
      slug: "bolts",
      description: "Robust connectors for heavy-duty applications.",
    },
    {
      name: "Hooks",
      slug: "hooks",
      description: "Versatile hanging solutions for various needs.",
    },
    {
      name: "Rivets",
      slug: "rivets",
      description: "Permanent mechanical fasteners for strong joints.",
    },
    {
      name: "Chains",
      slug: "chains",
      description: "Durable links for lifting, pulling, and securing.",
    },
  ];
  const categoryContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const categoryItemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };
  return (
    <motion.section
      className="container mx-auto px-4 py-16"
      initial="hidden"
      whileInView="visible" // Animation triggers when section scrolls into view
      viewport={{ once: true, amount: 0.1 }}
      variants={categoryContainerVariants}
    >
      <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
        House of Wire Products
      </h2>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        variants={categoryContainerVariants}
      >
        {categories.map((category) => (
          <motion.div
            key={category.slug}
            variants={categoryItemVariants} // Individual card animation
          >
            <Link href={`/${category.slug}`} className="block h-full">
              <div className="h-full rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group cursor-pointer border border-gray-200 hover:border-indigo-600">
                <div className="bg-white p-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {category.description}
                  </p>
                </div>
                <div className=" bg-indigo-500 text-white py-3 text-center font-bold group-hover:bg-indigo-600 transition-colors duration-300">
                  View Products
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
