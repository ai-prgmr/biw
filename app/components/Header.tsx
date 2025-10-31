// // components/Header.tsx
"use client";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
const navLinks = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Products", href: "/products" },
  {
    name: "Categories",
    submenu: [
      { name: "Nails", href: "/nails" },
      { name: "Bolts", href: "/bolts" },
      { name: "Hooks", href: "/hooks" },
      { name: "Rivets", href: "/rivets" },
      { name: "Chains", href: "/chains" },
      { name: "Washers & Nuts", href: "/washers_nuts" },
      { name: "Screws", href: "/screws" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 shadow md:sticky md:top-0 z-50">
      <nav className="container mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          className="mb-4 md:mb-0 flex flex-col md:flex-row items-center gap-2"
        >
          <Image
            src="/biw_logo.png"
            alt="Barnagar Iron Works Logo"
            width={150}
            height={50}
            className="inline-block"
          />
          <span className="text-2xl text-red-600 font-bold">
            Barnagar Iron Works
          </span>
        </Link>

        {/* Hamburger */}
        <button
          className="lg:hidden flex items-center px-3 py-2 border rounded text-white hover:text-red-600 border-gray-400"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close Menu" : "Open Menu"}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {mobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        {/* Desktop Menu */}
        <ul className="hidden lg:flex gap-8 items-center">
          {navLinks.map((link) =>
            link.submenu ? (
              // Submenu
              <li key={link.name} className="relative group">
                <button
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  className="flex items-center gap-1 text-white hover:bg-[#B20000] p-2 focus:outline-none"
                  aria-haspopup="true"
                  aria-expanded={submenuOpen}
                >
                  {link.name}
                  <svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {submenuOpen && (
                  <ul className="absolute left-0 mt-2 w-40 bg-[#FFE6E6] border border-gray-200 shadow-lg rounded-lg z-10">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <Link
                          href={sublink.href}
                          className="block px-4 py-2 hover:border-red-600 bg-[#F8F8F8]"
                          onClick={() => setSubmenuOpen(false)}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-white hover:bg-red-600 p-2"
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      </nav>
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <ul className="lg:hidden flex flex-col gap-2 px-6 pb-4 bg-gray-800 shadow-md">
          {navLinks.map((link) =>
            link.submenu ? (
              <li key={link.name} className="relative">
                <button
                  className="flex items-center w-full px-2 py-2 text-white hover:bg-red-600"
                  onClick={() => setSubmenuOpen(!submenuOpen)}
                  aria-haspopup="true"
                  aria-expanded={submenuOpen}
                >
                  {link.name}
                  <svg
                    className="w-4 h-4 ml-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M19 9l-7 7-7-7"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {submenuOpen && (
                  <ul className="mt-1 ml-4 pl-4 border-l max-w-sm border-gray-200">
                    {link.submenu.map((sublink) => (
                      <li key={sublink.name}>
                        <Link
                          href={sublink.href}
                          className="block px-2 py-2 text-white hover:bg-red-600"
                          onClick={() => {
                            setSubmenuOpen(false);
                            setMobileMenuOpen(false);
                          }}
                        >
                          {sublink.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ) : (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block px-2 py-2 text-white hover:bg-red-600"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>
      )}
    </header>
  );
}
