import Link from "next/link";
import Catalogue from "./Catalogue";
export default function Export() {
  return (
    <section className="bg-gray-800 text-white w-full text-center py-12 mb-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Global Reach: We Export Worldwide
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Barnagar Iron Works is proud to serve clients across the globe. Our
          high-quality wire products are trusted by industries worldwide, and we
          are equipped to handle international orders with efficiency and
          reliability. Partner with us for your global supply chain needs.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center bg-indigo-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:bg-indigo-600 hover:scale-105 transition-all duration-300 text-lg"
        >
          Inquire Export Orders
        </Link>
      </div>
      {/* Catalogue Download Section */}
      <Catalogue />
    </section>
  );
}
