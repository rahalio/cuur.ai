import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import { initializeApp, getApps, getApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const firestore = getFirestore(app);

const presetMessages = {
  "ai-analysis":
    "I'm interested in learning more about your AI Analysis capabilities for medical diagnostics.",
  "rapid-results":
    "I'd like to know more about your rapid diagnostic results service.",
  accuracy: "I'm interested in your high-accuracy diagnostic solutions.",
  security:
    "I'd like to learn more about your security and privacy measures for medical data.",
};

export function Contact() {
  const [searchParams] = useSearchParams();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const preset = searchParams.get("preset");
    if (preset && preset in presetMessages) {
      setFormState((prev) => ({
        ...prev,
        message: presetMessages[preset as keyof typeof presetMessages],
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    try {
      await addDoc(collection(firestore, "contactFormSubmissions"), {
        name: formState.name,
        email: formState.email,
        message: formState.message,
        timestamp: serverTimestamp(),
      });
      setSuccessMessage(
        "Thank you for reaching out! We will get back to you soon."
      );
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error saving contact form data to Firebase:", error);
      setErrorMessage(
        "An error occurred while submitting the form. Please try again later."
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-32">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <h2 className="text-4xl font-bold text-center mb-8">Get in Touch</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formState.name}
                onChange={(e) =>
                  setFormState({ ...formState, name: e.target.value })
                }
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formState.email}
                onChange={(e) =>
                  setFormState({ ...formState, email: e.target.value })
                }
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-xl font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                value={formState.message}
                onChange={(e) =>
                  setFormState({ ...formState, message: e.target.value })
                }
                rows={4}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white text-xl font-semibold px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2"
            >
              <span>Send Message</span>
              <Send className="w-6 h-6" />
            </button>
          </form>
          {successMessage && (
            <p className="text-green-600 mt-4">{successMessage}</p>
          )}
          {errorMessage && <p className="text-red-600 mt-4">{errorMessage}</p>}
        </motion.div>
      </div>
    </div>
  );
}
