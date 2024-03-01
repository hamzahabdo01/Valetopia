// import Img1 from "../images/1000_F_279803348_NEtLl2oxvmkB33EVghuYD4j14XbiTpag.jpg";
// import Img2 from '../images/OIG12-removebg-preview (1).png';
// import Img3 from '../images/original-1e5547ee543e16d45adcf5a046148e57.png';
const Services = () => {
  return (
    <>
      <div className="flex-col text-center my-32 bg-orange-900 " id="services">
        <header className=" text-white text-5xl font-bold p-9">
          Our Services
        </header>
        {/* <hr className="my-4 mx-96" /> */}

        <div className="container lg:flex  text-white justify-center relative lg:left-40  pb-9">
          <div className=" bg-orange-900 m-4 p-24 border-[#6f7892] border rounded-lg">
            <i className="bi bi-alarm text-7xl"></i>
            <p className="p1 my-4">Nearest Parking</p>
          </div>
          <div className=" bg-orange-900 m-4 p-24 border-[#6f7892] border rounded-lg ">
            <i className="bi bi-car-front-fill text-7xl"></i>
            <p className="p1 my-4">Cleaning and Fuel</p>
          </div>
          <div className=" bg-orange-900 m-4 p-24 border-[#6f7892] border rounded-lg">
            <i className="bi bi-geo-alt text-7xl"></i>
            <p className="p1 my-4">Ensuring State</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
