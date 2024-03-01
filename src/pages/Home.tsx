import About from "../components/About";
import Boxes from "../components/Boxes";
import ContactHeader from "../components/ContactHeader";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Sites from "../components/Sites";

const Home = () => {
  return (
    <>
      <Hero />
      <Boxes />
      <Services />
      <Sites />
      <About />
      <ContactHeader />
    </>
  );
};

export default Home;
