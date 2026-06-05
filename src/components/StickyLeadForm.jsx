// src/components/StickyLeadForm.jsx

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase"
import { useNavigate } from "react-router-dom";

import {
  Send,
  Home,
} from "lucide-react";

export default function StickyLeadForm({
  galleryPopupOpen,
}) {
  const navigate = useNavigate();
 const [hide, setHide] = useState(false);
 const [name, setName] = useState("");
const [phone, setPhone] = useState("");
const [email, setEmail] = useState("");
const [bhk, setBhk] = useState("");
const [city, setCity] = useState("");
const [loading, setLoading] = useState(false);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setHide(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, []);
  const handleSubmit = async () => {
  if (!name || !phone || !email || !bhk || !city) {
    alert("Please fill all fields");
    return;
  }

  setLoading(true);

  const params = new URLSearchParams(window.location.search);

  const { error } = await supabase
    .from("leads")
    .insert([
      {
        source: "website",
        form_type: "sticky_form",

        name,
        phone,
        email,

        configuration: bhk,
        city,

        utm_source: params.get("utm_source"),
        utm_medium: params.get("utm_medium"),
        utm_campaign: params.get("utm_campaign"),
        utm_term: params.get("utm_term"),
        utm_content: params.get("utm_content"),
      },
    ]);

  if (error) {
    console.error(error);
    alert(error.message);
    setLoading(false);
    return;
  }
  await fetch(
  "https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZlMDYzZjA0MzI1MjZiNTUzMTUxMzci_pc",
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      phone,
      email,
      configuration: bhk,
      city,
      form_type: "sticky_form",
    }),
  }
);

  setLoading(false);

setName("");
setPhone("");
setEmail("");
setBhk("");
setCity("");

navigate("/thank-you");
};

  return (
    <div
      className={`
      hidden
      xl:flex

      fixed
      left-1/2
      -translate-x-1/2

      bottom-4

      z-[999]

      transition-all
      duration-500

      ${
        hide || galleryPopupOpen
          ? "opacity-0 invisible pointer-events-none translate-y-16"
          : "opacity-100 visible translate-y-0"
      }
      `}
    >
      <div
        className="
        flex
        items-center
        gap-2

        bg-[#efe3c2]

        border
        border-[#d6c08a]

        rounded-[20px]

        px-3
        py-3

        shadow-[0_10px_30px_rgba(0,0,0,0.10)]
        "
      >
        {/* SITE VISIT BUTTON */}

        <button
          className="
          flex
          items-center
          gap-2

          px-4
          h-[42px]

          rounded-[12px]

          bg-[#d4ad57]

          text-[#111111]

          uppercase
          tracking-[0.14em]

          text-[9px]

          whitespace-nowrap
          "
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
          }}
        >
          <Home size={13} />

          Site Visit
        </button>

        {/* NAME */}

       <input
  type="text"
  placeholder="Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="
    w-[125px]
    h-[42px]
    bg-[#f8efd7]
    border
    border-[#d8c18c]
    rounded-[11px]
    px-3
    text-[12px]
    text-[#1a1a1a]
    placeholder:text-[#7a6d4e]
    outline-none
  "
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
  }}
/>

        {/* PHONE */}

        <input
  type="text"
  placeholder="Phone"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
  className="
    w-[125px]
    h-[42px]
    bg-[#f8efd7]
    border
    border-[#d8c18c]
    rounded-[11px]
    px-3
    text-[12px]
    text-[#1a1a1a]
    placeholder:text-[#7a6d4e]
    outline-none
  "
  style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}
/>

        {/* EMAIL */}

        <input
  type="email"
  placeholder="Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="
    w-[150px]
    h-[42px]
    bg-[#f8efd7]
    border
    border-[#d8c18c]
    rounded-[11px]
    px-3
    text-[12px]
    text-[#1a1a1a]
    placeholder:text-[#7a6d4e]
    outline-none
  "
  style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 500,
          }}
/>

        {/* BHK */}

        <select
  value={bhk}
  onChange={(e) => setBhk(e.target.value)}
  className="
    w-[92px]
    h-[42px]
    bg-[#f8efd7]
    border
    border-[#d8c18c]
    rounded-[11px]
    px-3
    text-[12px]
    text-[#1a1a1a]
    outline-none
  "
  style={{          fontFamily: "'Inter', sans-serif",          fontWeight: 500,        }}
>
  <option value="">BHK</option>
  <option value="2.5 BHK">2.5 BHK</option>
  <option value="3 BHK">3 BHK</option>
  <option value="3.5 BHK">3.5 BHK</option>
</select>

        {/* LOCATION */}

        <select
  value={city}
  onChange={(e) => setCity(e.target.value)}
  className="
    w-[115px]
    h-[42px]
    bg-[#f8efd7]
    border
    border-[#d8c18c]
    rounded-[11px]
    px-3
    text-[12px]
    text-[#1a1a1a]
    outline-none
  "
  style={{          fontFamily: "'Inter', sans-serif",          fontWeight: 500,        }}
>
  <option value="">Location</option>
  <option value="Jorhat">Jorhat</option>
  <option value="Guwahati">Guwahati</option>
  <option value="Dibrugarh">Dibrugarh</option>
</select>

        {/* SUBMIT */}

        <button
  onClick={handleSubmit}
  disabled={loading}
  className="
    flex
    items-center
    justify-center
    gap-2

    h-[42px]
    px-5

    rounded-[11px]

    bg-[#1b3173]
    hover:bg-[#16295f]

    text-white

    uppercase
    tracking-[0.14em]

    text-[10px]

    transition-all
    duration-300

    disabled:opacity-70
  "
  style={{
    fontFamily: "'Inter', sans-serif",
    fontWeight: 700,
  }}
>
  {loading ? "Submitting..." : "Book"}
  <Send size={13} />
</button>
      </div>
    </div>
  );
}