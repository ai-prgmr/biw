import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 ">
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
              <li>
                <Link href="/nails" className="hover:text-white">
                  Nails
                </Link>
              </li>
              <li>
                <Link href="/bolts" className="hover:text-white">
                  Nuts & Bolts
                </Link>
              </li>
              <li>
                <Link href="/washers_nuts" className="hover:text-white">
                  Washers
                </Link>
              </li>
              <li>
                <Link href="/hooks" className="hover:text-white">
                  Hooks & Chains
                </Link>
              </li>
              <li>
                <Link href="/screws" className="hover:text-white">
                  Screws
                </Link>
              </li>
              <li>
                <Link href="/perforated-sheets" className="hover:text-white">
                  Perforated Sheets
                </Link>
              </li>
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
              <li>
                Email:{" "}
                <a className="text-red-500" href="mailto:biwindore@gmail.com">
                  biwindore@gmail.com
                </a>
              </li>
              <li>
                Phone:{" "}
                <a className="text-red-500" href="tel:+919826186686">
                  +91 98261 86686
                </a>
              </li>
              <li>
                Export Inquiries:{" "}
                <a className="text-red-500" href="mailto:biwexport@gmail.com">
                  biwexport@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; 2025 Barnagar Iron Works.Registered Trademark. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
