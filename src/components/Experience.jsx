import { useState } from "react";

const EXPERIENCE_DATA = [
  {
    id: "techm",
    company: "Tech Mahindra",
    role: "Frontend Developer",
    period: "Jan 2022 – Mar 2024",
    responsibilities: [
      "Developed responsive UI using React and Tailwind CSS.",
      "Worked with REST APIs and improved application performance.",
      "Collaborated with designers and backend engineers.",
    ],
  },
  {
    id: "excelr",
    company: "ExcelR",
    role: "Full Stack Trainee",
    period: "Aug 2021 – Dec 2021",
    responsibilities: [
      "Completed hands-on MERN stack training.",
      "Built real-world projects during the program.",
      "Strengthened JavaScript and React fundamentals.",
    ],
  },
  {
    id: "whitethoughts",
    company: "White Thoughts & Branding",
    role: "Frontend Intern",
    period: "May 2021 – Jul 2021",
    responsibilities: [
      "Designed and developed marketing websites.",
      "Implemented pixel-perfect UI designs.",
      "Optimized sites for SEO and performance.",
    ],
  },
];

const Experience = () => {
  const [opened, setOpened] = useState([]);

  const handleAdd = (id) => {
    if (opened.includes(id)) return;
    setOpened((prev) => [...prev, id]);
  };

  const handleRemove = (id) => {
    setOpened((prev) => prev.filter((item) => item !== id));
  };

  const openedExperiences = EXPERIENCE_DATA.filter((exp) =>
    opened.includes(exp.id)
  );

  const remainingExperiences = EXPERIENCE_DATA.filter(
    (exp) => !opened.includes(exp.id)
  );

  return (
    <section className="bg-black w-full md:flex items-center flex-col">
      <div className="w-full h-14 md:h-12"></div>

      <div className="max-w-[900px] flex flex-col items-start w-full justify-start px-[20px] md:px-[50px] py-8">
        <h2 className="text-white w-full text-[60px] md:text-[80px] font-semibold">
          Experience
        </h2>

        <p className="text-white">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti
          fugit ex assumenda quas maxime aspernatur accusantium suscipit earum
          accusamus provident.
        </p>

        {/* OPENED EXPERIENCE SECTIONS */}
        <div className="w-full mt-12 space-y-12">
          {openedExperiences.map((exp) => (
            <div key={exp.id} className="relative border-l-2 border-white pl-6">
              {/* CLOSE BUTTON */}
              <button
                onClick={() => handleRemove(exp.id)}
                className="absolute top-0 right-0 text-gray-400 hover:text-white text-xl"
                aria-label="Close experience"
              >
                ✕
              </button>

              <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                <div>
                  <h3 className="text-white text-3xl font-semibold">
                    {exp.company}
                  </h3>
                  <p className="text-gray-400">{exp.role}</p>
                </div>
                <p className="text-sm text-gray-400 mt-2 md:mt-0">
                  {exp.period}
                </p>
              </div>

              <div className="mt-4 space-y-2 text-gray-300">
                {exp.responsibilities.map((item, index) => (
                  <p key={index}>• {item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* BUTTONS */}
        {remainingExperiences.length > 0 && (
          <div className="flex flex-wrap gap-4 mt-14">
            {remainingExperiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => handleAdd(exp.id)}
                className="text-black bg-white px-6 py-2 rounded-full font-medium
                           hover:bg-gray-200 transition"
              >
                {exp.company} +
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
