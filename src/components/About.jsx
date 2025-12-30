import { useState } from "react";
const About = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="bg-black w-full md:flex items-center flex-col">
      <div className="w-full h-14 md:h-12"></div>
      <div className="max-w-[900px] flex flex-col items-start w-full justify-start px-[20px] md:px-[50px] py-8">
        <h2 className="text-white w-full text-[60px] md:text-[80px] font-semibold">
          About Me
        </h2>
        <p className="text-white">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quidem,
          optio, commodi velit ad iste perspiciatis voluptatem voluptate vel
          perferendis obcaecati consectetur animi vero temporibus exercitationem
          a maxime doloribus? Aliquam, nihil. Lorem ipsum dolor sit, amet
          consectetur adipisicing elit. Modi excepturi pariatur, est
          exercitationem accusantium veritatis corrupti dicta praesentium omnis
          itaque nostrum commodi fugiat quaerat voluptas quasi numquam
        </p>
        {expanded && (
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit,
            doloremque dolore? Et pariatur quasi esse, quaerat deserunt, quae
            eos inventore, blanditiis in fugiat debitis voluptatum suscipit
            nostrum ad explicabo porro? Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Hic ipsam dolorum voluptatem saepe quo sequi
            ratione eveniet deleniti quos necessitatibus, sit, officia facere,
            aut debitis perspiciatis modi recusandae ipsa nobis. Suscipit sit
            eaque ad veniam dignissimos obcaecati facilis ex sunt repellat
            tempore minima reprehenderit molestias, facere odit doloribus rerum,
            maxime ratione eum neque expedita sed similique soluta.
            Exercitationem, magnam veritatis? Quia quo modi excepturi neque iste
            aut autem possimus rem placeat blanditiis accusamus ex minus,
            veritatis laudantium debitis voluptatibus unde praesentium
            voluptates et, natus provident vero perferendis suscipit? Facilis,
            rem. Alias suscipit sed obcaecati minima delectus facere, eaque et
            laboriosam doloribus temporibus facilis incidunt ullam maxime
            voluptatem sint cum mollitia. Tempora, vero modi. Fugit vitae et
            accusantium commodi maxime at! Fugiat, tempore magni officia
            recusandae autem impedit architecto libero rerum laborum quibusdam!
            Doloribus sint voluptate dolor nobis odio voluptates. Aspernatur,
            exercitationem saepe. Maiores asperiores, velit dolorem culpa ea
            nihil maxime.
          </p>
        )}
        <button
          className="text-white underline text-semibold text-[18px] mt-2 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "" : "Learn More"}
        </button>
      </div>
    </section>
  );
};
export default About;
