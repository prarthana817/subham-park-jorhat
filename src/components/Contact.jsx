import React from 'react';
import { useNavigate } from "react-router-dom"; // ১. useNavigate ইমপোর্ট করুন
import { ChevronDown } from "lucide-react"; 
import logo from "../assests/images/logo.png"; 

export default function Contact() {
  const navigate = useNavigate(); // ২. হুকটি ইনিশিয়ালাইজ করুন

  const serifFont = { fontFamily: "'Cormorant Garamond', serif" };
  const sansFont = { fontFamily: "'Inter', sans-serif" };

  // ৩. সাবমিট ফাংশন তৈরি করুন
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // এখানে আপনার ফর্ম ডাটা প্রসেস করার কোড লিখতে পারেন
    navigate("/thank-you"); // সাবমিট হওয়ার পর Thank You পেজে চলে যাবে
  };

  return (
    <section id="contact" className="relative pt-0 pb-10 bg-[#0d1b46] w-full overflow-hidden">
      {/* ... (পূর্বের ব্যাকগ্রাউন্ড কোড একই থাকবে) ... */}
      
      <div className="absolute inset-0 bg-[#0d1b46]" />
    

      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 w-full relative z-10 -mt-4 md:-mt-6">
        
        {/* HEADER SECTION */}
        <div className="flex items-center gap-3 mb-8 pl-2">
          <div className="w-[36px] h-[1.5px] bg-[#c9a14a]" />
          <span className="text-white text-[28px] md:text-[32px] font-medium uppercase tracking-[0.05em]" style={serifFont}>
            GET IN TOUCH
          </span>
        </div>

        <div className="grid md:grid-cols-2 rounded-[24px] overflow-hidden border border-[#d8c79d] bg-[#fcfaf5] shadow-[0_20px_50px_rgba(0,0,0,0.25)] w-full">
          
          {/* LEFT COLUMN */}
          <div className="p-8 sm:p-10 lg:p-12 flex flex-col justify-between bg-[#fcfaf5] gap-8 w-full">
            <div>
              <p className="uppercase tracking-[0.25em] text-[10px] md:text-[11px] text-[#c9a14a] mb-3 font-semibold" style={sansFont}>PREMIUM LIVING</p>
              <h2
  className="
    text-[#111111]
    text-[32px]
    md:text-[42px]
    lg:text-[52px]
    leading-[1.05]
    tracking-[-1.5px]
    font-medium
  "
  style={serifFont}
>
  Your Dream
  <br className="hidden md:block" />
  {" "}Home
  <br />
  <span className="italic text-[#d1a54d]">
    Awaits You
  </span>
</h2>
            </div>
            <div className="w-full">
              <div className="rounded-[14px] border border-[#e7dccb] bg-[#f8f1e4] p-4 max-w-[260px]">
                <p className="text-[9px] uppercase tracking-[0.22em] text-[#c9a14a] mb-1 font-bold" style={sansFont}>LOCATION</p>
                <p className="text-[13.5px] text-[#111111] font-medium" style={sansFont}>1, Sonari Gaon, Jorhat</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: FORM WRAPPED IN <form> */}
          <div className="p-8 sm:p-10 lg:p-12 bg-[#f4eee0] border-t md:border-t-0 md:border-l border-[#e1d2b3] flex flex-col justify-center w-full">
            <div className="w-full">
              <h3 className="text-[#111111] text-[28px] lg:text-[32px] leading-[1.1] mb-1 font-semibold" style={serifFont}>
                <span className="text-[#d1a54d] italic font-medium">Book</span> A Site Visit
              </h3>
              <p className="text-[13.5px] text-[#6d7482] mb-6 font-normal" style={sansFont}>Our team will contact you shortly</p>

              {/* ৪. এখানে <form> ব্যবহার করা হয়েছে */}
              <form onSubmit={handleFormSubmit} className="space-y-4 w-full">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10.5px] uppercase tracking-[0.12em] text-[#6d7482] font-bold" style={sansFont}>FULL NAME</label>
                    <input required type="text" placeholder="Your name" style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none" />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[10.5px] uppercase tracking-[0.12em] text-[#6d7482] font-bold" style={sansFont}>PHONE NUMBER</label>
                    <input required type="tel" placeholder="+91..." style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none" />
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] uppercase tracking-[0.12em] text-[#6d7482] font-bold" style={sansFont}>EMAIL ADDRESS</label>
                  <input required type="email" placeholder="your@email.com" style={sansFont} className="w-full h-[46px] px-3.5 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none" />
                </div>
                
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] uppercase tracking-[0.12em] text-[#6d7482] font-bold" style={sansFont}>PREFERRED BHK</label>
                  <div className="relative w-full">
                    <select required style={sansFont} className="w-full h-[46px] pl-3.5 pr-10 rounded-[10px] border border-[#dbc8a2] bg-[#fffaf2] text-[14px] outline-none cursor-pointer">
                      <option value="">Select Configuration</option>
                      <option value="2.5bhk">2.5 BHK</option>
                      <option value="3bhk">3 BHK</option>
                      <option value="3.5bhk">3.5 BHK</option>
                    </select>
                    <div className="absolute inset-y-0 right-3.5 flex items-center pointer-events-none">
                      <ChevronDown size={16} />
                    </div>
                  </div>
                </div>

                <button type="submit" style={sansFont} className="mt-4 w-full h-[48px] rounded-[10px] bg-[#14234b] hover:bg-[#0f1c3d] text-white uppercase font-bold cursor-pointer transition-all">
                  BOOK A SITE VISIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}