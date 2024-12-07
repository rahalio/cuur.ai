import React from "react";
import { motion } from "framer-motion";

const stats = [
  { value: "98%", label: "Accuracy Rate" },
  { value: "50K+", label: "Diagnoses" },
  { value: "24/7", label: "Availability" },
  { value: "15min", label: "Avg. Response Time" },
];

export function Stats() {
  return (
    <div className="bg-blue-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-xl text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
