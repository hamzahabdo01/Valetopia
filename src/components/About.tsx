import Site1 from "../images/442733845.jpg";
import Site2 from "../images/446559794.jpg";
const About = () => {
  return (
    <>
      <div className="container relative lg:left-40  text-white">
        <h1 className="text-5xl font-bold text-center">About Us</h1>
        <hr className="my-5 " />
        <div className="content flex mx-4">
          <div className="left-side mr-5">
            <h1 className="text-3xl my-4">Hello World Its Me</h1>
            <img src={Site1} alt="" className="rounded-xl" />
            <p className="my-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
              voluptates magni pariatur debitis aperiam dolorem iure, tempora
              nostrum rerum nisi ad distinctio labore, itaque, culpa iste natus
              a eum corporis!
            </p>
          </div>
          <div className="right-side">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
              harum maiores corrupti fugit veritatis suscipit veniam soluta, eum
              autem rerum quaerat nihil magnam ab tenetur ducimus illo ea,
              deleniti molestiae.
            </p>
            <img src={Site2} alt="" className="rounded-xl my-4" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
