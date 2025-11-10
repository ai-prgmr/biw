"use client";
import React, { useState } from "react";
import { productsData, ProductType } from "@/lib/productData";
import Link from "next/link";
import { Search } from "lucide-react";
export default function SearchComponent() {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [searchResults, setSearchResults] = useState<ProductType[]>([]); // State for search results
  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);

    if (query.length > 1) {
      // Only search if query is at least 2 characters long
      const allProducts = getAllProducts();
      const filtered = allProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query) ||
          product.slug.toLowerCase().includes(query)
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]); // Clear results if query is too short or empty
    }
  };
  const getAllProducts = () => {
    const allProducts: ProductType[] = [];
    for (const categorySlug in productsData) {
      productsData[categorySlug].forEach((product: ProductType) => {
        allProducts.push({
          ...product,
          slug: product.slug,
          categorySlug: categorySlug,
        });
      });
    }
    return allProducts;
  };
  return (
    <div className="relative w-full max-w-2xl mx-auto m-4">
      <input
        type="text"
        placeholder="Search for Nails, Bolts, Chains..."
        className="w-full px-6 pl-12 py-3 rounded-full bg-white border-2 border-red-500 text-gray-700 placeholder:text-red-700 text-xl shadow-lg focus:border-none focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-200"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-700" />

      {/* Search Results Dropdown */}
      {searchQuery.length > 1 && searchResults.length > 0 && (
        <ul className="absolute left-0 right-0 mt-2 bg-white text-gray-600 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50 border border-gray-200">
          {searchResults.map((product) => (
            <li key={product.id}>
              <Link
                href={`/${product.categorySlug}/${product.slug}`}
                className="block px-4 py-3 text-red-600 hover:bg-gray-600 transition-colors duration-200 border-b border-gray-100 last:border-b-0"
                onClick={() => setSearchQuery("")}
              >
                <span className="font-semibold">{product.name}</span> in{" "}
                {product.slug}
                <p className="text-sm line-clamp-1">{product.description}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      {searchQuery.length > 1 && searchResults.length === 0 && (
        <div className="absolute left-0 right-0 mt-2 bg-white rounded-lg shadow-xl p-4 text-gray-600 text-center z-50 border border-gray-200">
          No products found for <b>{searchQuery}</b>
        </div>
      )}
    </div>
  );
}
