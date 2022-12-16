import './sidebar.css'
// icons
// FaHands
import { MdComputer } from "react-icons/md";
import { FaHands } from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { FaCoffee } from "react-icons/fa";
import { BsPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="sidebar w-fit inline-block  h-screen ">
      <ul className="text-white ">
        <li className=" py-5 flex flex-col items-center side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto " />
          <p className='text-xs capitalize'>dashboard</p>
        </li>
        <li className=" py-5 flex flex-col   items-center side-item ease-in duration-300 border-l-4 border-transparent">
          <MdComputer className="text-white text-2xl mx-auto" />
          <p className='text-xs capitalize'>workplace</p>
        </li>
        <li className=" py-5 flex flex-col   items-center side-item  ease-in duration-300 border-l-4 border-transparent">
          <FaCoffee className="text-white text-2xl mx-auto" />
          <p className='text-xs capitalize'>holidays</p>
        </li>
        <li className=" py-5 flex flex-col   items-center  sidebar-active border-l-4 relative">
          <BsPeopleFill className="text-white text-2xl mx-auto" />
          <div className="w-3.5 h-3.5 rounded-full  bg-danger aside-notfication-span  absolute  flex items-center text-white justify-center">
              <span>1</span>
            </div>
          <p className='text-xs'>employess</p>
        </li>
        <li className="  py-5 flex flex-col   items-center  side-item ease-in duration-300 border-l-4 border-transparent">
          <FaHands className="text-white text-2xl mx-auto" />
          <p className="inbound-width capitalize mx-auto text-xs text-center">inbound requests</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
