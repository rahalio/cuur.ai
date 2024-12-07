import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "cuur.ai has revolutionized our diagnostic process, reducing wait times by 80%.",
    author: "Dr. Sarah Chen",
    role: "Chief of Radiology, Metro Hospital",
  },
  {
    quote:
      "The accuracy and speed of their AI system is truly remarkable. A game-changer for our practice.",
    author: "Dr. Michael Rodriguez",
    role: "Neurologist, Advanced Medical Center",
  },
  {
    quote:
      "Implementation was seamless, and the results have exceeded our expectations.",
    author: "Dr. Emily Thompson",
    role: "Medical Director, Innovation Clinic",
  },
];

export function Testimonials() {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16">
          What Medical Professionals Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg relative"
            >
              <Quote className="w-10 h-10 text-blue-600 mb-4" />
              <p className="text-xl text-gray-700 mb-6">{testimonial.quote}</p>
              <div>
                <p className="font-semibold text-lg">{testimonial.author}</p>
                <p className="text-gray-600">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
