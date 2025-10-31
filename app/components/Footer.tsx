import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4">Barnagar Iron Works</h4>
            <p className="text-gray-400">
              Leading manufacturer of premium iron and steel hardware products
              for global markets.
            </p>
            <p className="text-gray-400">GST : 23AABFB1748H1ZV</p>
            <Link
              target="_blank"
              href="https://www.tradeindia.com/truststamp-member/Barnagar-Iron-Works-2767789/"
              className="text-red-500 hover:underline"
            >
              <Image
                src="https://tiimg.tistatic.com/new_website1/general/trust_stamp/trusted-seller.svg"
                alt="Barnagar Iron works trusted seller"
                width={150}
                height={50}
              />
            </Link>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Products</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Nails</li>
              <li>Nuts & Bolts</li>
              <li>Washers</li>
              <li>Hooks & Chains</li>
              <li>Screws</li>
              <li>Perforated Sheets</li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Company</h5>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="font-semibold mb-4">Contact Info</h5>
            <ul className="space-y-2 text-gray-400">
              <li>Email: info@steelcraft.com</li>
              <li>Phone: +1 (555) 123-4567</li>
              <li>Export Inquiries: export@steelcraft.com</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Barnagar Iron Works. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
