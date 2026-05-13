import { motion } from "framer-motion";

export default function ExperienceVideo() {
  return (
    <section
      id="experience"
      className="relative py-24 text-white bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-950 overflow-hidden"
    >
      {/* GLOW EFFECTS */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-green-400/10 blur-3xl rounded-full"></div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Experience & <span className="text-green-400">Trust</span>
          </h2>

          <p className="mt-4 text-slate-300 max-w-2xl mx-auto leading-7">
            Subham Park Jorhat is built with years of expertise, thoughtful planning,
            and commitment to deliver a premium lifestyle and strong investment value.
          </p>
        </motion.div>

        {/* EXPERIENCE BOX */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-14 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 text-center backdrop-blur-md"
        >
          <h3 className="text-2xl font-semibold text-green-400">
            Why Choose Subham Park?
          </h3>

          <p className="mt-6 text-slate-300 leading-8">
            With modern infrastructure, legal clarity, wide roads, green surroundings,
            and strategic location in Jorhat, this project is designed for both
            comfortable living and long-term investment growth.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            ["10+", "Years Experience"],
            ["500+", "Happy Families"],
            ["50+", "Premium Plots"],
            ["100%", "Legal Approved"],
          ].map(([value, label], i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 p-6 rounded-2xl text-center hover:scale-105 transition"
            >
              <h3 className="text-3xl font-bold text-green-400">{value}</h3>
              <p className="text-slate-300 mt-2">{label}</p>
            </motion.div>
          ))}
        </div>

        {/* VIDEO SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="mt-20"
        >
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Project <span className="text-green-400">Walkthrough</span>
          </h3>

          <p className="text-center text-slate-300 mt-3">
            Watch the real experience of Subham Park Jorhat
          </p>

          {/* VIDEO CARD */}
          <div className="mt-10 rounded-3xl overflow-hidden shadow-2xl border border-white/10 relative group">

            <video
              className="w-full h-[500px] object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/videos/project-video.mp4" type="video/mp4" />
              Your browser does not support video.
            </video>

            {/* OVERLAY */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
              <h4 className="text-xl font-bold">
                Subham Park Jorhat - Premium Living Experience
              </h4>
              <p className="text-sm text-slate-300 mt-1">
                A perfect blend of nature, comfort & modern lifestyle
              </p>
            </div>

          </div>

          {/* NOTE */}
          <p className="text-center text-sm text-slate-400 mt-4">
            Experience luxury living through this walkthrough video
          </p>
        </motion.div>

      </div>
    </section>
  );
}