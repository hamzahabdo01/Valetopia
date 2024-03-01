import Site1 from "../images/442733845.jpg";
import Site2 from "../images/446559794.jpg";
import Site3 from "../images/492927796.jpg";
const Sites = () => {
  return (
    <>
      <div className="flex-col my-24 rounded-xl bg-orange-900" id="sites">
        <header className=" text-white text-center text-5xl font-bold p-9">
          Where We Are
        </header>
        {/* <hr className="my-4 mx-96" /> */}

        <div className="container text-white lg:relative left-40 pb-9">
          <div className="first lg:flex rounded-xl bg-blue-950 m-4">
            <div
              className="site1  rounded-lg m-5 lg:pr-96 lg:pl-96 lg:pb-56 lg:pt-64 pl-84 pb-56 pt-6 bg-no-repeat bg-cover"
              style={{
                backgroundImage: `url(${Site1})`,
              }}
            ></div>
            <div className="desc lg:m-36 text-center">
              <h1 className="lg:text-5xl font-medium my-5">Sheraton Hotel</h1>
              <p className="my-5">
                We deeply enjoy providing service in this wonderful hotel which
                features remarkable parking lots.
              </p>
              <p className="bi bi-geo-alt text-xl my-5">
                <span className="mx-3">Riyadh</span>
              </p>
            </div>
          </div>
          <div className="second lg:flex rounded-xl bg-blue-950 m-4">
            <div
              className="site2 rounded-lg m-5 lg:pr-96 lg:pl-96 lg:pb-56 lg:pt-64 pl-84 pb-56 pt-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${Site2})` }}
            ></div>
            <div className="desc lg:m-36 text-center">
              <h1 className="lg:text-5xl font-medium my-5">Marriot Hotel</h1>
              <p className="my-5">
                We deeply enjoy providing service in this wonderful hotel which
                features remarkable parking lots.
              </p>
              <p className="bi bi-geo-alt text-xl my-5">
                <span className="mx-3">Riyadh</span>
              </p>
            </div>
          </div>
          <div className="third  lg:flex rounded-xl bg-blue-950 m-4">
            <div
              className="site3  rounded-lg m-5 lg:pr-96 lg:pl-96 lg:pb-56 lg:pt-64 pl-84 pb-56 pt-6 bg-no-repeat bg-cover"
              style={{ backgroundImage: `url(${Site3})` }}
            ></div>
            <div className="desc lg:m-36 text-center">
              <h1 className="lg:text-5xl font-medium my-5">
                Vivian Park Hotel
              </h1>
              <p className="my-5">
                We deeply enjoy providing service in this wonderful hotel which
                features remarkable parking lots.
              </p>
              <p className="bi bi-geo-alt text-xl my-5">
                <span className="mx-3">Riyadh</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sites;
