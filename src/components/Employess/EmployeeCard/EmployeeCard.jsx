import userPhoto from "../../../assets/images/userPhoto.jpg";
import "./card.css";

import { useDispatch } from "react-redux";
import {
  setShowModalVal,
  handleEditOrAdd,
  handleShowDel,
} from "../../../Redux/DataSlice";

// icons
import { MdModeEdit } from "react-icons/md";
import { AiFillDelete, AiOutlinePauseCircle } from "react-icons/ai";
// tool tips
import CustomizedTooltips from "./ToolTip";
import EmailTolltip from "./EmailTolltip";
import PhoneToolTip from "./PhoneToolTip";

const EmployeeCard = ({ employee, handleId }) => {
  const { name, position, department, id, face } = employee;
  // console.log(face?.path)

  const dispatch = useDispatch();

  const modal = () => {
    dispatch(setShowModalVal(true));
    dispatch(handleEditOrAdd("edit"));
    handleId(id);
  };

  const showDelModal = () => {
    dispatch(handleShowDel(true));
    handleId(id);
  };

  return (
    <section className="card relative bg-white mx-auto mb-4 sm-mb-0 flex w-fit py-3 px-2 sm:px-0 sm:pr-4 h-fit ">
      {/* card image */}
      <div className="card-img   sm:border-r">
        <img
          className="w-16 h-16 rounded-full mb-2 mx-auto"
          src={userPhoto}
          alt="userPhoto"
        />
        <div className="img-icons flex mx-auto w-fit">
          <MdModeEdit
            className="mr-4 text-xs muted hover:cursor-pointer"
            onClick={modal}
          />

          <AiOutlinePauseCircle className="mr-4 text-xs muted hover:cursor-pointer" />
          <AiFillDelete
            onClick={showDelModal}
            className="text-xs muted hover:cursor-pointer"
          />
        </div>
      </div>
      {/* c a r d          c o n t  n t */}
      <div className="card-content capitalize pl-2  lg:pr-0">
        <p className="text-xl card-name  ">{name}</p>
        {position && <p className="mb-px  poistion-text">{position.name}</p>}
        {department && (
          <p className="mb-2.5 muted department-text">{department.name}</p>
        )}

        <div className="emp-data flex sm:items-center justify-between">
          <div className="content-icons flex justify-start ">
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
              <EmailTolltip employee={employee} />
            </div>
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
              <PhoneToolTip employee={employee} />
            </div>
            <div className="info-icon  w-5 h-fit h-5 rounded-full bg-muted flex items-center bg-blue-100 justify-center">
              <CustomizedTooltips employee={employee} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCard;
