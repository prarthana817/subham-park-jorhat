// src/components/Walkthrough.jsx

export default function Walkthrough() {
  return (
    <>
      <style>{`

        .walkthrough-section{
          padding:55px 5%;
          overflow:hidden;
          position:relative;

          background:
            radial-gradient(circle at top right,
            rgba(215,164,133,0.10),
            transparent 28%),

            radial-gradient(circle at bottom left,
            rgba(215,164,133,0.08),
            transparent 35%),

            linear-gradient(
              135deg,
              #faf7f3 0%,
              #f6f1eb 30%,
              #f3ece5 60%,
              #efe7df 100%
            );
        }

        .walkthrough-section::before{
          content:"";
          position:absolute;
          inset:0;

          background:
            linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px);

          background-size:60px 60px;

          opacity:1;

          pointer-events:none;
        }

        .walkthrough-container{
          max-width:1380px;
          margin:auto;

          position:relative;
          z-index:2;
        }

        /* TOP */

        .walkthrough-top{
          text-align:center;

          margin-bottom:28px;
        }

        .walkthrough-tag{
          font-size:10px;
          letter-spacing:4px;
          text-transform:uppercase;

          color:#c58b6d;

          margin-bottom:14px;

          display:block;

          font-family:'Josefin Sans', sans-serif;
          font-weight:400;
        }

        .walkthrough-title{
          font-size:46px;
          line-height:0.95;

          color:#1f1f1f;

          margin-bottom:16px;

          font-weight:500;

          font-family:'Cormorant Garamond', serif;
        }

        .walkthrough-title span{
          color:#c58b6d;
        }

        /* VIDEO */

        .walkthrough-video-wrap{
          position:relative;
        }

        .walkthrough-video{
          width:100%;
          height:100%;

          max-height:560px;

          object-fit:cover;

          display:block;

          border-radius:18px;

          border:1px solid rgba(0,0,0,0.06);

          background:#000;

          box-shadow:
            0 30px 70px rgba(0,0,0,0.12);
        }

        @media(max-width:991px){

          .walkthrough-title{
            font-size:38px;
          }

          .walkthrough-video{
            max-height:420px;
          }
        }

        @media(max-width:576px){

          .walkthrough-section{
            padding:45px 4%;
          }

          .walkthrough-title{
            font-size:30px;
          }

          .walkthrough-video{
            max-height:280px;
          }
        }

      `}</style>

      <section
        id="walkthrough"
        className="walkthrough-section"
      >

        <div className="walkthrough-container">

          {/* TOP CONTENT */}

          <div className="walkthrough-top">

            <span className="walkthrough-tag">
              PROJECT WALKTHROUGH
            </span>

            <h2 className="walkthrough-title">
              Experience The <span>Project Virtually</span>
            </h2>

          </div>

          {/* VIDEO */}

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

          </div>

        </div>

      </section>
    </>
  );
}