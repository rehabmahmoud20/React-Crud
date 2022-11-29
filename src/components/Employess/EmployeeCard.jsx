import "./card.css";
import classNames from "classnames";
import { MdModeEdit } from "react-icons/md";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";

// BsThreeDotsVertical

const EmployeeCard = ({ employee }) => {
  const { image, employeeName, position, department, empCase } = employee;
  console.log(employee);
  const className = classNames({
    "absent text-center w-14": empCase === "absent",
    "present text-center w-14": empCase === "present",
    "weekend text-center w-14": empCase === "weekend",
    "on-leave text-center w-14": empCase === "on leave",
  });
  return (
    <div className="card flex w-fit py-3 px-4 h-fit">
      <div className="card-img  border-r">
        <img className="w-16 h-16 rounded-full mb-2.5 mx-auto" src={image} alt="" />
        <div className="img-icons flex mx-auto w-fit">
          <MdModeEdit className="mr-4 text-xs muted hover:cursor-pointer" />
          <AiOutlinePauseCircle className="mr-4 text-xs muted hover:cursor-pointer" />
          <AiFillDelete className="text-xs muted hover:cursor-pointer" />
        </div>
      </div>
      <div className="card-content capitalize">
        <p className="text-xl card-name">{employeeName}</p>
        <p className="mb-px">{position}</p>
        <p className="mb-2.5 muted">{department}</p>
        <div className="emp-data flex space-x-16">
        <p className={className}>{empCase}</p>
        <div className="content-icons flex">
          <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
            <BiMessageAlt className=" text-xs hover:cursor-pointer" />
          </div>
          <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
            <AiOutlinePhone className="text-xs hover:cursor-pointer" />
          </div>
          <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center">
            <BiDotsVerticalRounded className="text-xs hover:cursor-pointer" />
          </div>
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default EmployeeCard;
