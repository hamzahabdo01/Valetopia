const ContactHeader = () => {
  return (
    <>
      <div className="flex bg-orange-900 text-sm text-white p-2 justify-between mt-12">
        <div className="info lg:flex ">
          <p className="bi bi-envelope lg:ml-40 lg:mx-4">
            <a href="mailto:valetopia@gmail.com" className="mx-2">
              valetopia@gmail.com
            </a>
          </p>
          <p className="bi bi-phone">
            <span className="mx-2">+966 00 000 0000</span>
          </p>
        </div>
        <div className="socials lg:mr-56 flex">
          <a href="#" className="twitter mx-2">
            <i className="bi bi-twitter"></i>
          </a>
          <a href="#" className="facebook mx-2">
            <i className="bi bi-facebook"></i>
          </a>
          <a href="#" className="instagram mx-2">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="#" className="linkedin mx-2">
            <i className="bi bi-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactHeader;
