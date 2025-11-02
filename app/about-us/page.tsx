// export const metadata = {
//   title: "About Us - House of Wire Products",
//   description:
//     "Learn more about Bombay Iron Works, our history, mission, and commitment to quality in wire product manufacturing.",
// };

// export default function AboutPage() {
//   return (
//     <div className="container mx-auto px-4 py-12">
//       <h1 className="text-5xl font-extrabold text-gray-900 mb-8 text-center">
//         About Barnagar Iron Works
//       </h1>

//       <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-4">
//           Our Legacy of Excellence
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//           Established in 1964, Barnagar Iron Works has been a pioneering force
//           in the wire product manufacturing industry. With decades of
//           experience, we have built a reputation for unparalleled quality,
//           reliability, and innovation. Our journey began with a commitment to
//           meet India&apos;s growing industrial needs, and today, we stand as a
//           testament to enduring craftsmanship and technological advancement.
//         </p>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           We pride ourselves on our rich heritage, combining traditional
//           expertise with modern manufacturing techniques to produce wire
//           products that set industry benchmarks.
//         </p>
//       </section>

//       <section className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-gray-200">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-4">
//           Our Mission & Vision
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//           <strong className="text-gray-900">Mission:</strong> To consistently
//           deliver superior quality wire products that meet the diverse and
//           evolving needs of our customers, fostering long-term partnerships
//           through exceptional service and value.
//         </p>
//         <p className="text-lg text-gray-700 leading-relaxed">
//           <strong className="text-gray-900">Vision:</strong> To be the leading
//           manufacturer of wire products globally, recognized for our innovation,
//           sustainable practices, and unwavering commitment to customer
//           satisfaction and employee well-being.
//         </p>
//       </section>

//       <section className="bg-white rounded-xl shadow-lg p-8 border border-gray-200">
//         <h2 className="text-3xl font-bold text-indigo-700 mb-4">
//           Our Manufacturing Process
//         </h2>
//         <p className="text-lg text-gray-700 leading-relaxed mb-4">
//           At Barnagar Iron Works, quality is not just a goal; it&apos;s an
//           integral part of our manufacturing philosophy. Our state-of-the-art
//           facilities employ advanced machinery and rigorous quality control
//           measures at every stage, from raw material sourcing to final product
//           inspection.
//         </p>
//         <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed space-y-2">
//           <li>
//             <strong>Raw Material Selection:</strong> We source only the
//             highest-grade iron and steel, ensuring the foundational strength of
//             our products.
//           </li>
//           <li>
//             <strong>Wire Drawing:</strong> Precision wire drawing processes
//             reduce the wire to the desired diameter with optimal tensile
//             strength.
//           </li>
//           <li>
//             <strong>Forming & Shaping:</strong> Specialized machinery forms the
//             wire into various products like nails, bolts, hooks, rivets, and
//             chains with exceptional accuracy.
//           </li>
//           <li>
//             <strong>Heat Treatment & Coating:</strong> Products undergo specific
//             heat treatments for enhanced durability and are coated (e.g.,
//             galvanized, zinc-plated) for corrosion resistance as per
//             requirements.
//           </li>
//           <li>
//             <strong>Quality Assurance:</strong> Each batch undergoes stringent
//             testing for dimensions, strength, and finish to guarantee adherence
//             to international standards.
//           </li>
//           <li>
//             <strong>Packaging & Dispatch:</strong> Products are securely
//             packaged to prevent damage during transit and dispatched
//             efficiently.
//           </li>
//         </ul>
//         <p className="text-lg text-gray-700 leading-relaxed mt-4">
//           Our commitment to excellence ensures that every product bearing the
//           Bombay Iron Works name is synonymous with reliability and performance.
//         </p>
//       </section>
//     </div>
//   );
// }
"use client";
import * as React from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Card component with Red accent
const Card = ({
  children,
  icon,
}: {
  children: React.ReactNode;
  icon: string;
}) => (
  <div className="bg-white rounded-xl shadow-md p-6 flex items-start gap-4 border-t-4 border-red-600">
    <span className="text-3xl">{icon}</span>
    <div className="text-gray-700">{children}</div>
  </div>
);

