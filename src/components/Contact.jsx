import {
  FaEnvelope,
  FaPhoneAlt,
  FaDownload,
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaRedditAlien,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ======================
   ANIMATION VARIANTS
====================== */

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeSlide = {
  hidden: {
    opacity: 0,
    y: 30,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const iconAnim = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

export default function ContactSection() {
  return (
    <section className="bg-black w-full flex flex-col items-center overflow-hidden">
      <div className="w-full h-14 md:h-12" />

      <motion.div
        className="max-w-[1000px] w-full px-[20px] md:px-[50px] py-12 text-white"
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-120px" }}
      >
        {/* HEADING */}
        <motion.h1
          variants={fadeSlide}
          className="text-white text-[60px] md:text-[80px] font-semibold mb-10"
        >
          Contact Me
        </motion.h1>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div variants={slideLeft} className="flex flex-col gap-6">
            <motion.p
              variants={fadeSlide}
              className="text-sm text-white/70 leading-relaxed"
            >
              I’m a Full Stack & WordPress Developer with 2.2+ years of
              experience building scalable, performance-driven websites and
              applications. Open to freelance projects, full-time roles, and
              collaborations. Feel free to reach out for work, ideas, or just to
              connect.
            </motion.p>

            <motion.a
              variants={scaleIn}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/assets/Satish_Reddy_CV.pdf"
              className="inline-flex items-center gap-3 w-fit px-5 py-3
                         bg-white/10 hover:bg-white/20 transition-all
                         rounded-md text-sm font-medium"
            >
              <FaDownload />
              Download CV
            </motion.a>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={slideRight} className="flex flex-col gap-4">
            <motion.a
              variants={scaleIn}
              href="mailto:yettapusatishreddy@gmail.com"
              className="flex items-center gap-4 bg-white/10 rounded-md p-4
                         hover:bg-white/20 transition-all"
            >
              <div className="p-3 rounded-md bg-white/10">
                <FaEnvelope />
              </div>
              <div>
                <p className="text-xs text-white/60">Email</p>
                <p className="text-sm font-medium">
                  yettapusatishreddy@gmail.com
                </p>
              </div>
            </motion.a>

            <motion.a
              variants={scaleIn}
              href="tel:+919390526524"
              className="flex items-center gap-4 bg-white/10 rounded-md p-4
                         hover:bg-white/20 transition-all"
            >
              <div className="p-3 rounded-md bg-white/10">
                <FaPhoneAlt />
              </div>
              <div>
                <p className="text-xs text-white/60">Mobile</p>
                <p className="text-sm font-medium">+91 9390526524</p>
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* SOCIAL MEDIA */}
        <motion.div
          variants={container}
          className="mt-16 flex flex-col items-center gap-4"
        >
          <motion.p variants={fadeSlide} className="text-xs text-white/60">
            Follow me on social media
          </motion.p>

          <motion.div
            variants={container}
            className="flex flex-wrap justify-center gap-4"
          >
            {[
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/satishreddy-y/",
                label: "LinkedIn",
              },
              {
                icon: <FaGithub />,
                link: "https://github.com/satish-reddy",
                label: "GitHub",
              },
              {
                icon: <FaInstagram />,
                link: "https://www.instagram.com/satish_05",
                label: "Instagram",
              },
              {
                icon: <FaRedditAlien />,
                link: "https://reddit.com",
                label: "Reddit",
              },
            ].map(({ icon, link, label }) => (
              <motion.a
                key={label}
                variants={iconAnim}
                whileHover={{
                  y: -6,
                  rotate: 6,
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.3)",
                  backgroundColor: "rgba(255,255,255,0.18)",
                }}
                whileTap={{ scale: 0.95 }}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-3 rounded-md bg-white/10 transition-all"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
