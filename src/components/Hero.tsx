import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Microscope } from "lucide-react";

export function Hero() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Microscope className="w-20 h-20 mx-auto text-blue-600 mb-8" />
            <h1 className="text-6xl font-bold text-gray-900 mb-8">
              AI-Powered Medical Diagnostics
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto mb-12">
              Revolutionizing healthcare with advanced AI technology for faster,
              more accurate diagnoses.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Link
              to="/contact"
              className="inline-block bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
