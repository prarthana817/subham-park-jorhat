// src/components/AboutUs.jsx

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Leaf, Shield, TrendingUp } from "lucide-react";

import logo from "../assests/images/logo.png";
import dayBg from "../assests/images/about-day.jpg";
import nightBg from "../assests/images/about-night.jpg";

const features = [
  {
    icon: Leaf,
    title: "Green Environment",
    desc: "Lush landscapes and serene surroundings.",
  },
  {
    icon: Shield,
    title: "Secure Community",
    desc: "Safe and well-planned gated development.",
  },
  {
    icon: TrendingUp,
    title: "Smart Investment",
    desc: "Excellent long-term appreciation potential.",
  },
];

export default function AboutUs() {
  const [isNight, setIsNight] = useState(false);

  const bgImage = isNight ? nightBg : dayBg;

  return (
    <section id="about" className="relative py-28 overflow-hidden text-white">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={isNight ? "night" : "day"}
          src={bgImage}
          alt="About Background"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div
        className={`absolute inset-0 transition-all duration-1000 ${
          isNight
            ? "bg-slate-950/85"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      />

      {/* Green Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsNight(!isNight)}
        className="absolute top-8 right-8 z-20 flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 hover:scale-105 transition"
      >
        {isNight ? (
          <>
            <Sun className="w-5 h-5 text-yellow-300" />
            <span className="text-white">Morning Mode</span>
          </>
        ) : (
          <>
            <Moon className="w-5 h-5 text-slate-800" />
            <span className="text-slate-900">Night Mode</span>
          </>
        )}
      </button>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={isNight ? "text-white" : "text-slate-900"}
          >
            <img src={logo} alt="Logo" className="h-16 mb-8" />

            <p className="text-emerald-500 font-semibold tracking-[0.35em] uppercase">
              About Project
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Premium Living at
              <span className="block text-emerald-500">
                Subham Park Jorhat
              </span>
            </h2>

            <p
              className={`mt-6 leading-8 text-lg ${
                isNight ? "text-slate-300" : "text-slate-700"
              }`}
            >
              Subham Park is a thoughtfully planned residential project in
              Jorhat, Assam, designed to offer a harmonious blend of modern
              living, green surroundings, and exceptional investment potential.
            </p>

            <p
              className={`mt-4 leading-8 ${
                isNight ? "text-slate-400" : "text-slate-600"
              }`}
            >
              Our vision is to create a sustainable and secure community where
              families can build their dream homes and investors can enjoy
              strong future appreciation.
            </p>
          </motion.div>

          {/* Right Side Features */}
          <div className="grid gap-5">
            {features.map((feature, index) => {
              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20 shadow-2xl"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3
                    className={`mt-5 text-xl font-semibold ${
                      isNight ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {feature.title}
                  </h3>

                  <p
                    className={`mt-2 leading-7 ${
                      isNight ? "text-slate-300" : "text-slate-700"
                    }`}
                  >
                    {feature.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}