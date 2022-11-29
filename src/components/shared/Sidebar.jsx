import { MdDashboard } from "react-icons/md";
import { AiOutlineCoffee } from "react-icons/ai";

import { BsPeopleFill } from "react-icons/bs";

const Sidebar = () => {
  return (
    <aside className="bg-main w-fit inline-block  h-screen">
      <ul className="text-white ">
        <li className=" p-5 flex flex-col  ">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p className="">dashboard</p>
        </li>
        <li className=" p-5 flex flex-col   items-center">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p className="">workplace</p>
        </li>
        <li className=" p-5 flex flex-col   items-center">
          <AiOutlineCoffee className="text-white text-2xl mx-auto" />
          <p className="">holidays</p>
        </li>
        <li className=" p-5 flex flex-col   items-center  sidebar-active ">
          <BsPeopleFill className="text-white text-2xl mx-auto" />
          <p className="">employess</p>
        </li>
        <li className="  p-5 flex flex-col   items-center  ">
          <MdDashboard className="text-white text-2xl mx-auto" />
          <p className="w-14">inbound requests</p>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
