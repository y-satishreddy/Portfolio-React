import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";

const projects = [
  {
    title: "E-Commerce App",
    description:
      "Full-stack e-commerce application with authentication, cart, and payments.",
    image: "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0",
    tech: ["Next.js", "Stripe", "MongoDB"],
    live: "#",
    github: "#",
  },
  {
    title: "Dashboard UI",
    description:
      "Analytics dashboard with charts, filters, and real-time data visualization.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",
    tech: ["React", "Charts", "API"],
    live: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "A modern personal portfolio showcasing projects, experience, and contact information.",
    image: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70",
    tech: ["React", "Tailwind", "Swiper"],
    live: "#",
    github: "#",
  },
];

export default function ExperienceProjectsSwiper() {
  const swiperRef = useRef(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-black w-full py-20">
      {/* TEXT */}
      <div className="max-w-[900px] mx-auto px-4">
        <h2 className="text-white text-[56px] md:text-[72px] font-semibold mb-6">
          Projects
        </h2>

        <p className="text-gray-400 max-w-[700px] mb-14 leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          error, iure animi quia aliquid quisquam nemo odit quas quo explicabo.
        </p>
      </div>

      {/* CAROUSEL AREA */}
      <div className="max-w-[900px] mx-auto px-4 relative">
        {/* DESKTOP ARROWS */}
        <button
          ref={prevRef}
          className="hidden lg:flex absolute -left-16 top-1/2 -translate-y-1/2
                     w-12 h-12 border border-white text-white
                     items-center justify-center
                     hover:bg-white hover:text-black transition"
        >
          ←
        </button>

        <button
          ref={nextRef}
          className="hidden lg:flex absolute -right-16 top-1/2 -translate-y-1/2
                     w-12 h-12 border border-white text-white
                     items-center justify-center
                     hover:bg-white hover:text-black transition"
        >
          →
        </button>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          navigation
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <div className="bg-white w-[360px] h-[420px] flex flex-col">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover"
                />

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 border border-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 mt-auto">
                    <a
                      href={project.live}
                      className="flex-1 text-center bg-black text-white py-2 text-sm"
                    >
                      Live
                    </a>
                    <a
                      href={project.github}
                      className="flex-1 text-center border border-black py-2 text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* MOBILE + TABLET ARROWS */}
        <div className="flex justify-center gap-6 mt-8 lg:hidden">
          <button
            onClick={() => swiperRef.current.slidePrev()}
            className="w-12 h-12 border border-white text-white
                       flex items-center justify-center
                       hover:bg-white hover:text-black transition"
          >
            ←
          </button>

          <button
            onClick={() => swiperRef.current.slideNext()}
            className="w-12 h-12 border border-white text-white
                       flex items-center justify-center
                       hover:bg-white hover:text-black transition"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
