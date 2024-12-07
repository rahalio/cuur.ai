import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Brain, Clock, BarChart, Shield } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Advanced AI Analysis',
    description: 'State-of-the-art machine learning algorithms for accurate diagnosis',
    link: '/ai-analysis'
  },
  {
    icon: Clock,
    title: 'Rapid Results',
    description: 'Get diagnostic insights in minutes, not days',
    link: '/rapid-results'
  },
  {
    icon: BarChart,
    title: 'High Accuracy',
    description: '99.9% accuracy rate in clinical trials',
    link: '/accuracy'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'HIPAA-compliant data protection',
    link: '/security'
  }
];

export function Features() {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Link key={index} to={feature.link}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
                <h3 className="text-2xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-lg text-gray-600">{feature.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}