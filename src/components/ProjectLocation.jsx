// src/components/ProjectLocation.jsx

import { motion } from "framer-motion";
import {
  MapPinned,
  Building2,
  School,
  Hospital,
  ShoppingBag,
  Plane,
  Train,
  Trees,
} from "lucide-react";

const nearbyPlaces = [
  {
    icon: Plane,
    title: "Jorhat Airport",
    distance: "15 Minutes Drive",
  },
  {
    icon: Train,
    title: "Jorhat Town Railway Station",
    distance: "12 Minutes Drive",
  },
  {
    icon: School,
    title: "Top Schools & Colleges",
    distance: "5–10 Minutes",
  },
  {
    icon: Hospital,
    title: "Hospitals & Clinics",
    distance: "8 Minutes Drive",
  },
  {
    icon: ShoppingBag,
    title: "Markets & Shopping Areas",
    distance: "10 Minutes Drive",
  },
  {
    icon: Trees,
    title: "Parks & Green Zones",
    distance: "Within Reach",
  },
];

export default function ProjectLocation() {
  return (
    <section
      id="project-location"
      className="relative py-24 bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-emerald-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <p className="text-emerald-400 font-semibold tracking-[0.35em] uppercase">
            Strategic Location
          </p>

          <h2 className="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Perfectly Connected in
            <span className="block text-emerald-400">Jorhat, Assam</span>
          </h2>

          <p className="mt-6 text-slate-300 leading-8">
            Subham Park offers a prime residential location with seamless access
            to airports, railway stations, schools, hospitals, shopping zones,
            and essential lifestyle destinations.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Location Visual Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative h-[560px] rounded-[3rem] overflow-hidden border border-white/10 bg-gradient-to-br from-white/10 via-emerald-500/10 to-green-600/10 backdrop-blur-2xl shadow-2xl shadow-emerald-900/40">
              {/* Glow Effects */}
              <div className="absolute top-12 left-12 w-40 h-40 bg-emerald-400/20 blur-3xl rounded-full"></div>
              <div className="absolute bottom-12 right-12 w-52 h-52 bg-green-300/10 blur-3xl rounded-full"></div>

              {/* Center Icon */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-10">
                <motion.div
                  animate={{
                    y: [0, -12, 0],
                    rotate: [0, 2, -2, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                  }}
                  className="w-36 h-36 rounded-[3rem] bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center shadow-2xl shadow-emerald-500/40"
                >
                  <MapPinned className="w-20 h-20 text-white" />
                </motion.div>

                <h3 className="mt-8 text-3xl md:text-4xl font-bold">
                  Prime Address
                </h3>

                <p className="mt-4 text-slate-300 leading-8 max-w-md">
                  Located in one of Jorhat&apos;s most promising growth corridors,
                  Subham Park combines convenience, connectivity, and future
                  appreciation potential.
                </p>

                <div className="mt-8 flex flex-wrap justify-center gap-3">
                  {["Airport Nearby", "City Access", "Investment Growth"].map(
                    (tag, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm text-emerald-200"
                      >
                        {tag}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white/10 backdrop-blur-xl px-6 py-4 rounded-3xl border border-white/10 shadow-xl">
              <p className="text-sm text-slate-300">Location Advantage</p>
              <p className="text-2xl font-bold text-emerald-400">
                High Potential
              </p>
            </div>
          </motion.div>

          {/* Right - Nearby Places */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              {nearbyPlaces.map((place, index) => {
                const Icon = place.icon;

                return (
                  <motion.div
                    key={place.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.08 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center shadow-lg shadow-emerald-500/30">
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    <h3 className="mt-5 text-lg font-semibold text-white leading-7">
                      {place.title}
                    </h3>

                    <p className="mt-2 text-sm text-slate-300">
                      {place.distance}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Bottom Info Card */}
            <div className="mt-8 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-xl">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                  <Building2 className="w-6 h-6 text-white" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-white">
                    A Location That Grows With You
                  </h4>
                  <p className="mt-2 text-slate-300 leading-7">
                    Whether you are building your dream home or making a smart
                    investment, Subham Park&apos;s strategic positioning ensures
                    strong future value and unmatched convenience.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}