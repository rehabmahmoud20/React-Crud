import userPhoto from '../../../assets/images/userPhoto.jpg'
import "./card.css";
import classNames from "classnames";
import ToolTip from "./ToolTip";

// icons
import { MdModeEdit } from "react-icons/md";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import CustomizedTooltips from './ToolTip';
import ArrowTooltips from '../ArrowTooltips';

const EmployeeCard = ({ employee, removeEmp }) => {
  const {  employeeName, position, department, empCase, id } = employee;

  const className = classNames({
    "absent flex items-center justify-center  mb-2 sm:mb-0": empCase === "absent",
    "present flex items-center justify-center  mb-2 sm:mb-0 ": empCase === "present",
    "weekend flex items-center justify-center  mb-2 sm:mb-0 ": empCase === "weekend" ,
    "on-leave flex items-center justify-center mb-2 sm:mb-0 ": empCase === "on leave",
  });
  return (
    <section className="card bg-white mx-auto mb-4 sm-mb-0 flex w-fit py-3 px-2 sm:px-0 sm:pr-4 h-fit ">
      {/* card image */}
      <div className="card-img   sm:border-r">
        <img
          className="w-16 h-16 rounded-full mb-2 mx-auto"
          src={userPhoto}
          alt="userPhoto"
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
      <div className="card-content capitalize pl-2 sm:pr-5 lg:pr-0">
        <p className="text-xl card-name  ">{employeeName}</p>
        <p className="mb-px poistion-text">{position}</p>
        <p className="mb-2.5 muted department-text">{department}</p>
        <div className="emp-data flex sm:items-center justify-between">
          <p className={className}>{empCase}</p>
         
         
          <div className="content-icons flex justify-start ">
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
              <FaEnvelope className=" text-xs hover:cursor-pointer" />
            </div>
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
              <ImPhoneHangUp className="text-xs hover:cursor-pointer" />
            </div>
            <div className="info-icon  w-5 h-fit h-5 rounded-full bg-muted flex items-center bg-blue-100 justify-center">
              {/* <ToolTip employee={employee} /> */}
              {/* <CustomizedTooltips key="employeeName" employee={employee} /> */}
              {/* <ArrowTooltips employee={employee}/> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCard;
