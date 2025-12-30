import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
const Banner = () => {
  return (
    <>
      <section className="hidden background-image-banner h-screen w-full md:flex items-center flex-col overflow-hidden">
        <div className="w-full h-14 md:h-12"></div>
        <div className="max-w-[1400px] max-h-[900px] flex flex-col items-center w-full banner-height justify-center px-[20px] md:px-[50px]">
          <div className="h-1/3 w-full flex items-center">
            <h2 className=" text-white hero-text">I'M</h2>
          </div>
          <div className="h-1/3 w-full flex items-center justify-between">
            <h2 className="hero-text text-white "> SATISH REDDY</h2>
          </div>
          <div className="h-1/3 w-full flex items-cneter justify-between">
            <div className="flex items-center gap-1 md:gap-2 xl:gap-3 xl:mt-[40px]">
              <FaFacebookF
                className="
      w-9 h-9 p-2 text-sm
      md:w-10 md:h-10 md:p-2.5 md:text-base
      xl:w-12 xl:h-12 xl:p-3 xl:text-lg
      rounded-full bg-neutral-900 text-white
      cursor-pointer transition-all duration-300
      hover:-translate-y-0.5 hover:bg-blue-600
    "
              />

              <FaTwitter
                className="
      w-9 h-9 p-2 text-sm
      md:w-10 md:h-10 md:p-2.5 md:text-base
      xl:w-12 xl:h-12 xl:p-3 xl:text-lg
      rounded-full bg-neutral-900 text-white
      cursor-pointer transition-all duration-300
      hover:-translate-y-0.5 hover:bg-sky-500
    "
              />

              <FaInstagram
                className="
      w-9 h-9 p-2 text-sm
      md:w-10 md:h-10 md:p-2.5 md:text-base
      xl:w-12 xl:h-12 xl:p-3 xl:text-lg
      rounded-full bg-neutral-900 text-white
      cursor-pointer transition-all duration-300
      hover:-translate-y-0.5 hover:bg-pink-500
    "
              />

              <FaLinkedinIn
                className="
      w-9 h-9 p-2 text-sm
      md:w-10 md:h-10 md:p-2.5 md:text-base
      xl:w-12 xl:h-12 xl:p-3 xl:text-lg
      rounded-full bg-neutral-900 text-white
      cursor-pointer transition-all duration-300
      hover:-translate-y-0.5 hover:bg-blue-700
    "
              />
            </div>
            <h2 className="second-hero-text flex items-center justify-between text-white">
              WEB DEVELOPER
            </h2>
          </div>
        </div>
      </section>
      <section className="mobile-banner-image mobile-hero flex md:hidden flex-col items-center justify-center h-screen text-white px-6">
        <h2 className="mobile-hero-text">I'M</h2>
        <h2 className="mobile-hero-text">SATISH</h2>
        <h2 className="mobile-hero-text">REDDY</h2>
        <h2 className="mobile-hero-text">WEB</h2>
        <h2 className="mobile-hero-text">DEVELOPER</h2>

        <div className="flex gap-4 mt-8">
          <FaFacebookF className="mobile-icon hover:bg-blue-600" />
          <FaTwitter className="mobile-icon hover:bg-sky-500" />
          <FaInstagram className="mobile-icon hover:bg-pink-500" />
          <FaLinkedinIn className="mobile-icon hover:bg-blue-700" />
        </div>
      </section>
    </>
  );
};
export default Banner;
