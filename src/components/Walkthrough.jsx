// src/components/Walkthrough.jsx

import { CheckCircle, ArrowUpRight } from "lucide-react";

export default function Walkthrough() {
  return (
    <>
      <style>{`

        .walkthrough-section{
          padding:70px 5%;
          overflow:hidden;
          position:relative;

          /* ULTRA DEEP LUXURY BACKGROUND */

          background:
            radial-gradient(circle at top right,
            rgba(215,164,133,0.18),
            transparent 28%),

            radial-gradient(circle at bottom left,
            rgba(110,78,60,0.18),
            transparent 35%),

            linear-gradient(
              135deg,
              #0f0c0a 0%,
              #171210 22%,
              #211916 48%,
              #2b211d 75%,
              #181311 100%
            );
        }

        /* LUXURY GRID */

        .walkthrough-section::before{
          content:"";
          position:absolute;
          inset:0;

          background:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);

          background-size:60px 60px;

          opacity:1;

          pointer-events:none;
        }

        /* SOFT GOLD GLOW */

        .walkthrough-section::after{
          content:"";
          position:absolute;

          width:700px;
          height:700px;

          background:
            radial-gradient(circle,
            rgba(215,164,133,0.20),
            transparent 70%);

          top:-260px;
          right:-220px;

          filter:blur(55px);

          pointer-events:none;
        }

        /* SIDE LINES */

        .walkthrough-lines{
          position:absolute;
          left:0;
          top:0;
          height:100%;
          width:260px;

          opacity:0.08;

          background-image:
            repeating-linear-gradient(
              to right,
              #d7a485 0px,
              #d7a485 1px,
              transparent 1px,
              transparent 8px
            );
        }

        .walkthrough-container{
          max-width:1220px;
          margin:auto;

          display:grid;
          grid-template-columns:1fr 1fr;

          gap:60px;
          align-items:center;

          position:relative;
          z-index:2;
        }

        /* LEFT */

        .walkthrough-tag{
          font-size:11px;
          letter-spacing:4px;
          text-transform:uppercase;

          color:#d7a485;

          margin-bottom:14px;

          display:block;

          font-family:'Josefin Sans', sans-serif;
          font-weight:400;
        }

        .walkthrough-title{
          font-size:58px;
          line-height:0.92;

          color:#ffffff;

          margin-bottom:22px;

          font-weight:500;

          font-family:'Cormorant Garamond', serif;
        }

        .walkthrough-title span{
          color:#d7a485;
        }

        .walkthrough-text{
          font-size:15px;
          line-height:2;

          color:#d3cac4;

          margin-bottom:28px;

          font-family:'Josefin Sans', sans-serif;
          font-weight:300;

          letter-spacing:0.2px;

          max-width:95%;
        }

        /* FEATURES */

        .walkthrough-features{
          display:grid;
          grid-template-columns:repeat(2,1fr);

          gap:14px;

          margin-bottom:30px;
        }

        .walkthrough-feature{
          position:relative;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.06),
              rgba(255,255,255,0.03)
            );

          backdrop-filter:blur(14px);

          border:1px solid rgba(255,255,255,0.08);

          padding:15px 16px;

          display:flex;
          align-items:center;
          gap:10px;

          font-size:13px;

          color:#f5eee9;

          transition:0.35s ease;

          font-family:'Josefin Sans', sans-serif;
          font-weight:400;

          overflow:hidden;
        }

        .walkthrough-feature::before{
          content:"";
          position:absolute;

          inset:0;

          background:
            linear-gradient(
              120deg,
              transparent,
              rgba(255,255,255,0.05),
              transparent
            );

          transform:translateX(-100%);
          transition:0.6s;
        }

        .walkthrough-feature:hover::before{
          transform:translateX(100%);
        }

        .walkthrough-feature:hover{
          transform:translateY(-4px);

          border-color:#d7a485;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,0.08),
              rgba(255,255,255,0.04)
            );

          box-shadow:0 15px 30px rgba(0,0,0,0.25);
        }

        .walkthrough-feature svg{
          color:#d7a485;
          min-width:16px;
        }

        /* BUTTON */

        .walkthrough-btn{
          display:inline-flex;
          align-items:center;
          gap:12px;

          background:
            linear-gradient(
              135deg,
              #d7a485,
              #b88466
            );

          color:#16110f;

          padding:14px 24px;

          text-decoration:none;

          font-size:11px;

          letter-spacing:2px;
          text-transform:uppercase;

          transition:0.35s;

          font-family:'Josefin Sans', sans-serif;
          font-weight:500;

          box-shadow:
            0 12px 30px rgba(215,164,133,0.18);
        }

        .walkthrough-btn:hover{
          background:#ffffff;

          transform:translateY(-3px);

          box-shadow:
            0 18px 40px rgba(0,0,0,0.25);
        }

        /* VIDEO */

        .walkthrough-video-wrap{
          position:relative;
          width:100%;
        }

        .walkthrough-video{
          width:100%;
          height:100%;

          max-height:560px;

          object-fit:cover;

          display:block;

          border-radius:12px;

          border:1px solid rgba(255,255,255,0.08);

          background:#000;

          box-shadow:
            0 30px 70px rgba(0,0,0,0.42);
        }

        /* FLOAT CARD */

        .walkthrough-floating{
          position:absolute;

          bottom:20px;
          left:-20px;

          background:
            linear-gradient(
              135deg,
              rgba(22,18,16,0.92),
              rgba(38,30,26,0.88)
            );

          backdrop-filter:blur(18px);

          padding:18px 20px;

          max-width:240px;

          border-left:4px solid #d7a485;

          border:1px solid rgba(255,255,255,0.06);

          box-shadow:
            0 15px 35px rgba(0,0,0,0.30);
        }

        .walkthrough-floating h4{
          font-size:20px;

          margin-bottom:8px;

          color:#ffffff;

          font-family:'Cormorant Garamond', serif;
          font-weight:600;
        }

        .walkthrough-floating p{
          font-size:12px;
          line-height:1.9;

          color:#d3c7c0;

          font-family:'Josefin Sans', sans-serif;
          font-weight:300;
        }

        /* RESPONSIVE */

        @media(max-width:991px){

          .walkthrough-container{
            grid-template-columns:1fr;
            gap:40px;
          }

          .walkthrough-title{
            font-size:44px;
          }

          .walkthrough-video{
            max-height:450px;
          }

          .walkthrough-features{
            grid-template-columns:1fr;
          }

          .walkthrough-floating{
            position:relative;
            left:0;
            bottom:0;
            margin-top:16px;
            max-width:100%;
          }
        }

        @media(max-width:576px){

          .walkthrough-section{
            padding:50px 4%;
          }

          .walkthrough-title{
            font-size:36px;
          }

          .walkthrough-video{
            max-height:340px;
          }

          .walkthrough-text{
            font-size:14px;
            max-width:100%;
          }

          .walkthrough-btn{
            width:100%;
            justify-content:center;
          }

          .walkthrough-feature{
            font-size:12px;
          }
        }

      `}</style>

      <section
        id="walkthrough"
        className="walkthrough-section"
      >

        {/* SIDE LINES */}

        <div className="walkthrough-lines" />

        <div className="walkthrough-container">

          {/* LEFT */}

          <div>

            <span className="walkthrough-tag">
              PROJECT WALKTHROUGH
            </span>

            <h2 className="walkthrough-title">
              Experience The <span>Project Virtually</span>
            </h2>

            <p className="walkthrough-text">
              Discover thoughtfully crafted residences, elegant landscapes,
              premium amenities and contemporary living spaces through our
              immersive Subham Park walkthrough experience designed for
              refined urban lifestyle and modern comfort.
            </p>

            {/* FEATURES */}

            <div className="walkthrough-features">

              <div className="walkthrough-feature">
                <CheckCircle size={16} />
                Modern Architecture
              </div>

              <div className="walkthrough-feature">
                <CheckCircle size={16} />
                Premium Lifestyle
              </div>

              <div className="walkthrough-feature">
                <CheckCircle size={16} />
                Smart Space Planning
              </div>

              <div className="walkthrough-feature">
                <CheckCircle size={16} />
                Landscaped Environment
              </div>

            </div>

            {/* BUTTON */}

            <a
              href="#location"
              className="walkthrough-btn"
            >
              Explore Project

              <ArrowUpRight size={16} />
            </a>

          </div>

          {/* RIGHT VIDEO */}

          <div className="walkthrough-video-wrap">

            <video
              className="walkthrough-video"
              src="/videos/project-video.mp4"
              autoPlay
              muted
              loop
              playsInline
              controls
            />

            {/* FLOATING CARD */}

            <div className="walkthrough-floating">

              <h4>Premium Urban Living</h4>

              <p>
                Designed with elegance, connectivity and modern comfort
                for a sophisticated residential experience in Jorhat.
              </p>

            </div>

          </div>

        </div>

      </section>
    </>
  );
}