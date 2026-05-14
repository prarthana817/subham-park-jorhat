import { motion } from "framer-motion";
import heroBg from "../assests/images/hero-bg.jpg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#f7f8fc]"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8 pt-6">

        {/* HERO */}
        <div className="grid lg:grid-cols-[0.74fr_1.26fr] items-center min-h-screen gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="relative z-10"
          >

            {/* TOP SMALL TEXT */}
            <div className="flex items-center gap-6 mb-14">

              <div className="w-12 h-[2px] bg-[#4b73ff]" />

              <p
                className="
                uppercase
                tracking-[0.45em]
                text-[13px]
                font-[300]
                text-[#5c7cff]
                "
              >
                Premium Living
              </p>

            </div>

            {/* TITLE */}
            <h1
              className="
              text-[72px]
              sm:text-[92px]
              lg:text-[108px]

              leading-[0.92]

              tracking-[-5px]

              font-[200]

              text-[#14151c]
              "
            >
              DISCOVER
              <br />

              YOUR
              <br />

              <span className="bg-gradient-to-r from-[#4678ff] to-[#8f63ff] bg-clip-text text-transparent">
                DREAM
              </span>

              <br />

              <span className="bg-gradient-to-r from-[#5a7dff] to-[#9563ff] bg-clip-text text-transparent">
                HOME
              </span>
            </h1>

            {/* DESCRIPTION */}
            <p
              className="
              mt-14

              max-w-[470px]

              text-[17px]

              leading-[2.1]

              font-[300]

              text-[#8e97ae]
              "
            >
              Premium residences with elegant modern
              architecture and peaceful luxury living
              experiences in Jorhat.
            </p>

          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="
            relative
            flex
            justify-end
            items-center
            "
          >

            {/* SHAPE */}
            <div
              className="
              relative

              w-full
              max-w-[1200px]

              h-[760px]

              overflow-hidden
              "
              style={{
                clipPath:
                  "polygon(13% 0%, 100% 0%, 100% 70%, 92% 88%, 74% 100%, 24% 100%, 0% 78%, 0% 16%)",
                WebkitClipPath:
                  "polygon(13% 0%, 100% 0%, 100% 70%, 92% 88%, 74% 100%, 24% 100%, 0% 78%, 0% 16%)",
                borderRadius: "34px",
              }}
            >

              {/* IMAGE */}
              <img
                src={heroBg}
                alt="Subham Park"
                className="
                w-full
                h-full

                object-cover

                object-[38%_center]

                scale-[1.02]
                "
              />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}