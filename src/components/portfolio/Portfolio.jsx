import { useEffect, useRef, useState } from "react";
import "./portfolio.css";
import { motion, useInView, useScroll, useTransform } from "motion/react";

const items = [
  {
    id: 1,
    img: "/p1.jpg",
    title: "ScholarSuite:Full Stack College ERP System",
    desc: " ScholarSuite is a role-based, web-based campus ERP that centralizes classes, homework, exams, results, credits, and dashboards for Admin/Teacher/Student/Parent/Alumni, with React/Next.js/TypeScript/Tailwind + Node.js API routes and PostgreSQL/Prisma; delivered secure RBAC with Clerk, session/JWT auth, input validation, and migrations; exposed REST CRUD (users, students, teachers, courses, classes, attendance, exams, marks, results); shipped end-to-end flows (attendance, scheduling, marks, results, credit tracking) with full functional/integration test pass, robust error handling, access control, and toast notifications.",
    link: "https://github.com/karan2003/ScholarSuite",
  },
  {
    id: 2,
    img: "/p2.jpg",
    title: "Artificial Intelligence Story Generator",
    desc: "GPT-driven multimodal story generator that turns prompts into synchronized video stories with subtitles by combining LLM narrative text, Stable Diffusion scene images, and neural TTS; delivered end-to-end pipelines (configurable tone/genre/steps, real-time feedback), FFmpeg-based assembly, deterministic outputs, and a modular Python/Torch stack (Transformers, Diffusers, Coqui TTS, FFmpeg, SoundFile, PyYAML, NumPy/SciPy).",
    link: "https://github.com/karan2003/AI_STORY_GENERATOR",
  },
  {
    id: 3,
    img: "/p3.jpg",
    title: "Career Exploration Hub ",
    desc: "Web-based career guidance platform with a real-time chatbot that delivers personalized career roadmaps and global networking support; integrated a Career Guidance API, implemented a robust relational schema (PK/FK, indexes), input validation and sanitized queries, plus status-based messaging and in-page updates for fast feedback—built with HTML, CSS, JavaScript, Bootstrap, jQuery, and MySQL.",
    link: "https://github.com/karan2003/CAREER_EXPLORATION_HUB",
  },
  {
    id: 4,
    img: "/p4.jpg",
    title: "Pokedex-Flutter based andriod application",
    desc: "A Flutter Android app that browses the Pokémon catalog with clean UI, fast search, and detail views. Implements list/grid browsing, Pokémon detail (images, types, stats), search by name/ID, favorites, and offline caching. Uses REST API consumption, state management, and responsive layouts; built with Flutter/Dart, Material Design, and integrates JSON parsing, pagination, and image caching for smooth performance.",
    link: "/",
  },
  {
    id: 5,
    img: "/p5.jpg",
    title: "Animated Portfolio Website",
    desc: "A visually rich personal site that showcases projects with smooth, performance-friendly animations: page‑load reveals, scroll-triggered transitions, parallax layers, micro‑interactions on hover/click, and animated section headers. Built with responsive layout and accessible motion (reduced‑motion support), it features a hero intro, work/gallery with case studies, skills timeline, about/contact sections, and embedded demos. Optimized for speed (lazy loading, image/video compression, GPU-accelerated CSS) and SEO, with clean routing, dark/light themes, and reusable animation presets for consistent, polished storytelling.",
    link: "/",
  },
];

const imgVariants = {
  initial: {
    x: -500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
    },
  },
};

const textVariants = {
  initial: {
    x: 500,
    y: 500,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeInOut",
      staggerChildren: 0.05,
    },
  },
};

const ListItem = ({ item }) => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <div className="pItem" ref={ref}>
      <motion.div
        variants={imgVariants}
        animate={isInView ? "animate" : "initial"}
        className="pImg"
      >
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div
        variants={textVariants}
        animate={isInView ? "animate" : "initial"}
        className="pText"
      >
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.a variants={textVariants} href={item.link}>
          <button>View Project</button>
        </motion.a>
      </motion.div>
    </div>
  );
};

const Portfolio = () => {
  const [containerDistance, setContainerDistance] = useState(0);
  const ref = useRef(null);

  // useEffect(() => {
  //   if (ref.current) {
  //     const rect = ref.current.getBoundingClientRect();
  //     setContainerDistance(rect.left);
  //   }
  // }, []);

  // FIX: Re-calculate when screen size changes
  useEffect(() => {
    const calculateDistance = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setContainerDistance(rect.left);
      }
    };

    calculateDistance();

    window.addEventListener("resize", calculateDistance);

    return () => {
      window.removeEventListener("resize", calculateDistance);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: ref });

  const xTranslate = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -window.innerWidth * items.length]
  );

  return (
    <div className="portfolio" ref={ref}>
      <motion.div className="pList" style={{ x: xTranslate }}>
        <div
          className="empty"
          style={{
            width: window.innerWidth - containerDistance,
            // backgroundColor: "pink",
          }}
        />
        {items.map((item) => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />
      <div className="pProgress">
        <svg width="100%" height="100%" viewBox="0 0 160 160">
          <circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#ddd"
            strokeWidth={20}
          />
          <motion.circle
            cx="80"
            cy="80"
            r="70"
            fill="none"
            stroke="#dd4c62"
            strokeWidth={20}
            style={{ pathLength: scrollYProgress }}
            transform="rotate(-90 80 80)"
          />
        </svg>
      </div>
    </div>
  );
};

export default Portfolio;