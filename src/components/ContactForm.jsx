// src/components/ContactForm.jsx
// FINAL FIXED VERSION
// lucide-react এর কিছু ভার্সনে Instagram / Youtube icon থাকে না।
// তাই 100% compatibility এর জন্য শুধুমাত্র নিশ্চিতভাবে থাকা icons ব্যবহার করা হয়েছে.

import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Camera,
  Play,
  Leaf,
  ShieldCheck,
  TrendingUp,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+91 98765 43210",
  },
  {
    icon: Mail,
    title: "Email Us",
    value: "info@subhampark.com",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    value: "Jorhat, Assam",
  },
];

// Social icons (100% compatible)
const socialIcons = [Globe, Camera, Play];

const features = [
  { icon: Leaf, label: "Green Living" },
  { icon: ShieldCheck, label: "Secure Community" },
  { icon: TrendingUp, label: "High Growth" },
];

export default function ContactForm() {
  return (
    <section
      id="contact"
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>
      <div className="absolute top-1/2 left-1/2 w-96 h-96 -translate-x-1/2 -translate-y-1/2 bg-emerald-400/5 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* TOP SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-emerald-400 font-semibold tracking-[0.35em] uppercase">
              Contact Us
            </p>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Let&apos;s Discuss Your
              <span className="block text-emerald-400">Dream Property</span>
            </h2>

            <p className="mt-6 text-slate-300 leading-8 max-w-xl">
              Connect with our team to know more about Subham Park Jorhat,
              available plots, pricing, site visits, and long-term investment
              opportunities.
            </p>

            {/* CONTACT INFO */}
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-xl"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Icon className="w-5 h-5 text-white" />
                    </div>

                    <h3 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-300 leading-6">
                      {item.value}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT VISUAL PANEL */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative h-[560px] rounded-t-[12rem] rounded-b-[2rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-emerald-500/10 to-green-600/10 backdrop-blur-2xl shadow-2xl shadow-emerald-900/40">
              <div className="absolute top-10 left-10 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-10 right-10 w-48 h-48 bg-green-300/10 blur-3xl rounded-full"></div>

              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="w-32 h-32 rounded-[2.5rem] bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-2xl shadow-emerald-500/40"
                >
                  <MapPin className="w-16 h-16 text-white" />
                </motion.div>

                <h3 className="mt-8 text-3xl md:text-4xl font-bold text-white">
                  Visit Subham Park
                </h3>

                <p className="mt-4 text-slate-300 leading-8 max-w-md">
                  Discover premium residential plots in the heart of Jorhat,
                  thoughtfully planned for modern living and future growth.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-emerald-200 flex items-center gap-2"
                      >
                        <Icon className="w-4 h-4" />
                        <span>{feature.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="mt-20 grid lg:grid-cols-2 gap-10">
          {/* CONTACT FORM */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <h3 className="text-3xl font-bold text-white">Get In Touch</h3>

            <form className="mt-8 space-y-5">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/10 outline-none placeholder:text-slate-400 text-white"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-full bg-white/10 border border-white/10 outline-none placeholder:text-slate-400 text-white"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                className="w-full px-5 py-4 rounded-3xl bg-white/10 border border-white/10 outline-none placeholder:text-slate-400 text-white resize-none"
              ></textarea>

              <button
                type="submit"
                className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 font-semibold shadow-lg shadow-emerald-500/30 hover:scale-105 transition duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          {/* MAP + SOCIAL */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-3xl font-bold text-white">Our Location</h3>

            <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <iframe
                title="Subham Park Location"
                src="https://www.google.com/maps?q=Jorhat,Assam&output=embed"
                className="w-full h-[320px]"
                loading="lazy"
              ></iframe>
            </div>

            <div className="mt-8 flex gap-4">
              {socialIcons.map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:scale-110 transition duration-300"
                >
                  <Icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}