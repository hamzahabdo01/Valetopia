const Boxes = () => {
  return (
    <>
      <div className="lg:container lg:flex relative lg:left-40  lg:top-12 top-24 justify-center text-center text-white">
        <div className=" bg-blue-950 m-4 lg:p-24 p-2 border-[#6f7892] border rounded-lg border-l-4 flex lg:flex-col justify-center">
          <i className="bi bi-alarm text-7xl"></i>
          <p className="p1 my-4 mx-5 lg:mx-0">Delivered Anytime</p>
        </div>
        <div className=" bg-blue-950 m-4 lg:p-24 p-2 border-[#6f7892] border rounded-lg border-l-4 flex lg:flex-col justify-center">
          <i className="bi bi-car-front-fill text-7xl"></i>
          <p className="p1 my-4 mx-7 lg:mx-0">Suitable Parking</p>
        </div>
        <div className=" bg-blue-950 m-4 lg:p-24 p-2 border-[#6f7892] border rounded-lg border-r-4 flex lg:flex-col justify-center">
          <i className="bi bi-geo-alt text-7xl"></i>
          <p className="p1 my-4 mx-9 lg:mx-0">Safe Location</p>
        </div>
        <div className=" bg-blue-950 m-4 lg:p-24 p-2 border-[#6f7892] border rounded-lg border-r-4 flex lg:flex-col justify-center">
          <i className="bi bi-person-raised-hand text-7xl"></i>
          <p className="p1 my-4 mx-4 lg:mx-0">Trusted Employees</p>
        </div>
      </div>
    </>
  );
};

export default Boxes;
