import { Link, useLocation } from "react-router-dom";
import Logo from "../assets/Logo.png";
import { useEffect, useState } from "react";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <nav
        className={` hidden z-2000 w-full md:flex items-center justify-center text-nav fixed top-0 left-0 ${
          scrolled
            ? "border-b border-[#ccc] bg-black/60 backdrop-blur-md "
            : " bg-transparent"
        }`}
      >
        <div className="max-w-[1400px] w-full px-5 md:px-10 h-12 ">
          <ul className="text-white flex items-center justify-center gap-x-8 h-full w-full">
            {currentPath !== "/" && (
              <li className="h-full">
                <Link to="/" className="h-full flex items-center">
                  Home
                </Link>
              </li>
            )}
            {currentPath !== "/about-me" && (
              <li>
                <Link to="/about-me" className="h-full flex items-center">
                  About Me
                </Link>
              </li>
            )}
            {currentPath !== "/experience" && (
              <li>
                <Link to="/experience" className="h-full flex items-center">
                  Experience
                </Link>
              </li>
            )}
            {currentPath !== "/projects" && (
              <li>
                <Link to="/projects" className="h-full flex items-center">
                  Projects
                </Link>
              </li>
            )}
            {currentPath !== "/skills" && (
              <li>
                <Link to="/skills" className="h-full flex items-center">
                  Skills
                </Link>
              </li>
            )}
            {currentPath !== "/services" && (
              <li>
                <Link to="/services" className="h-full flex items-center">
                  Services
                </Link>
              </li>
            )}
            {currentPath !== "/contact-me" && (
              <li>
                <Link to="/contact-me" className="h-full flex items-center">
                  Contact Me
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
      <nav className="flex z-10 w-full bg-transparent md:hidden items-center justify-center text-nav fixed top-0 left-0">
        <div className=" max-w-8xl w-full px-5 py-2 md:px-10 h-14 box-border flex justify-between items-center">
          <div>
            <img src={Logo} alt="Logo" className="h-full w-[30px]" />
          </div>
          <div>
            <button
              onClick={() => setMenuOpen((menuOpen) => !menuOpen)}
              className="relative z-50 flex flex-col items-end justify-center gap-2"
            >
              <span
                className={`h-[2px] bg-white transition-all duration-300
      ${menuOpen ? "translate-y-[9px] rotate-50 w-7" : "w-10"}
    `}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300
      ${menuOpen ? "opacity-0" : "w-7"}
    `}
              />
              <span
                className={`h-[2px] bg-white transition-all duration-300
      ${menuOpen ? "-translate-y-[10px] -rotate-50 w-7" : "w-5"}
    `}
              />
            </button>
          </div>
          {menuOpen && (
            <div className="fixed top-0 left-0 right-0 bottom-0 h-[100vh] w-full bg-black">
              <ul className="text-white flex flex-col items-center justify-center gap-y-4 h-full w-full">
                {currentPath !== "/" && (
                  <li className="h-full">
                    <Link to="/" className="h-full flex items-center">
                      Home
                    </Link>
                  </li>
                )}
                {currentPath !== "/about-me" && (
                  <li>
                    <Link to="/about-me" className="h-full flex items-center">
                      About Me
                    </Link>
                  </li>
                )}
                {currentPath !== "/experience" && (
                  <li>
                    <Link to="/experience" className="h-full flex items-center">
                      Experience
                    </Link>
                  </li>
                )}
                {currentPath !== "/projects" && (
                  <li>
                    <Link to="/projects" className="h-full flex items-center">
                      Projects
                    </Link>
                  </li>
                )}
                {currentPath !== "/skills" && (
                  <li>
                    <Link to="/skills" className="h-full flex items-center">
                      Skills
                    </Link>
                  </li>
                )}
                {currentPath !== "/services" && (
                  <li>
                    <Link to="/services" className="h-full flex items-center">
                      Services
                    </Link>
                  </li>
                )}
                {currentPath !== "/contact-me" && (
                  <li>
                    <Link to="/contact-me" className="h-full flex items-center">
                      Contact Me
                    </Link>
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </nav>
      {/* <div className="w-full h-14 md:h-12"></div> */}
    </>
  );
};

export default Navbar;
