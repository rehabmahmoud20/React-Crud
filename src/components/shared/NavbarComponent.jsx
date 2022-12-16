import userPhoto from "../../assets/images/userPhoto.jpg";
import { Navbar } from "flowbite-react";

import { MdNotifications } from "react-icons/md";

const NavbarComponent = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className=" rounded-none md-divide-gray-200 items-center   mx-auto mb-7 "
    >
      <div></div>
      <Navbar.Toggle />
      <Navbar.Collapse className="items-center ">
        <ul className="md:flex items-center md:justify-end block ">
          <li className="mb-5 md:mb-0 ">
            <p className=" md:pr-12 text-center md:text-start">
              Thursday, 03 Oct 02:08:07 PM
            </p>
          </li>
          <li className="mb-5 md:mb-0 mx-auto text-center">
            <button className="mr-6 text-white sign-in-bg  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium sign-in-radius text-sm w-fit mx-auto px-5 py-1.5   text-center ">
              sign in
            </button>
          </li>

          <li className="text-2xl border-x-2 px-2  h-fit md:mr-3 w-fit mb-5 md:mb-0 mx-auto relative">
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-600 sign-in-bg nav-notfi-span absolute  flex items-center text-white justify-center">
              <span>1</span>
            </div>
            <MdNotifications />
          </li>
          <li className="md:flex items-center mb-5 md:mb-0 text-center">
            <img
              className="w-10 h-10 object-cover rounded-full transition-all duration-500 md:mr-2 mx-auto"
              src={userPhoto}
              alt="profile"
            />
            <span className="muted">Ahmed Khaled</span>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;
