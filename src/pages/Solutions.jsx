import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const solutions = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built using modern frameworks like React, Next.js, and Node.js.",
  },
  {
    title: "Mobile App Development",
    description:
      "Cross-platform mobile apps using React Native and Flutter for a seamless user experience.",
  },
  {
    title: "UI/UX Design",
    description:
      "Intuitive and elegant user interfaces crafted for optimal usability and engagement.",
  },
  {
    title: "Digital Marketing",
    description:
      "SEO, content marketing, and social media strategies to grow your online presence.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Custom e-commerce platforms with secure payment gateways and inventory management.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "Deploy, manage, and scale applications efficiently with cloud-native solutions and automation.",
  },
];

export default function Solutions() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 py-16 px-6 md:px-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          Our Solutions
        </h1>
        <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Explore the cutting-edge solutions we provide to digitally transform your business.
        </p>
      </motion.div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {solutions.map((item, idx) => (
          <motion.div
            key={idx}
            className="bg-gray-100 dark:bg-gray-900 p-6 rounded-2xl shadow hover:shadow-lg transition"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex items-center mb-4">
              <CheckCircle className="text-green-500 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                {item.title}
              </h2>
            </div>
            <p className="text-gray-700 dark:text-gray-400">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
