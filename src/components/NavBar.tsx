import logo from "../images/OIG12-removebg-preview (1).png";
const NavBar = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <nav className="w-full fixed z-20 bg-blue-950 text-white flex justify-between border rounded-xl border-gray-400 font-semibold text-sm">
        <div className="logo flex lg:mx-36">
          <img src={logo} alt="" className="m-2 w-12" />
          <p className="lg:mx-3 my-5">Valetopia</p>
        </div>
        <ul className="flex my-5 lg:mx-52">
          <li className="lg:mx-3">
            <button onClick={() => scrollToSection("hero")}>Home</button>
          </li>
          <li className="mx-3">
            <button onClick={() => scrollToSection("services")}>
              Services
            </button>
          </li>
          <li className="lg:mx-3">
            <button onClick={() => scrollToSection("sites")}>Sites</button>
          </li>
          <li className="mx-3">
            <button>About</button>
          </li>
          {/* <li className="mx-3">
            <button>Contact</button>
          </li> */}
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
