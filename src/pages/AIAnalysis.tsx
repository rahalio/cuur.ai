import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Dna, Microscope, Stethoscope } from 'lucide-react';
import { ContactCTA } from '../components/ContactCTA';

export function AIAnalysis() {
  return (
    <div className="min-h-screen pt-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold text-center mb-8">Advanced AI Analysis</h1>
          <p className="text-2xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Leveraging cutting-edge machine learning algorithms to provide accurate and reliable medical diagnoses.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {[
            {
              icon: Brain,
              title: "Neural Networks",
              description: "Deep learning models trained on millions of medical cases"
            },
            {
              icon: Dna,
              title: "Pattern Recognition",
              description: "Advanced pattern matching for accurate disease identification"
            },
            {
              icon: Microscope,
              title: "Image Analysis",
              description: "State-of-the-art computer vision for medical imaging"
            },
            {
              icon: Stethoscope,
              title: "Clinical Integration",
              description: "Seamless integration with existing medical workflows"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-xl text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        
        <ContactCTA preset="ai-analysis" />
      </div>
    </div>
  );
}