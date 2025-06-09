import "./hero.css"
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hSection left">
        {/* TITLE */}
        <h1 className="hTitle">
          Hey There,
          <br />
          <span>I'm Karan!</span>
        </h1>
        {/* AWARDS */}
        <div className="awards">
          <h2>Developer & Data Scientist</h2>
          <p>
            Crafting responsive Desings in Full-Stack Tech and scalable APIs backed by PostgreSQL, while architecting data pipelines and ML-driven dashboards. By uniting UX and analytics as I deliver robust, data-informed solutions that drive strategic decision-making.
          </p>
          <div className="awardList">
            <img src="/award1.png" alt="" />
            <img src="/award2.png" alt="" />
            <img src="/award3.png" alt="" />
          </div>
        </div>
        {/* SCROLL SVG */}
        <a href="#services">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
          </svg>
        </a>
      </div>
      <div className="hSection right">
        {/* FOLLOW */}
        <div className="follow">
          <a href="https://www.instagram.com/karan_r_joshi/">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://www.facebook.com/share/1HJX3CBe9d/">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.youtube.com/">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="https://www.github.com/karan2003">
            <img src="/github.png" alt="" />
          </a>
          <div className="followTextContainer"></div>
          <div className="followText">TAP TO CONNECT</div>
        </div>
        {/* BUBBLE */}
        <Speech />
        {/* CERTIFICATE */}
        <div className="certificate">
          <img src="/certificate.png" alt="Certificate" />
          <p>NASSCOM CERTIFIED - CYBER SECURITY ANALYST</p>
          <p>2X - NPTEL GOLD MEDAL</p>
          <p>CELONIS CERTIFIED ANALYST</p>
        </div>
        {/* CONTACT BUTTON */}
        <a href="/#contact" className="contactLink">
          <div className="contactButton">
            <svg viewBox="0 0 200 200" width="150" height="150">
              <circle cx="100" cy="100" r="90" fill="pink" />
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />
              <text className="circleText">
                <textPath href="#innerCirclePath">Hire Now •</textPath>
              </text>
              <text className="circleText">
                <textPath href="#innerCirclePath" startOffset="44%">
                  Contact Me •
                </textPath>
              </text>
            </svg>
            <div className="arrow">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </svg>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
