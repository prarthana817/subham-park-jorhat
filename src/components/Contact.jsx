// src/components/Contact.jsx
import React from 'react';
// Folder er nam jodi 'assests' (ভুল বানান) hoy tahole otai rakhun, na hole 'assets' korun
import logo from "../assests/images/logo.png"; 

export default function Contact() {
  const serifFont = { fontFamily: "'Cormorant Garamond', serif" };
  const sansFont = { fontFamily: "'Inter', sans-serif" };

  return (
    <section id="contact" className="relative py-16 md:py-20 lg:py-24 bg-[#0d1b46] w-full overflow-hidden">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 bg-[#0d1b46]" />
      
      {/* ANIMATED BACKGROUND LOGO */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] md:w-[600px] md:h-[600px] opacity-10 pointer-events-none">
        <div className="w-full h-full animate-[spin_30s_linear_infinite] flex items-center justify-center">
          <img 
            src={logo} 
            alt="Logo Background" 
            className="w-full h-full object-contain opacity-40 animate-pulse" 
          />
        </div>
      </div>

      <div className="relative z-10 max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 rounded-[24px] overflow-hidden border border-[#d8c79d] bg-[#fcfaf5] shadow-[0_20px_50px_rgba(0,0,0,0.25)] w-full">
          
          {/* LEFT COLUMN: HERO INFORMATION */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#fcfaf5] gap-8 w-full">
            <div>
              <p 
                className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-[#c9a14a] mb-2.5 font-semibold" 
                style={sansFont}
              >
                PREMIUM LIVING
              </p>
              
              <h2 
                className="text-[#111111] text-[32px] md:text-[42px] lg:text-[52px] leading-[1.05] tracking-[-1.5px] font-medium" 
                style={serifFont}
              >
                Your Dream <br />
                Home <br />
                <span className="italic text-[#d1a54d]">Awaits You</span>
              </h2>

              <p 
                className="mt-6 text-[14px] lg:text-[15px] leading-[1.65] text-[#5f6674] font-normal max-w-[480px]" 
                style={sansFont}
              >
                Talk to our team today. We'll walk you through every detail: unit selection, pricing, site visits, and everything in between.
              </p>
            </div>

            <div className="w-full">
              <div className="rounded-[14px] border border-[#e7dccb] bg-[#f8f1e4] p-4 max-w-[260px]">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#c9a14a] mb-1 font-bold" style={sansFont}>LOCATION</p>
                <p className="text-[13.5px] text-[#111111] font-medium" style={sansFont}>1, Sonari Gaon, Jorhat</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: ACTION FORM */}
          <div className="p-8 sm:p-10 lg:p-12 bg-[#f4eee0] border-t md:border-t-0 md:border-l border-[#e1d2b3] flex flex-col justify-center w-full">
            <div className="w-full">
              <h3 
                className="text-[#111111] text-[28px] lg:text-[32px] leading-[1.1] mb-1 font-semibold" 
                style={serifFont}
              >
                <span className="text-[#d1a54d] italic font-medium">Book</span> Site Visit
              </h3>
              <p className="text-[13.5px] text-[#6d7482] mb-6 font-normal" style={sansFont}>
                Our team will contact you shortly
              </p>

              <div className="space-y-4 w-full">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="FULL NAME" style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none placeholder:text-[#8f96a3] focus:border-[#14234b] transition-all" />
                  <input type="text" placeholder="PHONE" style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none placeholder:text-[#8f96a3] focus:border-[#14234b] transition-all" />
                </div>
                <input type="email" placeholder="EMAIL ADDRESS" style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none placeholder:text-[#8f96a3] focus:border-[#14234b] transition-all" />
                
                <select style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none focus:border-[#14234b] transition-all appearance-none bg-[url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20width%3D%2212%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20fill%3D%22none%22%20stroke%3D%22%23707887%22%20stroke-width%3D%222%22%20stroke-linecap%3D%22round%22%20stroke-linejoin%3D%22round%22%3E%3Cpolyline%20points%3D%226%209%2012%2015%2018%209%22%3E%3C/polyline%3E%3C/svg%3E')] bg-[length:12px_12px] bg-[right_12px_center] bg-no-repeat">
                  <option>Select Configuration</option>
                  <option>2 BHK Smart</option>
                  <option>3 BHK Luxe</option>
                </select>

                <button 
                  style={sansFont}
                  className="mt-2 w-full h-[48px] rounded-[10px] bg-[#14234b] hover:bg-[#0f1c3d] text-white uppercase tracking-[0.12em] text-[11px] transition-all duration-200 shadow-md font-bold cursor-pointer"
                >
                  BOOK SITE VISIT
                </button>

                <p className="mt-3 text-center text-[11px] text-[#7b8390]" style={sansFont}>
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