import './sidebar.css'
// icons
import { MdDashboard } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="sidebar w-fit inline-block  h-screen ">
      <ul className="text-white ">
        <li className=" py-5 flex flex-col items-center side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto " />
          <p >dashboard</p>
        </li>
        <li className=" py-5 flex flex-col   items-center side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p >workplace</p>
        </li>
        <li className=" py-5 flex flex-col   items-center side-item  ease-in duration-300 border-l-4 border-transparent">
          <AiOutlineCoffee className="text-white text-2xl mx-auto" />
          <p >holidays</p>
        </li>
        <li className=" py-5 flex flex-col   items-center  sidebar-active border-l-4 relative">
          <BsPeopleFill className="text-white text-2xl mx-auto" />
          <div className="w-3.5 h-3.5 rounded-full bg-cyan-600 bg-danger aside-notfication-span  absolute  flex items-center text-white justify-center">
              <span>1</span>
            </div>
          <p >employess</p>
        </li>
        <li className="  py-5 flex flex-col   items-center  side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p className="w-14">inbound requests</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
