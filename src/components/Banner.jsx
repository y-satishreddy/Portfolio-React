import {
  FaArrowRight,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const Banner = () => {
  return (
    <section className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Subtle Background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="absolute -top-32 -left-32 w-[420px] h-[420px] bg-white/5 blur-[120px]"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.3 }}
        className="absolute bottom-0 right-0 w-[360px] h-[360px] bg-white/5 blur-[120px]"
      />

      <div className="relative max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-[50px] md:gap-20 items-center">
        {/* LEFT CONTENT */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-5"
        >
          <motion.p
            variants={item}
            className="text-xs uppercase tracking-[0.35em] text-white/60"
          >
            Full Stack Developer
          </motion.p>

          <motion.h1
            variants={item}
            className="text-6xl md:text-8xl font-extrabold leading-none"
          >
            Satish
            <span className="block text-white/70">Reddy</span>
          </motion.h1>

          <motion.h2
            variants={item}
            className="text-lg md:text-xl font-medium text-white/85 max-w-xl"
          >
            I design and build scalable, high-performance web applications.
          </motion.h2>

          <motion.p
            variants={item}
            className="text-white/55 max-w-xl leading-relaxed text-sm"
          >
            Freelance full stack developer focused on clean architecture, modern
            UI, and production-ready solutions.
          </motion.p>

          {/* CTA + SOCIALS */}
          <motion.div
            variants={item}
            className="flex items-center gap-6 flex-wrap pt-4"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href="/contact"
              className="group relative inline-flex items-center gap-3 px-8 py-4
                         border border-white font-semibold uppercase tracking-wide
                         overflow-hidden transition-all duration-300"
            >
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              <span className="relative z-10 text-white/90 group-hover:text-white transition-colors duration-300">
                Work With Me
              </span>
              <FaArrowRight className="relative z-10 text-white/90 group-hover:text-white group-hover:translate-x-1 transition-all duration-300" />
            </motion.a>

            <div className="flex items-center gap-5 text-white/60">
              {[FaGithub, FaLinkedinIn, FaTwitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -2, color: "#fff" }}
                  transition={{ type: "tween", duration: 0.2 }}
                  href="#"
                  className="transition"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* RIGHT CARD */}
        <motion.div
          variants={card}
          initial="hidden"
          animate="show"
          whileHover={{ y: -6 }}
          transition={{ type: "spring", stiffness: 120, damping: 20 }}
          className="relative"
        >
          <div className="bg-white/5 backdrop-blur-xl border border-white/20 p-10 shadow-2xl">
            <p className="text-xs uppercase tracking-widest text-white/60">
              Currently
            </p>

            <h2 className="text-3xl font-bold mt-3">Open for Freelance</h2>

            <p className="text-white/55 mt-4 leading-relaxed text-sm">
              Helping startups and teams turn ideas into reliable, scalable web
              products.
            </p>

            <div className="flex flex-wrap gap-3 mt-6">
              {["Frontend", "Backend", "WordPress"].map((skill) => (
                <motion.span
                  whileHover={{ y: -2 }}
                  transition={{ duration: 0.2 }}
                  key={skill}
                  className="px-4 py-2 text-xs uppercase tracking-wide
                             border border-white/20 text-white/55"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
