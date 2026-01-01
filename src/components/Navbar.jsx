import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const MENU_ITEMS = [
  ["/", "Home"],
  ["/about-me", "About Me"],
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/skills", "Skills"],
  ["/services", "Services"],
  ["/contact", "Contact Me"],
];

/* ================= ANIMATION VARIANTS ================= */

const navbarVariants = {
  hidden: { y: -80, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const menuItemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

const Navbar = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ================= SCROLL ================= */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ================= LOCK BODY SCROLL ================= */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [menuOpen]);

  /* ================= CLOSE MENU ON ROUTE CHANGE ================= */
  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const linkClasses = (path) =>
    `font-medium text-white transition-opacity duration-300 ${
      isActive(path) ? "opacity-100" : "hover:opacity-70"
    }`;

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.nav
        variants={navbarVariants}
        initial="hidden"
        animate="visible"
        className={`hidden md:flex fixed top-0 left-0 w-full z-50 justify-center
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-md border-b border-white/20"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-[1400px] w-full px-10 h-14">
          <ul className="flex items-center justify-center gap-x-10 h-full text-base">
            {MENU_ITEMS.map(([path, label]) => (
              <motion.li
                key={path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link to={path} className={linkClasses(path)}>
                  {label}
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.nav>

      {/* ================= MOBILE HEADER ================= */}
      {!menuOpen && (
        <motion.nav
          className={`md:hidden fixed top-0 left-0 w-full z-50 transition-all duration-300
            ${
              scrolled
                ? "bg-black/60 backdrop-blur-md border-b border-white/20"
                : "bg-transparent"
            }
          `}
        >
          <div className="px-5 h-16 flex items-center justify-between">
            <img src={Logo} alt="Logo" className="w-[34px]" />

            <motion.button
              onClick={() => setMenuOpen(true)}
              className="flex flex-col gap-2"
              whileTap={{ scale: 0.9 }}
            >
              <span className="h-[2px] w-10 bg-white" />
              <span className="h-[2px] w-7 bg-white" />
              <span className="h-[2px] w-5 bg-white" />
            </motion.button>
          </div>
        </motion.nav>
      )}

      {/* ================= MOBILE MENU OVERLAY ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden fixed inset-0 z-[100] bg-black"
          >
            {/* Top Bar */}
            <div className="h-16 px-5 flex items-center justify-end border-b border-white/20">
              <motion.button
                onClick={() => setMenuOpen(false)}
                className="text-white text-2xl"
                whileHover={{ rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                ✕
              </motion.button>
            </div>

            {/* Menu Items */}
            <motion.ul
              variants={menuContainerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center justify-center gap-y-7 h-[calc(100vh-4rem)]"
            >
              {MENU_ITEMS.map(([path, label]) => (
                <motion.li
                  key={path}
                  variants={menuItemVariants}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link to={path} className="text-xl text-white font-medium">
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
