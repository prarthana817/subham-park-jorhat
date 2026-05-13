import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  DoorOpen,
  Sofa,
  ChefHat,
  BedDouble,
  Wind,
  CarFront,
  Expand,
} from "lucide-react";

import floorPlan from "../assests/images/floor-plan-3d.jpg";

const features = [
  {
    icon: DoorOpen,
    title: "Grand Entrance",
    description: "Welcoming entry with elegant circulation.",
  },
  {
    icon: Sofa,
    title: "Spacious Living Room",
    description: "Designed for comfort and family gatherings.",
  },
  {
    icon: ChefHat,
    title: "Modern Kitchen",
    description: "Efficient layout with contemporary utility.",
  },
  {
    icon: BedDouble,
    title: "Comfortable Bedrooms",
    description: "Private and well-ventilated sleeping spaces.",
  },
  {
    icon: Wind,
    title: "Balcony & Ventilation",
    description: "Natural light and cross-ventilation throughout.",
  },
  {
    icon: CarFront,
    title: "Dedicated Parking",
    description: "Convenient and secure parking arrangements.",
  },
];

export default function Planning() {
  const [open, setOpen] = useState(false);

  return (
    <section
      id="planning"
      className="py-24 bg-gradient-to-b from-white via-emerald-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <p className="text-emerald-600 font-semibold tracking-[0.3em] uppercase">
            Master Plan
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-slate-900">
            3D Floor Layout Showcase
          </h2>

          <p className="mt-5 text-slate-600 max-w-3xl mx-auto leading-8">
            Visualize every corner of your future home—from the grand entrance
            and living room to bedrooms, kitchen, balconies, and parking.
          </p>
        </motion.div>

        {/* MAIN IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <div
            onClick={() => setOpen(true)}
            className="group relative rounded-[2.5rem] overflow-hidden shadow-2xl shadow-emerald-200/50 cursor-pointer border border-emerald-100"
          >
            <img
              src={floorPlan}
              alt="3D Floor Plan"
              className="w-full h-auto transition duration-700 group-hover:scale-105"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

            {/* Expand Button */}
            <div className="absolute top-6 right-6 w-14 h-14 rounded-2xl bg-white/90 backdrop-blur-md shadow-lg flex items-center justify-center group-hover:scale-110 transition duration-500">
              <Expand className="w-6 h-6 text-slate-800" />
            </div>

            {/* Bottom Caption */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
              <h3 className="text-white text-2xl font-semibold">
                Smart Architectural Planning
              </h3>
              <p className="text-slate-200 mt-2">
                Click to explore the full high-resolution floor layout.
              </p>
            </div>
          </div>
        </motion.div>

        {/* FEATURES */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative bg-white/90 backdrop-blur-sm p-8 rounded-[2rem]
                           border border-emerald-100 shadow-xl shadow-emerald-100/50
                           hover:shadow-2xl hover:shadow-emerald-200/60
                           hover:border-emerald-300 transition-all duration-500"
              >
                {/* Top Glow */}
                <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-2xl bg-gradient-to-br
                             from-emerald-500 to-green-600
                             flex items-center justify-center
                             shadow-lg shadow-emerald-500/30
                             group-hover:scale-110 group-hover:rotate-6
                             transition duration-500"
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-slate-600 leading-8">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div
                  className="mt-6 h-1 w-14 rounded-full
                             bg-gradient-to-r from-emerald-500 to-green-400
                             group-hover:w-24 transition-all duration-500"
                ></div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.img
              src={floorPlan}
              alt="Full Floor Plan"
              className="max-w-[95%] max-h-[95%] rounded-3xl shadow-2xl"
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}