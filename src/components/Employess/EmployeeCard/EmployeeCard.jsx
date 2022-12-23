import userPhoto from '../../../assets/images/userPhoto.jpg'
import "./card.css";
import classNames from "classnames";
import ToolTip from "./ToolTip";
import { useSelector, useDispatch } from "react-redux";
import { setShowModalVal,handleEditOrAdd } from "../../../Redux/DataSlice";




// icons
import { MdModeEdit } from "react-icons/md";
import { AiOutlinePauseCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
import { ImPhoneHangUp } from "react-icons/im";
import CustomizedTooltips from './ToolTip';
import ArrowTooltips from '../ArrowTooltips';
import DeleteModal from '../DeleteModal';
import EmailTolltip from './EmailTolltip';
import PhoneToolTip from './PhoneToolTip';


import { useState } from 'react';
import NewEmploee from '../../NewEmploeeData/NewEmploee';

const EmployeeCard = ({ employee, removeEmp,delValidtionError ,delFlag,updateList,handleId}) => {

  const {  name, position, department, empCase, id } = employee;
  const dispatch = useDispatch();
  const [editModal,setEditModal] = useState(false)

  const modal = () => {
    dispatch(setShowModalVal(true))
    dispatch(handleEditOrAdd('edit'))
    handleId(id)
    
  }


 
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
      
          {/* <EditEmployee/> */}
          <MdModeEdit className="mr-4 text-xs muted hover:cursor-pointer" onClick={modal}  />

          <AiOutlinePauseCircle className="mr-4 text-xs muted hover:cursor-pointer" />
          {/* <AiFillDelete
            onClick={() => removeEmp(id)}
            className="text-xs muted hover:cursor-pointer"
          /> */}
          <DeleteModal employee={employee} removeEmp={removeEmp} delValidtionError={delValidtionError} updateList={updateList}/>
        </div>
      </div>
      {/* card content */}
      <div className="card-content capitalize pl-2  lg:pr-0">
        <p className="text-xl card-name  ">{name}</p>
        {position && (<p className="mb-px  poistion-text">{position.name }</p>)}
        {department && (<p  className="mb-2.5 muted department-text">{department.name }</p>)}

        <div className="emp-data flex sm:items-center justify-between">
         
         
          <div className="content-icons flex justify-start ">
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
                 <EmailTolltip employee={employee} />
            </div>
            <div className="info-icon w-5 h-5 rounded-full bg-muted flex items-center justify-center mr-1.5">
            <PhoneToolTip employee={employee}/>
              {/* <ImPhoneHangUp className="icon-size hover:cursor-pointer" /> */}
            </div>
            <div className="info-icon  w-5 h-fit h-5 rounded-full bg-muted flex items-center bg-blue-100 justify-center">
              <CustomizedTooltips  employee={employee} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmployeeCard;
