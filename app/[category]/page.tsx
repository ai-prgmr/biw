import Link from "next/link";
import Image from "next/image";
import { productsData, categories } from "../../lib/productData"; // Adjust path as necessary

// Generate static paths for all categories at build time
export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category.slug,
  }));
}

// Metadata for category pages
export async function generateMetadata({
  params,
}: {
  params: { category: string };
}) {
  const paramsCategory = await params;
  const categoryName = categories.find(
    (cat) => cat.slug === paramsCategory.category
  )?.name;
  return {
    title: `${categoryName || "Category"} Products - House of Wire Products`,
    description: `Explore our range of high-quality ${
      categoryName || "wire"
    } products from Bombay Iron Works.`,
  };
}

export default async function CategoryPage({
  params,
}: {
  params: { category: string };
}) {
  const { category: categorySlug } = await params;
  const products = productsData[categorySlug] || [];
  const categoryName =
    categories.find((cat) => cat.slug === categorySlug)?.name ||
    "Unknown Category";

  if (products.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          No Products Found
        </h1>
        <p className="text-lg text-gray-700">
          It seems there are no products listed for the category:{" "}
          <span className="font-semibold">{categoryName}</span>.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Back to Homepage
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-5xl font-extrabold text-gray-900 mb-10 text-center">
        Our {categoryName} Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <Link
            href={`/${categorySlug}/${product.slug}`}
            key={product.id}
            className="block"
          >
            <div className=" rounded-xl bg-white overflow-hidden group cursor-pointer border-t-4 border-red-500 h-full flex flex-col">
              <div className="relative  w-full h-100  flex items-center justify-center overflow-hidden aspect-square">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h2 className="text-2xl font-semibold  text-gray-900 mb-2  transition-colors duration-300">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm flex-grow">
                  {product.description}
                </p>
                <div className="mt-4 text-center">
                  <span className="inline-block bg-red-500 text-white font-bold py-2 px-4 rounded-full text-sm">
                    View Details
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
