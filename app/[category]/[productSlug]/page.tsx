import Image from "next/image";
import Link from "next/link";
import { productsData, categories } from "../../../lib/productData"; // Adjust path as necessary

// Generate static paths for all individual products at build time
export async function generateStaticParams() {
  const paths: { category: string; productSlug: string }[] = [];
  for (const categorySlug in productsData) {
    productsData[categorySlug].forEach((product) => {
      paths.push({
        category: categorySlug,
        productSlug: product.slug,
      });
    });
  }
  return paths;
}

// Metadata for product pages
export async function generateMetadata({
  params,
}: {
  params: { category: string; productSlug: string };
}) {
  const { category: categorySlug, productSlug } = await params;
  const product = productsData[categorySlug]?.find(
    (p) => p.slug === productSlug
  );
  const categoryName = categories.find(
    (cat) => cat.slug === categorySlug
  )?.name;

  return {
    title: `${product?.name || "Product"} - ${
      categoryName || "Category"
    } - House of Wire Products`,
    description:
      product?.description ||
      `Details about ${product?.name || "a product"} from Bombay Iron Works.`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { category: string; productSlug: string };
}) {
  const { category: categorySlug, productSlug } = await params;
  const product = productsData[categorySlug]?.find(
    (p) => p.slug === productSlug
  );
  const categoryName =
    categories.find((cat) => cat.slug === categorySlug)?.name || "Category";

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center bg-transparent">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <p className="text-lg text-gray-700">
          The product you are looking for does not exist.
        </p>
        <Link
          href={`/${categorySlug}`}
          className="mt-8 inline-block bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 transition-colors duration-300"
        >
          Back to {categoryName} Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-transparent rounded-xl shadow-lg p-8 border border-gray-200 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="md:w-1/2 flex justify-center bg-transparent items-center p-4 rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={450}
            objectFit="contain"
            className="rounded-md"
          />
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            {product.description}
          </p>

          {/* Sizes Available */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
              Available Sizes:
            </h2>
            <div className="flex flex-wrap gap-3">
              {product.sizes.map((size, index) => (
                <span
                  key={index}
                  className="bg-gray-200 text-gray-800 px-4 py-2 rounded-full text-sm font-medium"
                >
                  {size}
                </span>
              ))}
            </div>
          </div>

          {/* Customization Options */}
          {product.customization && product.customization.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                Customization Options:
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                {product.customization.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}

          {/* How to measure */}
          {product.customization && product.customization.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                How to measure
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                {product.customization.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Product Usage */}
          {product.customization && product.customization.length > 0 && (
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-indigo-700 mb-3">
                Product Usage
              </h2>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-1">
                {product.customization.map((option, index) => (
                  <li key={index}>{option}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Pricing Note */}
          <div
            className="bg-yellow-50 border-l-4 border-yellow-500 text-yellow-800 p-4 rounded-md mb-6"
            role="alert"
          >
            <p className="font-bold">Important Note on Pricing:</p>
            <p className="text-sm">
              Rates for our products are subject to daily fluctuations based on
              prevailing iron and steel market prices. For the most accurate and
              up-to-date pricing, please contact us directly. This static
              website displays base information.
            </p>
          </div>

          {/* Call to Action */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="flex-1 text-center bg-indigo-600 text-white font-bold py-3 px-6 rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300 text-lg"
            >
              Inquire / Request Quote
            </Link>
            <Link
              href={`/${categorySlug}`}
              className="flex-1 text-center bg-gray-200 text-gray-800 font-bold py-3 px-6 rounded-md shadow-md hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 transition-colors duration-300 text-lg"
            >
              Back to {categoryName} Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
