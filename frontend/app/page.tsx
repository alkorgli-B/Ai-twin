'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const features = [
    {
      icon: '🧠',
      title: 'Perfect Memory',
      description: 'Never forget anything. Your AI-Twin remembers every conversation, every moment, every detail of your life.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '🎯',
      title: 'Predictive Intelligence',
      description: 'Anticipates your needs before you think of them. True proactive AI that understands you.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🌍',
      title: 'Universal Translator',
      description: 'Communicate in 7000+ languages instantly. Break down all language barriers worldwide.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🚀',
      title: 'Continuous Evolution',
      description: 'Grows smarter every day by learning from your behaviors, preferences, and decisions.',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: '🛡️',
      title: 'Privacy First',
      description: 'Your data stays yours. End-to-end encryption with zero-knowledge architecture.',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: '⚡',
      title: '24/7 Companion',
      description: 'Always available, always learning, always helping. Your digital twin never sleeps.',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const stats = [
    { value: '1M+', label: 'Target Users' },
    { value: '99.99%', label: 'Uptime' },
    { value: '7000+', label: 'Languages' },
    { value: '24/7', label: 'Available' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => {
        setEmail('');
        setIsSubmitted(false);
      }, 3000);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [features.length]);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-black" />
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 30 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="text-8xl md:text-9xl mb-6 inline-block"
              animate={{
                rotateY: [0, 360],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              🧠
            </motion.div>
            
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              AI-Twin
            </h1>
            
            <p className="text-2xl md:text-4xl font-light mb-8 text-gray-300">
              Your Digital Intelligence Companion
            </p>
            
            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto">
              The world's first true AI twin that learns, evolves, and grows with you.
              Experience the future of personal artificial intelligence.
            </p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <a
                href="#waitlist"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-lg font-semibold hover:scale-105 transition-transform shadow-2xl hover:shadow-purple-500/50"
              >
                Join the Revolution
              </a>
              
              <a
                href="https://github.com/alkorgli-B/Ai-twin"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-lg font-semibold hover:bg-white/20 transition-all"
              >
                View on GitHub
              </a>
            </motion.div>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Superhuman Capabilities
          </motion.h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all h-full">
                  <div className={`text-6xl mb-4 inline-block bg-gradient-to-r ${feature.color} p-4 rounded-2xl`}>
                    {feature.icon}
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>

                  <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            The Journey Ahead
          </motion.h2>

          <div className="space-y-8">
            {[
              { quarter: 'Q1 2026', title: 'Foundation', status: 'In Progress', items: ['MVP Launch', 'Beta Testing', '100 Users'] },
              { quarter: 'Q2 2026', title: 'Intelligence', status: 'Planned', items: ['AI Integration', 'Voice Features', '1K Users'] },
              { quarter: 'Q3 2026', title: 'Expansion', status: 'Planned', items: ['Mobile Apps', 'AR Features', '10K Users'] },
              { quarter: 'Q4 2026', title: 'Monetization', status: 'Planned', items: ['Premium Tiers', 'Partnerships', '50K Users'] },
            ].map((phase, index) => (
              <motion.div
                key={index}
                className="flex gap-6 items-start"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex-shrink-0 w-32 text-right">
                  <div className="text-2xl font-bold text-purple-400">{phase.quarter}</div>
                  <div className="text-sm text-gray-500">{phase.status}</div>
                </div>
                
                <div className="flex-shrink-0 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 mt-2" />
                
                <div className="flex-1 pb-8 border-l-2 border-white/10 pl-6 -ml-2">
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, i) => (
                      <li key={i} className="text-gray-400 flex items-center gap-2">
                        <span className="text-purple-400">▸</span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Section */}
      <section id="waitlist" className="relative z-10 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 rounded-3xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 backdrop-blur-sm border border-white/20"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Be Part of History
            </h2>
            
            <p className="text-xl text-gray-300 mb-8">
              Join the waitlist and be among the first to experience AI-Twin
            </p>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    className="flex-1 px-6 py-4 rounded-full bg-white/10 border border-white/20 focus:border-purple-500 focus:outline-none backdrop-blur-sm"
                  />
                  <button
                    type="submit"
                    className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:scale-105 transition-transform"
                  >
                    Join Waitlist
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-2xl font-semibold text-green-400"
                >
                  🎉 Welcome to the future! Check your email.
                </motion.div>
              )}
            </AnimatePresence>

            <p className="text-sm text-gray-400 mt-6">
              🔥 Limited spots for early adopters
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 mb-4">
            "Everyone is chasing the hype while I am just following the math.<br />
            See you at the finish line."
          </p>
          
          <div className="flex justify-center gap-6 mb-6">
            <a href="https://github.com/alkorgli-B/Ai-twin" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              GitHub
            </a>
            <a href="https://twitter.com/Alkorgli26" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
              Twitter/X
            </a>
          </div>
          
          <p className="text-sm text-gray-500">
            © 2026 AI-Twin | Built by alkorgli-B | The Future of Intelligence
          </p>
        </div>
      </footer>
    </div>
  );
}
