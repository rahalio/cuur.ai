import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface ContactCTAProps {
  preset: string;
}

export function ContactCTA({ preset }: ContactCTAProps) {
  return (
    <div className="mt-12 text-center">
      <Link
        to={`/contact?preset=${preset}`}
        className="inline-flex items-center space-x-2 bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
      >
        <span>Get Started</span>
        <ArrowRight className="w-6 h-6" />
      </Link>
    </div>
  );
}