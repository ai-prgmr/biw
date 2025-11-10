"use client";
import Export from "./components/Export";
import CategorySection from "./components/CategorySection";
import FeaturedProducts from "./components/FeaturedProducts";
import { Globe, Award, Users, Wrench } from "lucide-react";
import HeroSection from "./components/HeroSection";
import HeroSection2 from "./components/HeroSection2";
const features = [
  {
    icon: <Globe className="w-8 h-8 text-red-600" />,
    title: "Export Ready",
    description:
      "International quality standards and certifications for global markets",
  },
  {
    icon: <Award className="w-8 h-8 text-red-600" />,
    title: "Premium Quality",
    description:
      "High-grade iron and steel products manufactured with precision",
  },
  {
    icon: <Users className="w-8 h-8 text-red-600" />,
    title: "Trusted Partner",
    description:
      "Reliable supplier for businesses worldwide with proven track record",
  },
  {
    icon: <Wrench className="w-8 h-8 text-red-600" />,
    title: "Custom Solutions",
    description:
      "Tailored manufacturing solutions to meet specific requirements",
  },
];

export default function HomePage() {
  return (
    <div className="flex flex-col ">
      <div className="lg:hidden">
        <HeroSection />
      </div>

      <div className="hidden lg:block">
        <HeroSection2 />
      </div>
      {/*Why us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-lg shadow-sm"
              >
                <div className="flex justify-center mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h4>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Categories Section */}
      <CategorySection />
      {/* Featured Products Section */}
      {/* <section className="container mx-auto px-4 py-16">
        <h2 className="text-gray-800 text-4xl font-bold text-center mb-12">
          Featured Products
        </h2>
        <ProductCarousel products={featuredProducts} />
      </section> */}
      <FeaturedProducts />
      {/* Export Section */}
      <Export />
    </div>
  );
}