// Counter component - now animates on mount
type CounterProps = { end: number; suffix?: string; label: string };
const Counter = ({ end, suffix = "", label }: CounterProps) => {
  const [count, setCount] = React.useState(0);

  // Animation runs on component mount (instead of scroll)
  React.useEffect(() => {
    const duration = 2000; // 2 seconds
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(1, elapsed / duration);
      const currentCount = Math.floor(progress * end);
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end); // Ensure it hits the final value
      }
    };

    // Start the animation loop
    requestAnimationFrame(animate);

    // No cleanup necessary for this type of mount-based animation
  }, [end]);

  return (
    <div className="text-center">
      <div className="text-4xl font-bold">
        {count}
        {suffix}
      </div>
      <div className="text-sm opacity-80">{label}</div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Interactive Stepper for Manufacturing Process                     */
/* ------------------------------------------------------------------ */
const steps = [
  {
    title: "Raw Material Selection",
    desc: "Only high-grade iron & steel from certified mills.",
    icon: "📦",
  },
  {
    title: "Wire Drawing",
    desc: "Precision reduction to exact diameter with optimal tensile strength.",
    icon: "🔧",
  },
  {
    title: "Forming & Shaping",
    desc: "Specialized machines create nails, bolts, hooks, rivets, chains.",
    icon: "⚙️",
  },
  {
    title: "Heat Treatment & Coating",
    desc: "Galvanized / zinc-plated for corrosion resistance.",
    icon: "🔥",
  },
  {
    title: "Quality Assurance",
    desc: "Stringent testing for dimensions, strength, finish.",
    icon: "✔️",
  },
  {
    title: "Packaging & Dispatch",
    desc: "Secure packaging, on-time delivery.",
    icon: "🚚",
  },
];

const Stepper = () => {
  const [active, setActive] = React.useState(0);

  // Auto-advance logic
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className={`relative p-6 rounded-xl shadow-lg transition-all cursor-pointer ${
              active === i
                ? "bg-red-600 text-white scale-[1.02]"
                : "bg-white text-gray-700 hover:shadow-xl"
            }`}
            onClick={() => setActive(i)}
          >
            <div className="text-4xl mb-3">{step.icon}</div>
            <h3
              className={`font-semibold text-lg ${
                active === i ? "text-white" : "text-gray-900"
              }`}
            >
              {step.title}
            </h3>
            <p
              className={`mt-2 text-sm ${
                active === i ? "text-red-100" : "text-gray-600"
              }`}
            >
              {step.desc}
            </p>

            {/* Progress line */}
            {i < steps.length - 1 && (
              <div
                className={`absolute top-1/2 -right-3 w-6 h-0.5 hidden md:block ${
                  active > i ? "bg-red-600" : "bg-gray-300"
                }`}
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Mobile dots */}
      <div className="flex justify-center mt-6 space-x-2 md:hidden">
        {steps.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              active === i ? "bg-red-600 w-8" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* MAIN PAGE COMPONENT                                               */
/* ------------------------------------------------------------------ */

// Removed 'export const metadata' as it's Next.js specific and not part of the runnable component
// and not part of the scope for isolated environment.

export default function AboutPage() {
  const fadeInViewProps = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.1 },
    transition: { duration: 0.6 },
    useInView: true,
  };

  return (
    <>
      {/* ==== HERO ==== */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src="/images/hero-wire-factory.png"
          alt="Barnagar Iron Works factory floor"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl font-extrabold"
          >
            Barnagar Iron Works
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-4 text-lg md:text-xl max-w-2xl text-red-400 font-semibold"
          >
            Since 1964 – Quality before Volume.
          </motion.p>

          {/* Animated counters */}
          <div className="mt-8 flex gap-8 text-2xl font-semibold">
            <Counter end={60} suffix="+" label="Years of Excellence" />
            <Counter end={500} suffix="K+" label="Products Delivered" />
            <Counter end={100} suffix="%" label="Customer Retention" />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <motion.section
          {...fadeInViewProps}
          className="grid md:grid-cols-2 gap-8 items-center mb-16"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 to-red-600">
              Our Legacy of Excellence
            </h2>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Established in <strong>1964</strong>, Barnagar Iron Works has been
              a pioneering force in wire-product manufacturing. We combine
              traditional craftsmanship with cutting-edge technology to set
              industry benchmarks.
            </p>
            <p className="mt-4 text-lg text-gray-700 leading-relaxed">
              Our mantra – <em>“Quality before Volume”</em> – has earned us the
              trust of thousands of industrial partners across India.
            </p>
          </div>
          <div className="relative h-80 rounded-xl overflow-hidden shadow-xl">
            <Image
              src="/images/hero-wire-factory.png"
              alt="Historical photo of Barnagar Iron Works"
              fill
              className="object-cover"
            />
          </div>
        </motion.section>

        <motion.section
          {...fadeInViewProps}
          className="rounded-2xl p-8 md:p-12 mb-16 shadow-inner"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
            Mission & Vision
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card icon="🎯">
              <strong className="text-red-700">Mission:</strong> To deliver
              superior wire products, foster long-term partnerships, and exceed
              customer expectations through exceptional service.
            </Card>
            <Card icon="🚀">
              <strong className="text-red-700">Vision:</strong> To become the
              global leader in wire-product innovation, sustainability, and
              employee well-being.
            </Card>
          </div>
        </motion.section>

        {/* ==== QUALITY FIRST (Replaced Section wrapper with motion.section) ==== */}
        <motion.section {...fadeInViewProps} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-800 mb-10">
            Quality Before Volume – Our Core Belief
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: "Rigorous Testing",
                desc: "Every batch is tested for tensile strength, corrosion resistance, and dimensional accuracy.",
                icon: "🔬",
              },
              {
                title: "Premium Raw Materials",
                desc: "Only high-grade iron & steel from certified mills enter our facility.",
                icon: "🛠️",
              },
              {
                title: "ISO-Certified Process",
                desc: "ISO 9001:2015 certified – a guarantee of consistent excellence.",
                icon: "✅",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.03 }}
                className="bg-white rounded-xl shadow-lg p-6 text-center border-t-4 border-red-100 hover:border-red-600 transition-colors duration-300"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Testimonial */}
          <blockquote className="mt-12 max-w-3xl mx-auto text-center italic text-gray-700 bg-gray-50 rounded-xl p-8 border-l-4 border-red-600">
            <p className="text-lg">
              “Barnagar Iron Works never compromises on quality. Their nails
              outlast any competitor – that’s why we’ve been a loyal partner for
              15 years.”
            </p>
            <footer className="mt-4 font-semibold text-red-700">
              — Rajesh Patel, Construction Co.
            </footer>
          </blockquote>
        </motion.section>

        {/* ==== MANUFACTURING PROCESS – Interactive Stepper ==== */}
        <motion.section {...fadeInViewProps} className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
            Our Manufacturing Process
          </h2>
          <Stepper />
        </motion.section>

        {/* ==== CALL TO ACTION (CTA) ==== */}
        <motion.section
          {...fadeInViewProps}
          className="bg-gray-800 text-white rounded-2xl p-8 md:p-12 text-center shadow-2xl"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-red-500">
            Ready to Experience the Difference?
          </h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-200">
            Let us supply the quality wire products your project deserves.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {/* Red Button */}
            <Link
              href="mailto:sales@barnagariron.com"
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full shadow-lg text-white bg-red-600 hover:bg-red-700 transition-colors duration-300"
            >
              <Mail className="mr-2 h-5 w-5" /> Email Us
            </Link>

            {/* White/Outline Button */}
            <Link
              href="tel:+911234567890"
              className="inline-flex items-center justify-center px-8 py-3 border-2 border-red-600 text-base font-medium rounded-full shadow-lg text-red-600 bg-white hover:bg-red-50 transition-colors duration-300"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </Link>
          </div>
        </motion.section>
      </div>
    </>
  );
}
