// src/components/PopupForm.jsx

import { X, ChevronDown } from "lucide-react";

export default function PopupForm({ open, setOpen }) {
  if (!open) return null;

  return (
    <div
      className="
      fixed
      inset-0
      z-[9999]

      bg-black/60
      backdrop-blur-[3px]

      flex
      items-center
      justify-center

      p-4
      "
    >
      <div
        className="
        relative

        w-full
        max-w-[560px]

        rounded-[28px]

        overflow-hidden

        bg-[#1f1f1f]

        border
        border-[#3c3c3c]

        shadow-[0_25px_70px_rgba(0,0,0,0.45)]
        "
      >
        <div className="absolute top-[-100px] left-[-100px] w-[220px] h-[220px] bg-[#d79a74]/10 blur-[100px] rounded-full" />

        <div className="absolute bottom-[-100px] right-[-100px] w-[220px] h-[220px] bg-[#d79a74]/10 blur-[100px] rounded-full" />

        <button
          onClick={() => setOpen(false)}
          className="
          absolute
          top-4
          right-4

          w-[42px]
          h-[42px]

          rounded-full

          border
          border-white/10

          bg-white/5

          flex
          items-center
          justify-center

          text-white/70
          hover:text-white

          transition-all
          duration-300

          z-20
          "
        >
          <X size={22} />
        </button>

        <div className="relative z-10 p-6 lg:p-7">
          {/* TOP TEXT */}
          <div className="text-center mb-7">
            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[10px]
              text-[#d1a54d]
              mb-3
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 600,
              }}
            >
              Book Now
            </p>

            <h2
              className="
              text-white
              text-[34px]
              lg:text-[40px]
              leading-none
              mb-3
              "
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 500,
              }}
            >
              Book A Site Visit
            </h2>

            {/* YELLOW LINE */}
            <div className="w-[70px] h-[2px] bg-[#d1a54d] mx-auto" />
          </div>

          <div className="space-y-4">
            {/* NAME */}
            <input
              type="text"
              placeholder="Full Name"
              className="
              w-full
              h-[58px]
              rounded-[18px]
              bg-[#262626]
              border
              border-[#3d3d3d]
              px-5
              text-white
              text-[15px]
              placeholder:text-[#9d9d9d]
              outline-none
              focus:border-[#d1a54d]
              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Josefin Sans', sans-serif",
              }}
            />

            {/* PHONE + EMAIL */}
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Phone Number"
                className="
                w-full
                h-[58px]
                rounded-[18px]
                bg-[#262626]
                border
                border-[#3d3d3d]
                px-5
                text-white
                text-[15px]
                placeholder:text-[#9d9d9d]
                outline-none
                focus:border-[#d1a54d]
                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
              />

              <input
                type="email"
                placeholder="Email Address"
                className="
                w-full
                h-[58px]
                rounded-[18px]
                bg-[#262626]
                border
                border-[#3d3d3d]
                px-5
                text-white
                text-[15px]
                placeholder:text-[#9d9d9d]
                outline-none
                focus:border-[#d1a54d]
                transition-all
                duration-300
                "
                style={{
                  fontFamily: "'Josefin Sans', sans-serif",
                }}
              />
            </div>

            {/* SELECTS */}
            <div className="grid md:grid-cols-2 gap-4">
              {/* UNIT SELECT */}
              <div className="relative">
                <select
                  className="
                  appearance-none
                  w-full
                  h-[58px]
                  rounded-[18px]

                  bg-[#262626]

                  border
                  border-[#3d3d3d]

                  px-5

                  text-white
                  text-[15px]

                  outline-none

                  focus:border-[#d1a54d]

                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  <option>Select Configuration</option>

                  <option>
                    2.5 BHK
                  </option>

                  <option>
                    3 BHK 
                  </option>

                  <option>
                    3.5 BHK
                  </option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2

                  text-white

                  pointer-events-none
                  "
                />
              </div>

              {/* CITY SELECT */}
              <div className="relative">
                <select
                  className="
                  appearance-none
                  w-full
                  h-[58px]
                  rounded-[18px]
                  bg-[#262626]
                  border
                  border-[#3d3d3d]
                  px-5
                  text-white
                  text-[15px]
                  outline-none
                  focus:border-[#d1a54d]
                  transition-all
                  duration-300
                  "
                  style={{
                    fontFamily: "'Josefin Sans', sans-serif",
                  }}
                >
                  <option>Select City</option>
                  <option>Jorhat</option>
                  <option>Guwahati</option>
                  <option>Dibrugarh</option>
                </select>

                <ChevronDown
                  size={18}
                  className="
                  absolute
                  right-5
                  top-1/2
                  -translate-y-1/2
                  text-[#bcbcbc]
                  pointer-events-none
                  "
                />
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <button
              className="
              w-full
              h-[60px]

              rounded-[18px]

              bg-[#d1a54d]
              hover:bg-[#bf933c]

              text-white

              uppercase
              tracking-[0.28em]
              text-[11px]

              transition-all
              duration-300
              "
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 700,
              }}
            >
              Submit Enquiry
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}