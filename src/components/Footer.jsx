// src/components/Footer.jsx
// FINAL FIXED VERSION
// NOTE:
// lucide-react এর কিছু ভার্সনে Facebook / Instagram / Youtube export থাকে না.
// তাই 100% compatibility-এর জন্য Globe, Camera, Play icons ব্যবহার করা হয়েছে.

import { motion } from "framer-motion";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  Globe,
  Camera,
  Play,
} from "lucide-react";

import footerBg from "../assests/images/hero-bg.jpg";        // Footer background image
import locationMap from "../assests/images/location-map.jpg"; // Location map image
import logo from "../assests/images/logo.png";               // Project logo

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Amenities", href: "#amenities" },
  { name: "Gallery", href: "#gallery" },
  { name: "Location", href: "#location" },
  { name: "Contact", href: "#contact" },
];

const contactDetails = [
  {
    icon: MapPin,
    text: "Subham Park, Jorhat, Assam, India",
  },
  {
    icon: Phone,
    text: "+91 98765 43210",
  },
  {
    icon: Mail,
    text: "info@subhampark.com",
  },
];

// Social icons with guaranteed compatibility
const socialIcons = [Globe, Camera, Play];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={footerBg}
        alt="Footer Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-slate-950/90"></div>

      {/* Green Glow Effects */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-8">
        {/* Top Grid */}
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Logo + Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <img
              src={logo}
              alt="Subham Park Logo"
              className="h-16 w-auto"
            />

            <h3 className="mt-6 text-3xl font-bold leading-tight">
              Premium Living at
              <span className="block text-emerald-400">
                Subham Park Jorhat
              </span>
            </h3>

            <p className="mt-5 text-slate-300 leading-8 max-w-2xl">
              Discover thoughtfully planned residential plots in one of
              Jorhat&apos;s most promising locations. A perfect blend of nature,
              connectivity, and strong future investment potential.
            </p>

            <div className="mt-6 inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white/10 border border-white/10 text-emerald-300">
              <ArrowUpRight className="w-5 h-5" />
              <span>Future-Ready Investment Opportunity</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h4 className="text-xl font-semibold text-white">
              Quick Links
            </h4>

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-slate-300 hover:text-emerald-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Location Map */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h4 className="text-xl font-semibold text-white">
              Project Map
            </h4>

            <div className="mt-6 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <img
                src={locationMap}
                alt="Location Map"
                className="w-full h-48 object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Contact Details */}
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {contactDetails.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/10"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <p className="text-slate-200">{item.text}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Social Icons */}
        <div className="mt-12 flex justify-center gap-4">
          {socialIcons.map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center hover:bg-emerald-500 transition duration-300"
            >
              <Icon className="w-5 h-5 text-white" />
            </a>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-slate-400">
            © {currentYear} Subham Park Jorhat. All Rights Reserved.
          </p>

          <p className="mt-2 text-sm text-slate-500">
            Designed & Developed with React, Tailwind CSS and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}