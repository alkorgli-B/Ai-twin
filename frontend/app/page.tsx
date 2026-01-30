'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="container mx-auto px-4 py-20 text-center text-white"
      >
        <h1 className="text-6xl font-bold mb-6">🧠 AI-Twin</h1>
        <p className="text-2xl mb-8">Your Digital Intelligence Companion</p>
        <button className="bg-white text-purple-900 px-8 py-4 rounded-full text-xl font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </motion.div>
    </div>
  );
}
