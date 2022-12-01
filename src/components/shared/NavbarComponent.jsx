import userPhoto from "../../assets/images/userPhoto.jpg";
import { Navbar } from "flowbite-react";

import { MdNotifications } from "react-icons/md";

const NavbarComponent = () => {
  return (
    <Navbar
      fluid={true}
      rounded={true}
      className=" rounded-none md-divide-gray-200 items-center  mx-auto mb-7 "
    >
      <div></div>
      <Navbar.Toggle />
      <Navbar.Collapse className="items-center ">
        <ul className="md:flex items-center md:justify-end block ">
          <li>
            <p className=" pr-12">Thursday, 03 Oct 02:08:07 PM</p>
          </li>
          <li>
            <button className="w-fit mr-6 text-white sign-in-bg  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-1.5 text-center ">
              sign in
            </button>
          </li>

          <li className="text-2xl border-x-2 px-2  h-fit mr-3 w-fit">
            <MdNotifications />
          </li>
          <li className="flex items-center">
            <img
              className="w-10 h-10 object-cover rounded-full transition-all duration-500 mr-2"
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
