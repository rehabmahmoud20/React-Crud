import './sidebar.css'
// icons
import { MdDashboard } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="bg-main w-fit inline-block  h-screen ">
      <ul className="text-white ">
        <li className=" p-5 flex flex-col side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto " />
          <p >dashboard</p>
        </li>
        <li className=" p-5 flex flex-col   items-center side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p >workplace</p>
        </li>
        <li className=" p-5 flex flex-col   items-center side-item  ease-in duration-300 border-l-4 border-transparent">
          <AiOutlineCoffee className="text-white text-2xl mx-auto" />
          <p >holidays</p>
        </li>
        <li className=" p-5 flex flex-col   items-center  sidebar-active border-l-4 border-transparent">
          <BsPeopleFill className="text-white text-2xl mx-auto" />
          <p >employess</p>
        </li>
        <li className="  p-5 flex flex-col   items-center  side-item ease-in duration-300 border-l-4 border-transparent">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p className="w-14">inbound requests</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
