import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* -------------------- ICONS -------------------- */
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaAws,
  FaWordpress,
  FaJava,
  FaPhp,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiSpringboot,
  SiPostgresql,
  SiFirebase,
  SiVercel,
  SiJunit5,
  SiBitbucket,
  SiJira,
  SiApache,
} from "react-icons/si";

export default function SkillsSection() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const tabs = [
    "Frontend",
    "Backend",
    "Database & Messaging",
    "Cloud & DevOps",
    "Testing & Tools",
    "Others",
  ];

  const skillsContent = {
    Frontend: {
      heading: "Frontend Development",
      description:
        "I specialize in building responsive, accessible, and high-performance user interfaces. My focus is on clean component architecture, consistent design systems, and delivering intuitive user experiences that work seamlessly across devices and browsers.",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript (ES6+)", icon: <FaJsSquare /> },
        { name: "React", icon: <FaReact /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss /> },
        { name: "WordPress", icon: <FaWordpress /> },
        { name: "PHP", icon: <FaPhp /> },
      ],
    },

    Backend: {
      heading: "Backend Development",
      description:
        "I develop robust and scalable backend systems with a strong emphasis on clean architecture, security, and performance.",
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Spring Boot", icon: <SiSpringboot /> },
        { name: "Microservices Architecture", icon: <FaProjectDiagram /> },
        { name: "REST APIs", icon: <SiExpress /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: <SiExpress /> },
      ],
    },

    "Database & Messaging": {
      heading: "Databases & Messaging",
      description:
        "Experienced in designing efficient data models and managing both relational and NoSQL databases.",
      skills: [
        { name: "MySQL", icon: <SiMysql /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "ActiveMQ", icon: <SiApache /> },
      ],
    },

    "Cloud & DevOps": {
      heading: "Cloud & Deployment",
      description:
        "Deploying and managing applications on cloud platforms with scalability and security in mind.",
      skills: [
        { name: "AWS EC2", icon: <FaAws /> },
        { name: "AWS RDS", icon: <FaAws /> },
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Vercel", icon: <SiVercel /> },
      ],
    },

    "Testing & Tools": {
      heading: "Testing & Development Tools",
      description:
        "Ensuring software quality through unit testing, version control, and collaboration tools.",
      skills: [
        { name: "JUnit", icon: <SiJunit5 /> },
        { name: "Mockito", icon: <SiJunit5 /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGitAlt /> },
        { name: "Bitbucket", icon: <SiBitbucket /> },
        { name: "Jira", icon: <SiJira /> },
      ],
    },

    Others: {
      heading: "Other Skills",
      description:
        "Comfortable working in Agile and Scrum environments with cross-functional teams.",
      skills: [{ name: "Agile & Scrum", icon: <FaProjectDiagram /> }],
    },
  };

  /* -------------------- MOTION VARIANTS (SLOWED) -------------------- */

  const sectionVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  const listVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.16,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
    hover: {
      scale: 1.05,
      backgroundColor: "#000000",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  const textVariant = {
    hidden: { color: "#000000" },
    visible: { color: "#000000" },
    hover: {
      color: "#ffffff",
      transition: { duration: 0.35, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-black w-full flex flex-col items-center">
      <div className="w-full h-14 md:h-12" />

      <motion.div
        className="max-w-[1000px] w-full px-5 md:px-12 py-12 text-white"
        variants={sectionVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 className="text-white w-full text-[60px] md:text-[80px] font-semibold">
          Skills
        </h2>

        <p className="text-base text-white/70 max-w-[800px] mb-12 leading-relaxed">
          I am a full-stack developer with hands-on experience in building
          scalable, high-performance web applications. My skill set spans
          frontend development, backend systems, databases, cloud deployment,
          and software quality assurance.
        </p>

        {/* TABS */}
        <motion.div
          className="flex gap-3 flex-wrap mb-10"
          variants={listVariant}
          initial="hidden"
          animate="visible"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              variants={cardVariant}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-md border text-sm font-medium
                ${
                  activeTab === tab
                    ? "bg-white text-black border-white"
                    : "border-white/40"
                }`}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* CONTENT */}
        <div className="bg-white text-black rounded-lg p-8 md:p-10 shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                {skillsContent[activeTab].heading}
              </h2>

              <p className="text-base text-black/70 mb-10 leading-relaxed">
                {skillsContent[activeTab].description}
              </p>

              <motion.div
                className="grid grid-cols-2 md:grid-cols-3 gap-6"
                variants={listVariant}
                initial="hidden"
                animate="visible"
              >
                {skillsContent[activeTab].skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={cardVariant}
                    whileHover="hover"
                    className="flex items-center gap-4 p-4 border border-black/20 rounded-md"
                  >
                    <motion.span variants={textVariant} className="text-xl">
                      {skill.icon}
                    </motion.span>

                    <motion.span
                      variants={textVariant}
                      className="text-sm font-medium"
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
