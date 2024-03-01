import HeroImg from "../images/original-1e5547ee543e16d45adcf5a046148e57.png";
const Hero = () => {
  return (
    <>
      <div
        className="container relative lg:left-40 top-24 overflow-hidden rounded-lg bg-no-repeat text-center lg:aspect-[2] aspect-square bg-center bg-cover"
        style={{ backgroundImage: `url(${HeroImg})` }}
        id="hero"
      >
        <div
          className="absolute bottom-0 left-0 right-0 top-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: `rgba(0, 0, 0, 0.349)` }}
        >
          <div className="flex h-full items-center justify-center ">
            <div className="text-white">
              <h2 className="mb-4 text-5xl font-semibold">Valetopia</h2>
              <h4 className="mb-6 text-xl font-semibold">
                You Mark it, We Park it
              </h4>
              <button
                type="button"
                className="rounded border-2 border-neutral-50 px-7 pb-[8px] pt-[10px] text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                data-te-ripple-init
                data-te-ripple-color="light"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
