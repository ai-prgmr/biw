export default function Catalogue() {
  return (
    <section className="text-white w-full text-center pt-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6">
          Download Our Latest Catalogue
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Explore our comprehensive range of wire products, specifications, and
          customization options in our detailed PDF catalogue.
        </p>
        {/* Ensure 'catalogue.pdf' is placed in the 'public' directory */}
        <a
          href="/Barnagar_Catalogue.pdf"
          download
          className="inline-flex items-center bg-white text-indigo-700 font-bold py-4 px-8 rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300 text-lg"
        >
          <svg
            className="w-6 h-6 mr-3"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
          Download Catalogue (PDF)
        </a>
      </div>
    </section>
  );
}
