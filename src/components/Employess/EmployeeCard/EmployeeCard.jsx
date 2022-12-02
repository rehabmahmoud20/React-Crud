import "./card.css";
import classNames from "classnames";
import ToolTip from "./ToolTip";

// icons
import { MdModeEdit } from "react-icons/md";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { BiMessageAlt } from "react-icons/bi";
import { AiOutlinePhone } from "react-icons/ai";

const EmployeeCard = ({ employee, removeEmp }) => {
  const { image, employeeName, position, department, empCase, id } = employee;

  const className = classNames({
    "absent text-center w-14 mb-2 lg:mb-0": empCase === "absent",
    "present text-center w-14 mb-2 lg:mb-0": empCase === "present",
    "weekend text-center w-14 mb-2 lg:mb-0": empCase === "weekend",
    "on-leave text-center w-14 mb-2 lg:mb-0": empCase === "on leave",
  });
  return (
    <div className="card mx-auto mb-4 lg-mb-0 lg:flex w-fit py-3 px-1 lg:px-4 h-fit ">
      {/* card image */}
      <div className="card-img  lg:border-r">
        <img
          className="w-16 h-16 rounded-full mb-4 mx-auto"
          src={image}
          alt=""
        />
        <div className="img-icons flex mx-auto w-fit">
          <MdModeEdit className="mr-4 text-xs muted hover:cursor-pointer" />
          <AiOutlinePauseCircle className="mr-4 text-xs muted hover:cursor-pointer" />
          <AiFillDelete
            onClick={() => removeEmp(id)}
            className="text-xs muted hover:cursor-pointer"
          />
        </div>
      </div>
      {/* card content */}
      <div className="card-content capitalize pr-5 lg:pr-0">
        <p className="text-xl card-name ">{employeeName}</p>
        <p className="mb-px">{position}</p>
        <p className="mb-2.5 muted">{department}</p>
        <div className="emp-data lg:flex lg:space-x-16">
          <p className={className}>{empCase}</p>
          <div className="content-icons flex justify-start ">
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
              <BiMessageAlt className=" text-xs hover:cursor-pointer" />
            </div>
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
              <AiOutlinePhone className="text-xs hover:cursor-pointer" />
            </div>
            <div className="info-icon  w-5 h-fit h-5 rounded-full bg-muted flex items-center bg-blue-100 justify-center">
              <ToolTip employee={employee} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
