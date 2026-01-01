import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* =========================
   ULTRA-SMOOTH ANIMATIONS
   ========================= */

// Text fade-in (no slide, no jump)
const fadeText = {
  hidden: {
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// Container stagger (reading rhythm)
const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.4,
    },
  },
};

// Expand animation (slow accordion)
const expand = {
  hidden: {
    height: 0,
    opacity: 0,
  },
  visible: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 1.2,
        ease: [0.25, 0.1, 0.25, 1],
      },
      opacity: {
        duration: 1,
        ease: "easeOut",
      },
      staggerChildren: 0.35,
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      duration: 0.9,
      ease: [0.4, 0, 0.6, 1],
    },
  },
};

// Reusable reveal wrapper
const RevealText = ({ children, className }) => (
  <div className="overflow-hidden">
    <motion.div variants={fadeText} className={className}>
      {children}
    </motion.div>
  </div>
);

const About = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="bg-black w-full flex flex-col items-center overflow-hidden">
      <div className="w-full h-14 md:h-12" />

      <motion.div
        className="max-w-[1000px] flex flex-col items-start w-full justify-start px-[20px] md:px-[50px] py-8"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* Heading */}
        <RevealText className="text-white w-full text-[60px] md:text-[80px] font-semibold">
          <motion.h2 variants={fadeText}>About Me</motion.h2>
        </RevealText>

        {/* Intro */}
        <RevealText className="text-white text-[16px] md:text-[18px] leading-relaxed mt-4">
          <motion.p variants={fadeText}>
            Hi, I’m Satish Reddy, a web developer currently based in Hyderabad,
            originally from Kadapa, Andhra Pradesh. My journey hasn’t been
            limited to one place—I’ve moved across cities like Bangalore and
            Gujarat, gaining diverse experiences along the way, including
            working with Tech Mahindra. Each place I’ve lived and worked in has
            shaped how I think, adapt, and grow—both personally and
            professionally.
          </motion.p>
        </RevealText>

        {/* Expanded Content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              variants={expand}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="mt-4 space-y-4 overflow-hidden"
            >
              {[
                "My educational foundation comes from a strong academic background. I completed my B.Tech in Computer Science from SV Engineering College, Tirupati. I’ve maintained good academic performance throughout my studies, scoring around 90% in my 10th, 99% in Intermediate, and 75% in my B.Tech. This journey helped me build not just technical knowledge, but also discipline, consistency, and a problem-solving mindset.",
                "I’m someone who genuinely enjoys challenges. For me, web development isn’t just about creating websites—it’s about understanding how they work. Whether it’s building something new or fixing issues on an existing website, I enjoy diving deep into problems, analyzing what’s going wrong, and finding the right solution.",
                "Developing websites gives me a sense of satisfaction that’s hard to explain. Seeing something come together through my own effort—reviewing whether it’s done right or if it can be done better—brings me real happiness. That feeling of knowing I’ve built something meaningful is a big reason why I do what I do.",
                "I value quality over speed. When I take on any work, I give it my full attention and effort. I’m calm, patient, detail-oriented, and thoughtful in my approach. I believe good work takes time, and I prefer doing things the right way rather than rushing through them.",
                "Outside of work, I enjoy playing chess and spending time gardening whenever I’m back in my hometown. These simple activities help me stay grounded, focused, and balanced.",
                "In many ways, I’m fortunate—my profession is also my hobby, and that makes the work I do both fulfilling and meaningful.",
              ].map((text, i) => (
                <RevealText
                  key={i}
                  className="text-white text-[16px] md:text-[18px] leading-relaxed"
                >
                  <motion.p variants={fadeText}>{text}</motion.p>
                </RevealText>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Button */}
        <div className="mt-4 overflow-hidden">
          <motion.button
            onClick={() => setExpanded(!expanded)}
            variants={fadeText}
            initial="hidden"
            animate="visible"
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.4, ease: "easeOut" },
            }}
            className="relative underline text-white font-semibold text-[18px] cursor-pointer"
          >
            <span>{expanded ? "Show Less" : "Learn More"}</span>

            <motion.span
              className="absolute left-0 -bottom-[2px] h-[1px] bg-white"
              initial={{ width: "0%" }}
              whileHover={{ width: "100%" }}
              transition={{
                duration: 1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
            />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
