import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ======================
   SAME ANIMATION SYSTEM AS ABOUT
====================== */

const lineReveal = {
  hidden: { y: "100%" },
  visible: {
    y: "0%",
    transition: {
      duration: 1.4,
      ease: "easeOut",
    },
  },
};

const wrapper = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.45, // slow, reading pace
    },
  },
};

const expand = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      staggerChildren: 0.4,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.6,
      ease: "easeInOut",
    },
  },
};

const RevealText = ({ children, className }) => (
  <div className="overflow-hidden">
    <motion.div variants={lineReveal} className={className}>
      {children}
    </motion.div>
  </div>
);

/* ======================
   Data
====================== */
const EXPERIENCE_DATA = [
  {
    id: "whitethoughts",
    company: "White Thoughts & Branding",
    role: "WordPress & Frontend Developer",
    period: "Jun 2025 – Present",
    location: "India",
    responsibilities: [
      "Delivered complete WordPress websites from concept to deployment for diverse clients.",
      "Developed custom WordPress themes using PHP, HTML, CSS, and JavaScript.",
      "Customized themes and plugins to meet branding, design, and functional requirements.",
      "Built dynamic and editable layouts using Advanced Custom Fields (ACF).",
      "Optimized websites for speed, SEO, accessibility, and mobile responsiveness.",
      "Integrated contact forms, analytics, SEO tools, and third-party services.",
      "Translated UI/UX designs into pixel-perfect, user-friendly interfaces.",
      "Ensured scalability, security, and long-term maintainability of WordPress projects.",
    ],
  },
  {
    id: "techm",
    company: "Tech Mahindra",
    role: "Associate Software Engineer",
    period: "Oct 2024 – Apr 2025",
    location: "Ahmedabad, India",
    responsibilities: [
      "Designed and developed fully responsive web interfaces using HTML, CSS, and JavaScript.",
      "Built reusable and interactive UI components with clean, maintainable code.",
      "Handled frontend API integrations using Fetch API and asynchronous JavaScript.",
      "Implemented EmailJS for real-time form submissions and user interactions.",
      "Ensured cross-browser compatibility and optimized frontend performance.",
      "Collaborated with backend teams to deliver stable, production-ready features.",
    ],
  },
  {
    id: "excelr",
    company: "ExcelR",
    role: "Jr. Full Stack Developer",
    period: "Apr 2023 – Jun 2024",
    location: "Hyderabad, India",
    responsibilities: [
      "Developed backend services using Java and Spring Boot following OOP principles.",
      "Designed and implemented RESTful APIs with proper validation and error handling.",
      "Worked with MySQL databases and optimized queries for performance.",
      "Implemented authentication, session management, and async processing.",
      "Deployed applications on AWS with environment-based configurations.",
      "Collaborated with frontend teams to integrate APIs seamlessly.",
    ],
  },
];
/* ======================
   Component
====================== */

const Experience = () => {
  const [opened, setOpened] = useState(null);

  const toggle = (id) => {
    setOpened((prev) => (prev === id ? null : id));
  };

  const active = EXPERIENCE_DATA.find((e) => e.id === opened);

  return (
    <section className="bg-black w-full flex flex-col items-center overflow-hidden">
      <div className="w-full h-14 md:h-12" />

      <motion.div
        className="max-w-[1000px] w-full px-[20px] md:px-[50px] py-8"
        variants={wrapper}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Heading */}
        <RevealText className="text-white text-[60px] md:text-[80px] font-semibold">
          <motion.h2 variants={lineReveal}>Experience</motion.h2>
        </RevealText>

        {/* Intro */}
        <RevealText className="text-gray-300 text-[16px] md:text-[18px] leading-relaxed mt-4 max-w-[800px]">
          <motion.p variants={lineReveal}>
            Full Stack & WordPress Developer with{" "}
            <span className="text-white font-medium">
              2.2+ years of professional experience
            </span>{" "}
            delivering high-quality, scalable websites and applications.
            Specialized in{" "}
            <span className="text-white font-medium">
              custom WordPress development
            </span>
            , theme customization, and performance optimization. Strong
            experience in building{" "}
            <span className="text-white font-medium">
              SEO-friendly, responsive, and conversion-focused
            </span>{" "}
            digital solutions using WordPress, React.js, Java, Spring Boot, and
            AWS.{" "}
          </motion.p>
        </RevealText>

        {/* BUTTONS (NOW ANIMATED) */}
        <motion.div
          variants={wrapper}
          className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
        >
          {EXPERIENCE_DATA.map((exp) => {
            const isOpen = opened === exp.id;

            return (
              <RevealText key={exp.id}>
                <motion.button
                  variants={lineReveal}
                  onClick={() => toggle(exp.id)}
                  className={`
                    w-full px-6 py-4 border flex justify-between
                    transition-colors duration-300
                    ${
                      isOpen
                        ? "bg-white text-black border-white"
                        : "text-white border-gray-600 hover:border-white"
                    }
                  `}
                >
                  <span>{exp.company}</span>
                  <span>{isOpen ? "−" : "+"}</span>
                </motion.button>

                {/* MOBILE EXPAND */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      variants={expand}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      className="md:hidden mt-4 bg-[#0d0d0d] border border-gray-700 p-5 overflow-hidden"
                    >
                      <RevealText className="text-white font-semibold text-lg">
                        <motion.p variants={lineReveal}>{exp.role}</motion.p>
                      </RevealText>

                      <p className="text-sm text-gray-500 mt-1">
                        {exp.period} · {exp.location}
                      </p>

                      <div className="mt-4 space-y-3 text-gray-300">
                        {exp.responsibilities.map((item, i) => (
                          <RevealText key={i}>
                            <motion.p variants={lineReveal}>— {item}</motion.p>
                          </RevealText>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </RevealText>
            );
          })}
        </motion.div>

        {/* DESKTOP PANEL */}
        <AnimatePresence>
          {active && (
            <motion.div
              variants={expand}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="hidden md:block mt-12 bg-[#0d0d0d] border border-gray-700 p-6 overflow-hidden"
            >
              <RevealText className="text-white text-3xl font-semibold">
                <motion.h3 variants={lineReveal}>{active.company}</motion.h3>
              </RevealText>

              <p className="text-gray-400 mt-1">{active.role}</p>

              <p className="text-sm text-gray-500 mt-1">
                {active.period} · {active.location}
              </p>

              <div className="mt-6 space-y-3 text-gray-300">
                {active.responsibilities.map((item, i) => (
                  <RevealText key={i}>
                    <motion.p variants={lineReveal}>— {item}</motion.p>
                  </RevealText>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Experience;
