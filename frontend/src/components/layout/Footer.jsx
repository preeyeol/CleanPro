import { Link } from "react-router-dom";



const CompanyInfo = () => (
    <div className="col-span-4 w-[70%]">
      <h1 className="mt-8 leading-[2.2] font-medium text-2xl mt-16">
      We help you restore shine and beauty to every surface!
      </h1>
      
    </div>
  );
  
  const Copyright = () => (
    <div className="mt-9 pt-8 border-t  border-white w-[92%]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-[-15px]">
        <div className="flex items-center gap-2">
          <p className="text-sm font-light">
            &copy; 2025 101CleaningPro. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 text-sm font-light ">
          <Link to="/privacy" className="underline">
            Privacy Policy
          </Link>
          <Link to="/terms" className="underline">
            Terms of Services
          </Link>
        </div>
      </div>
    </div>
  );
  

const ContactInfo = () => (
    <div className="">
      <h3 className="text-2xl font-normal mb-2">CONTACT</h3>
      <address className="not-italic leading-8 w-3/4 font-light">
        Austin, Texas, USA <br /> 737-291-4050 <br />{" "}
        101pressurewash@gmail.com
      </address>
    </div>
  );
  

const Footer=()=> {
    return (
      <footer className="relative w-full mx-auto ">
        <div className="bg-[#6d8d79] text-white ">
          <div className="ms-28">
            <div className="grid grid-cols-12">
              <CompanyInfo />
              <div className="col-span-8 mt-20 xl:ml-28">
                <div className="grid gap-10 mb-4">
                
                  <ContactInfo />
                </div>
            </div>
              </div>
            <Copyright />
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer