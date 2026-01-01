import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaLaptopCode,
  FaPaintBrush,
  FaCode,
  FaWordpress,
  FaServer,
  FaCloud,
} from "react-icons/fa";

/* ================= ANIMATION VARIANTS ================= */

const sectionVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.9,
      ease: "easeInOut",
      staggerChildren: 0.3,
      delayChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const listContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const listItem = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

const contentSwitch = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.45,
      ease: "easeInOut",
    },
  },
};

/* ================= COMPONENT ================= */

export default function ServicesSection() {
  const servicesData = [
    {
      id: "updates",
      label: "Website Updates & Fixes",
      title: "Website Changes & Issue Solving",
      icon: <FaLaptopCode />,
      description:
        "Professional support for improving, fixing, and enhancing existing websites while maintaining performance and design consistency.",
      details:
        "This service is ideal for maintaining and upgrading existing websites without rebuilding them from scratch. Every update is done carefully to avoid breaking layouts, styles, or functionality while improving overall quality.",
      bestFor:
        "Businesses and individuals who already have a website and need reliable fixes, updates, or improvements.",
      points: [
        "Fix layout, UI, and functionality issues",
        "Resolve HTML, CSS & JavaScript bugs",
        "Update content, sections, and features",
        "Improve performance and responsiveness",
      ],
    },
    {
      id: "micro",
      label: "Micro Website Development",
      title: "Micro Websites (5 Days)",
      icon: <FaCode />,
      description:
        "Fast delivery of small, focused websites ideal for individuals, startups, and simple business needs.",
      details:
        "Micro websites are lightweight, goal-focused, and delivered quickly. They are perfect when you need an online presence without unnecessary complexity, while still following modern design and development standards.",
      bestFor:
        "Personal brands, small businesses, portfolios, and startups launching quickly.",
      points: [
        "Complete website delivery within 5 days",
        "Clean, modern, and responsive layouts",
        "Built using HTML, CSS & JavaScript",
        "Optimized for speed and all devices",
      ],
    },
    {
      id: "macro",
      label: "Macro Website Development",
      title: "Macro Websites (10 Days)",
      icon: <FaServer />,
      description:
        "Development of larger, multi-page websites with scalable structure and long-term maintainability.",
      details:
        "Macro websites are designed with growth in mind. The focus is on clean architecture, scalability, and maintainability while delivering a polished and professional user experience.",
      bestFor:
        "Businesses, agencies, and startups that need a full-featured website with multiple sections.",
      points: [
        "Delivery of full website within 10 days",
        "Multi-page architecture and navigation",
        "Modern UI with best development practices",
        "Scalable and maintainable code structure",
      ],
    },
    {
      id: "landing",
      label: "Landing Pages",
      title: "High-Converting Landing Pages (2 Days)",
      icon: <FaCloud />,
      description:
        "Conversion-focused landing pages designed to capture attention and drive user actions efficiently.",
      details:
        "Each landing page is crafted with a clear goal — conversions. Layouts, content structure, and performance are optimized to guide visitors toward action without distractions.",
      bestFor:
        "Marketing campaigns, product launches, ads, and lead generation.",
      points: [
        "Landing page delivered within 2 days",
        "Conversion-focused layout and content",
        "Fast loading and performance optimized",
        "Mobile-first and responsive design",
      ],
    },
    {
      id: "uiux",
      label: "UI / UX Design",
      title: "User Interface & UX Design",
      icon: <FaPaintBrush />,
      description:
        "Design solutions that balance aesthetics, usability, and accessibility for a seamless user experience.",
      details:
        "Design decisions are made with users in mind. The goal is to create intuitive, accessible, and visually consistent interfaces that feel natural and easy to use.",
      bestFor:
        "Websites, dashboards, and products needing strong usability and modern visuals.",
      points: [
        "Wireframes and visual UI design",
        "User-focused layouts and interactions",
        "Accessibility and usability standards",
        "Consistent design systems and flow",
      ],
    },
    {
      id: "wordpress",
      label: "WordPress Development",
      title: "Complete WordPress Solutions",
      icon: <FaWordpress />,
      description:
        "Comprehensive WordPress services covering development, optimization, maintenance, and long-term support.",
      details:
        "From custom development to fixing errors and optimizing performance, WordPress solutions are handled with stability, security, and scalability in mind.",
      bestFor:
        "Businesses needing flexible, content-driven websites with easy management.",
      points: [
        "Custom WordPress website development",
        "Speed, SEO, and performance optimization",
        "Fix WordPress errors and technical issues",
        "Ongoing maintenance and content updates",
      ],
    },
    {
      id: "teaching",
      label: "Teaching & Mentorship",
      title: "HTML & CSS Teaching Module",
      icon: <FaLaptopCode />,
      description:
        "Structured teaching and mentorship for beginners looking to build strong fundamentals in web development.",
      details:
        "The teaching module focuses on practical learning through real examples and projects. Concepts are explained clearly to build confidence and real-world skills.",
      bestFor:
        "Beginners and aspiring developers who want a strong foundation.",
      points: [
        "HTML fundamentals from beginner to advanced",
        "CSS layouts, Flexbox, and basic animations",
        "Responsive design and best practices",
        "Hands-on projects and guided learning",
      ],
    },
  ];

  const [activeServiceId, setActiveServiceId] = useState(servicesData[0].id);

  return (
    <motion.section
      className="bg-black w-full flex flex-col items-center justify-center"
      variants={sectionVariant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="w-full h-14 md:h-12"></div>

      <div className="max-w-[1000px] w-full px-[20px] md:px-[50px] py-8 text-white">
        <motion.h2
          variants={fadeUp}
          className="text-[60px] md:text-[80px] font-semibold"
        >
          Services
        </motion.h2>

        <motion.div variants={fadeUp} className="max-w-[700px] mb-12">
          <p className="text-sm text-white/70 leading-relaxed">
            I provide complete web and WordPress solutions tailored to your
            needs. From quick fixes and high-converting landing pages to full
            website development. Focused on clean UI/UX design, performance, and
            scalability. Offering long-term maintenance and collaboration on
            large systems.
          </p>
        </motion.div>

        {/* ================= MOBILE ================= */}
        <div className="md:hidden flex flex-col gap-4">
          {servicesData.map((service) => {
            const isOpen = activeServiceId === service.id;

            return (
              <div key={service.id}>
                <button
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full px-5 py-3 rounded-md border text-sm font-medium
                  flex items-center justify-between transition-all
                  ${
                    isOpen
                      ? "bg-white text-black border-white"
                      : "border-white/40"
                  }`}
                >
                  <span>{service.label}</span>
                  <span className="text-lg font-bold">
                    {activeServiceId === service.id ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="bg-white text-black rounded-md p-6 mt-3 overflow-hidden"
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-xl">{service.icon}</div>
                        <h2 className="text-xl font-semibold">
                          {service.title}
                        </h2>
                      </div>

                      <p className="text-sm text-black/70 mb-3">
                        {service.description}
                      </p>

                      <p className="text-sm text-black/80 mb-4">
                        {service.details}
                      </p>

                      <h3 className="text-sm font-semibold mb-2 uppercase">
                        What You Get
                      </h3>

                      <ul className="space-y-3">
                        {service.points.map((point, index) => (
                          <li
                            key={index}
                            className="text-sm border border-black/20 rounded-md px-4 py-2"
                          >
                            {point}
                          </li>
                        ))}
                      </ul>

                      <p className="text-sm text-black/70 mt-4">
                        <span className="font-semibold text-black">
                          Best for:
                        </span>{" "}
                        {service.bestFor}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden md:flex gap-8 mt-12">
          <motion.div
            className="flex flex-col gap-4 min-w-[220px]"
            variants={listContainer}
          >
            {servicesData.map((service) => (
              <motion.button
                key={service.id}
                variants={listItem}
                onClick={() => setActiveServiceId(service.id)}
                className={`px-5 py-3 rounded-md border text-sm font-medium
                flex items-center justify-between transition-all
                ${
                  activeServiceId === service.id
                    ? "bg-white text-black border-white"
                    : "border-white/40 hover:border-white"
                }`}
              >
                <span>{service.label}</span>
                <span className="text-lg font-bold">
                  {activeServiceId === service.id ? "−" : "+"}
                </span>
              </motion.button>
            ))}
          </motion.div>

          <div className="bg-white text-black flex-1 rounded-md p-8 min-h-[420px]">
            <AnimatePresence mode="wait">
              {servicesData
                .filter((s) => s.id === activeServiceId)
                .map((service) => (
                  <motion.div
                    key={service.id}
                    variants={contentSwitch}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-2xl">{service.icon}</div>
                      <h2 className="text-3xl font-semibold">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-sm text-black/70 mb-4">
                      {service.description}
                    </p>

                    <p className="text-sm text-black/80 mb-6">
                      {service.details}
                    </p>

                    <h3 className="text-sm font-semibold mb-3 uppercase">
                      What You Get
                    </h3>

                    <ul className="grid grid-cols-2 gap-4">
                      {service.points.map((point, index) => (
                        <li
                          key={index}
                          className="text-sm border border-black/20 rounded-md px-4 py-3"
                        >
                          {point}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
