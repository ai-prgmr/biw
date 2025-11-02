"use client";
import { motion } from "framer-motion";
import { MapPin, Mail, MessageSquare } from "lucide-react";

// --- Configuration ---
// Replace these placeholders with your actual details
const CONTACT_EMAIL = "biwindore@gmail.com";
const WHATSAPP_NUMBER = "+919826186686"; // Start with country code, no symbols
const WHATSAPP_PREFILL = "Hello, I would like to inquire about Wire Products";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  WHATSAPP_PREFILL
)}`;
// ---------------------

// Information block for the right column (mostly unchanged)
const ContactInfo: React.FC = () => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.7 }}
    className="space-y-10"
  >
    {/* Direct Contact Methods */}

    {/* Operating Hours (Unchanged) */}
    <div className="bg-gray-300 p-8 rounded-xl shadow-lg border border-gray-100">
      <h3 className="text-2xl font-serif text-gray-800 mb-4 font-bold">
        Business Hours
      </h3>
      <ul className="space-y-2 text-lg text-gray-700">
        <li className="flex justify-between items-center border-b pb-1">
          <p className="font-semibold">Monday - Saturday</p>
          <p>9:00 AM - 5:00 PM</p>
        </li>
        <li className="flex justify-between items-center">
          <p className="font-semibold text-red-600">Sunday</p>
          <p className="text-red-600">Closed</p>
        </li>
      </ul>
    </div>

    {/* Physical Address */}
    <div className="flex items-center text-lg text-gray-700 p-4 border border-gray-300 rounded-lg bg-gray-300 shadow-sm">
      <MapPin className="w-6 h-6 mr-3 text-pink-600 flex-shrink-0" />
      <p>
        Plot No - 25/A, Udyog Nagar, Navlakha Road, New Loha Mandi, Near Anaj
        Mandi, Indore - 452014, Madhya Pradesh, India
      </p>
    </div>
  </motion.div>
);

const ContactPage: React.FC = () => {
  return (
    <>
      <div className="min-h-screen bg-white pt-12 pb-20">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-6xl font-serif text-red-600 mb-3 font-bold">
              Contact Us
            </h1>
          </motion.div>

          {/* Contact Grid: Direct Links & Info */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Left Column: Direct Contact Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center space-y-6 bg-gray-300 p-8 rounded-xl shadow-2xl border border-pink-100"
            >
              <h2 className="text-4xl font-serif text-gray-800 mb-4 font-bold">
                Let&apos;s Business Together!
              </h2>
              <p className="text-lg text-gray-700 mb-4">
                Whether you have questions about our products, need a custom
                order, or want to discuss partnership opportunities, we&apos;re
                here to help. Reach out to us via WhatsApp or email, and our
                team will get back to you promptly.
              </p>

              <motion.a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-full bg-green-500 text-white px-6 py-4 rounded-md text-xl font-bold hover:bg-green-600 transition duration-300 shadow-lg"
              >
                <MessageSquare className="w-7 h-7 mr-3" />
                Start Custom Order on WhatsApp
              </motion.a>

              <div className="text-center py-2">
                <span className="text-gray-500">OR</span>
              </div>

              <motion.a
                href={`mailto:${CONTACT_EMAIL}`}
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center w-full border border-red-600 text-red-600 px-6 py-4 rounded-md text-xl font-bold hover:bg-red-500 hover:text-white transition duration-300 shadow-lg"
              >
                <Mail className="w-7 h-7 mr-3" />
                Email General Inquiry
              </motion.a>
            </motion.div>

            {/* Right Column: Info & Hours */}
            <ContactInfo />
          </div>

          {/* Embedded Map Section (Unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl font-serif text-gray-800 mb-6 font-bold text-center">
              Find Our Location
            </h2>
            <div className="w-full h-50 md:w-[600px] md:h-[450px] mx-auto bg-gray-200 rounded-xl overflow-hidden shadow-2xl border-4 border-white relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3776.406817085338!2d75.86669977541239!3d22.707457779396027!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd1faaaaaaab%3A0xbc2f78e3eba23acb!2zQmFybmFnYXIgSXJvbiBXb3JrcyAo4KSs4KSw4KSo4KSX4KSwIOCkhuCkr-CksOCkqCDgpLXgpLDgpY3gpJUp!5e1!3m2!1sen!2sin!4v1761903061412!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
