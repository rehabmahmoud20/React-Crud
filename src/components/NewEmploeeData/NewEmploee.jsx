import React, { useState } from "react";
import "./NewEmploeeData.css";

import Previews from "./Previews";

// modal imports
import { Modal, Button } from "flowbite-react";

import { useForm } from "react-hook-form";

import { useDispatch } from "react-redux";
import { getFormData } from "../../Redux/DataSlice";

const NewEmploee = () => {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    setShowModal(true);
  };
  //   rect hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange" });
  return (
    <React.Fragment>
      <div className="flex flex-wrap gap-4">
        <Button onClick={onClick} className=" p-0">
          + Add new
        </Button>
      </div>
      <Modal
        show={showModal}
        popup={true}
        // onClose={() => {
        //   setShowModal(false);
        // }}
      >
        <Modal.Body className="modal-width">
          <p className="uppercase form-title main-color ">new employee</p>

          <form
            onSubmit={handleSubmit((data) => {
              dispatch(getFormData(data));
              setShowModal(false);
              reset();
            })}
          >
            {/* ============================================ personal info data ====================================================================== */}
            <div className="info-title relative">
              <p className="font-bold main-color after-title  mb-8">
                Personal Info
              </p>
            </div>
            <div className="xl:flex justify-center ">
              <div className="uppercase  border  border-dashed w-full sm:w-fit pb-8 pt-12 image-container h-fit mb-3 xl:mb-0 ">
                {/* image drag and drop */}
              <Previews />
              </div>
              <div className="xl:grid xl:grid-cols-2  xl:gap-x-6 personal-info">
                <div className="personal-info-input input-margin mb-3.5">
                  <label
                    htmlFor="name"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="  border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "
                    required
                    {...register("employeeName")}
                  />
                </div>

                <div className="personal-info-input mb-3.5">
                  <label
                    htmlFor="date"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className="muted border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 pl-6"
                    placeholder="20/03/2020"
                    required
                    {...register("date")}
                  />
                </div>
                <div className="personal-info-input input-margin mb-3.5 xl:mb-0">
                  <label
                    htmlFor="phone"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "
                    required
                    {...register("phone")}
                  />
                </div>
                <div className="personal-info-input mb-3.5 xl:mb-0">
                  <label
                    htmlFor="email"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                     Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    placeholder="Email"
                    required
                    {...register("email")}
                  />
                </div>
              </div>
            </div>
            {/* ============================================ office info data ====================================================================== */}
            <div className="info-title relative">
              <p className="font-bold main-color after-title  office-info-margin">
                Office Info
              </p>
            </div>
            {/* office */}
            <div >
              <div className=" block">
                <label
                  htmlFor="office"
                  className="block h-fit text-sm font-medium text-gray-900  label"
                >
                  Office
                </label>
              </div>
              <select
                id="office"
                className=" muted   border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                {...register("office")}
              >
                <option  value="">Name</option>
                <option value="Marketting">Marketting</option>
                <option value="Arabic Localizer">Arabic Localizer</option>
              </select>
            </div>
            <div className=" xl:grid xl:grid-cols-2 xl:gap-x-8 ">
              {/* department */}
              <div>
                <div className="block">
                  <label
                    htmlFor="department"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Department
                  </label>
                </div>
                <select
                  id="department"
                  required
                  className="muted  border border-gray-300 text-gray-900  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("department")}
                >
                  <option value="">Select</option>

                  <option value="Marketting">Marketting</option>
                  <option value="business">business</option>
                </select>
              
              </div>
              {/* Attendence Profile */}
              <div className="">
                <div className=" block">
                  <label
                    htmlFor="Attendence Profile"
                    className=" block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Attendence Profile
                  </label>
                </div>
                <select
                  id="Attendence Profile"
                  className="muted w-full border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("empCase")}
                >
                  <option value="">Select</option>

                  <option value="absent">absent</option>
                  <option value="present">present</option>
                  <option value="weekend">weekend</option>
                  <option value="on leave">on leave</option>
                </select>
              </div>
              {/* Role */}
              <div>
                <div className="block">
                  <label
                    htmlFor="Role"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Role
                  </label>
                </div>
                <select
                  id="Role"
                  className="muted w-full  border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block   py-1 px-6"
                  {...register("role")}
                >
                  <option value="">Select</option>

                  <option value="Employee">Employee</option>
                  <option value="manger">manger</option>
                </select>
              </div>
              {/* Position */}
              <div >
                <div className=" block ">
                  <label
                    htmlFor="Position"
                    className=" block h-fit text-sm font-medium text-gray-900 mb-1 label "
                  >
                    Position
                  </label>
                </div>

                <select
                  id="Position"
                  required
                  className="muted w-full  border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("position")}
                >
                  <option value="">Select</option>
                  <option value="Marketting empployee">Marketting empployee</option>
                  <option value="hr employee">hr employee</option>
                </select>
              </div>
              {/* Direct Manger */}
              <div>
                <div className=" block">
                  <label
                    htmlFor="Direct Manger"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1 label"
                  >
                    Direct Manger
                  </label>
                </div>
                <select
                  id="Direct Manger"
                  className="muted w-full  border border-gray-300 text-gray-900 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("manger")}
                >
                  <option value="">Select</option>

                  <option value="Ahmed Hasssan">Ahmed Hasssan</option>
                  <option value="Ali samir">Ali samir</option>
                </select>
              </div>
            </div>
            {/* ============================================ Work From Home ====================================================================== */}

            <div className="info-title relative">
              <p className="font-bold main-color after-title  mb-8">
                Work From Home
              </p>
            </div>

            <div className="flex items-start mb-6">
              <div className="flex items-center h-5">
                <input
                  id="home"
                  type="checkbox"
                  value=""
                  className="muted w-4 h-4 bg-gray-50 rounded border border-gray-300  focus:ring-0 focus:ring-cyan-100"
                />
              </div>
              <label
                htmlFor="home"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-sm font-bold text"
              >
                Allow employee to work from home
              </label>
            </div>
            <div className="justify-center sm:justify-end flex  gap-4 border-t pt-2.5">
            <button
                className="rounded text-white bg-danger  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium    btn  "
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" rounded text-white bg-main  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium   btn "
              >
                Save
              </button>
             
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default NewEmploee;
