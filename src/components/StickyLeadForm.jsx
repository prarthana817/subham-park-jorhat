// src/components/StickyLeadForm.jsx

import { useEffect, useState } from "react";
import { Send, Home } from "lucide-react";

export default function StickyLeadForm({ galleryPopupOpen }) {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const projectSection = document.getElementById("project");
    if (!projectSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(projectSection);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`
      fixed
      left-1/2
      -translate-x-1/2
      bottom-4
      z-[999]
      w-[min(95vw,1180px)]
      transition-all
      duration-500
      ${
        hide || galleryPopupOpen
          ? "opacity-0 invisible pointer-events-none translate-y-16"
          : "opacity-100 visible translate-y-0"
      }
      `}
    >
      <div className="flex flex-wrap items-center gap-2 bg-[#efe3c2] border border-[#d6c08a] rounded-[20px] px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.10)]">
        <button className="flex items-center gap-2 px-4 h-[42px] rounded-[12px] bg-[#d4ad57] text-[#111111] uppercase tracking-[0.14em] text-[9px] whitespace-nowrap" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>
          <Home size={13} /> Site Visit
        </button>
        <input type="text" placeholder="Name" className="w-[125px] h-[42px] bg-[#f8efd7] border border-[#d8c18c] rounded-[11px] px-3 text-[12px] text-[#1a1a1a] outline-none" />
        <input type="text" placeholder="Phone" className="w-[125px] h-[42px] bg-[#f8efd7] border border-[#d8c18c] rounded-[11px] px-3 text-[12px] text-[#1a1a1a] outline-none" />
        <input type="email" placeholder="Email" className="w-[150px] h-[42px] bg-[#f8efd7] border border-[#d8c18c] rounded-[11px] px-3 text-[12px] text-[#1a1a1a] outline-none" />
        <select className="w-[92px] h-[42px] bg-[#f8efd7] border border-[#d8c18c] rounded-[11px] px-3 text-[12px] text-[#1a1a1a] outline-none">
          <option value="">BHK</option>
          <option>2 BHK</option><option>3 BHK</option><option>4 BHK</option>
        </select>
        <select className="w-[115px] h-[42px] bg-[#f8efd7] border border-[#d8c18c] rounded-[11px] px-3 text-[12px] text-[#1a1a1a] outline-none">
          <option value="">Location</option>
          <option>Jorhat</option><option>Guwahati</option><option>Dibrugarh</option>
        </select>
        <button className="flex items-center justify-center gap-2 h-[42px] px-5 rounded-[11px] bg-[#1b3173] text-white uppercase tracking-[0.14em] text-[10px]" style={{ fontWeight: 700 }}>
          Book <Send size={13} />
        </button>
      </div>
    </div>
  );
}