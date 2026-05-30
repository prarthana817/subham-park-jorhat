// src/components/Contact.jsx
export default function Contact() {
  return (
    <section id="contact" className="relative py-12 lg:py-20 bg-[#0d1b46]">
      <div className="absolute inset-0 bg-[#0d1b46]" />
      
      {/* Kept at a compact max-width to hold elements together */}
      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 rounded-[24px] overflow-hidden border border-[#d8c79d] bg-[#fcfaf5] shadow-[0_20px_60px_rgba(0,0,0,0.3)]">
          
          {/* LEFT SIDE — ALIGNED TO THE RIGHT INSIDE ITS COLUMN */}
          <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-between bg-[#fcfaf5] gap-8">
            <div className="lg:max-w-[460px] lg:ml-auto w-full">
              <p className="uppercase tracking-[0.25em] text-[10px] text-[#c9a14a] mb-2 font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>
                PREMIUM LIVING
              </p>
              <h2 className="text-[#111111] text-[32px] md:text-[42px] lg:text-[46px] leading-[1.05] tracking-[-1.5px] font-medium" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <div>Your Dream</div>
                <div>Home </div>
                <div className="text-[#d1a54d]">Awaits You</div>
              </h2>
              <p className="mt-4 text-[14px] lg:text-[15px] leading-[1.6] tracking-[-0.01em] text-[#5f6674] font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                Talk to our team today. We'll walk you through every detail: unit selection, pricing, site visits, and everything in between.
              </p>
            </div>

            {/* ADDRESS BOX */}
            <div className="lg:max-w-[460px] lg:ml-auto w-full">
              <div className="rounded-[14px] border border-[#e7dccb] bg-[#f8f1e4] p-4 shadow-[0_6px_20px_rgba(0,0,0,0.02)] max-w-xs">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#c9a14a] mb-1 font-bold" style={{ fontFamily: "'Inter', sans-serif" }}>
                  LOCATION
                </p>
                <p className="text-[14px] leading-[1.4] text-[#111111] font-medium" style={{ fontFamily: "'Inter', sans-serif" }}>
                  1, Sonari Gaon, Jorhat
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE — ALIGNED TO THE LEFT INSIDE ITS COLUMN */}
          <div className="p-6 sm:p-8 lg:p-12 bg-[#f4eee0] border-t lg:border-t-0 lg:border-l border-[#e1d2b3] flex flex-col justify-center">
            <div className="lg:max-w-[460px] lg:mr-auto w-full">
              <h3 className="text-[#111111] text-[28px] lg:text-[32px] leading-[1] mb-1 font-semibold" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                <span className="text-[#d1a54d]">Book</span> Site Visit
              </h3>
              <p className="text-[14px] text-[#6d7482] mb-6 font-normal" style={{ fontFamily: "'Inter', sans-serif" }}>
                Our team will contact you shortly
              </p>

              {/* FORM FIELDS */}
              <div className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[#5f6674] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>FULL NAME</label>
                    <input type="text" placeholder="Your name" className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[#111111] outline-none placeholder:text-[#8f96a3] focus:border-[#14234b] transition-all text-[14px]" />
                  </div>
                  <div>
                    <label className="block mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[#5f6674] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>PHONE NUMBER</label>
                    <input type="text" placeholder="+91..." className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[#111111] outline-none placeholder:text-[#8f96a3] focus:border-[#14234b] transition-all text-[14px]" />
                  </div>
                </div>

                <div>
                  <label className="block mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[#5f6674] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>EMAIL ADDRESS</label>
                  <input type="email" placeholder="your@email.com" className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[#111111] outline-none placeholder:text-[#8f96a3] focus:border-[#14234b] transition-all text-[14px]" />
                </div>

                <div>
                  <label className="block mb-1.5 text-[10px] uppercase tracking-[0.12em] text-[#5f6674] font-semibold" style={{ fontFamily: "'Inter', sans-serif" }}>PREFERRED UNIT TYPE</label>
                  <select className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[#111111] outline-none focus:border-[#14234b] transition-all text-[14px] appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23707887%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:12px_12px] bg-[right_12px_center] bg-no-repeat">
                    <option>Select Configuration</option>
                    <option>2 BHK Smart — 800 sq.ft</option>
                    <option>2.5 BHK — 1096 sq.ft</option>
                    <option>3 BHK — 1339 sq.ft & 1530 sq.ft</option>
                    <option>3.5 BHK — 1684 sq.ft</option>
                  </select>
                </div>

                <button className="mt-2 w-full h-[48px] rounded-[10px] bg-[#14234b] hover:bg-[#0f1c3d] text-white uppercase tracking-[0.12em] text-[11px] transition-all duration-200 hover:-translate-y-[1px] shadow-md font-bold cursor-pointer">
                  BOOK SITE VISIT
                </button>

                <p className="mt-3 text-center text-[11px] text-[#7b8390]" style={{ fontFamily: "'Inter', sans-serif" }}>
                  Your information is secure and protected.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}