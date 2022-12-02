import React, { useState } from "react";
import "./NewEmploeeData.css";


// modal imports
import { Modal, Button } from "flowbite-react";

import { useForm } from "react-hook-form";

import {  useDispatch } from "react-redux";
import {getFormData} from '../../Redux/DataSlice'


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
   
        <Button onClick={onClick} className=' p-0'>+ Add new</Button>
      </div>
      <Modal
        show={showModal}
        popup={true}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <Modal.Body className="modal-width">
          <p className="uppercase form-title main-color ">new employee</p>

          <form
            onSubmit={handleSubmit((data) => {
    dispatch(getFormData(data))
              reset();
            })}
          >
            {/* ============================================ personal info data ====================================================================== */}
            <div className="info-title relative">
              <p className="font-bold main-color after-title  mb-8">
                Personal Info
              </p>
            </div>
            <div className="xl:flex justify-center">
              <div className="uppercase border  border-dashed image-container h-fit mb-3 xl:mb-0 w-fit">
                <p className="image-text">drag image here</p>
              </div>
              <div className="lg:grid lg:grid-cols-2 xl:w-4/5 ">
                <div className="personal-info-input">
                  <label
                    htmlFor="name"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "
                    required
                    {...register("name")}
                  />
                </div>

                <div className="personal-info-input">
                  <label
                    htmlFor="date"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Start Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    placeholder="20/03/2020"
                    required
                    {...register("date")}
                  />
                </div>
                <div className="personal-info-input">
                  <label
                    htmlFor="phone"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "
                    required
                    {...register("phone")}
                  />
                </div>
                <div className="personal-info-input">
                  <label
                    htmlFor="email"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    placeholder="Email"
                    required
                    {...register("email")}
                  />
                </div>
              </div>
            </div>
            {/* ============================================ office info data ====================================================================== */}
            <div className="info-title relative">
              <p className="font-bold main-color after-title  mb-8">
                Office Info
              </p>
            </div>
            {/* office */}
            <div className="xl:pr-14">
              <div className="mb-2 block">
                <label
                  htmlFor="office"
                  className="block h-fit text-sm font-medium text-gray-900 mb-1"
                >
                  Office
                </label>
              </div>
              <select
                id="office"
                className="   border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                {...register("office")}
              >
                <option value="">Name</option>
                <option value="Marketting">Marketting</option>
                <option value="Sales">Sales</option>
              </select>
            </div>
            <div className=" xl:grid xl:grid-cols-2 xl:gap-x-8 xl:pr-14">
              {/* department */}
              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="department"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Department
                  </label>
                </div>
                <select
                  id="department"
                  required
                  className="   mr-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("department")}
                >
                  <option value="">Select</option>

                  <option value="Marketting">Marketting</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              {/* Attendence Profile */}
              <div className="">
                <div className="mb-2 block">
                  <label
                    htmlFor="Attendence Profile"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Attendence Profile
                  </label>
                </div>
                <select
                  id="Attendence Profile"
                  className=" xl:input-select border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("Attendence-Profile")}
                >
                  <option value="">Select</option>

                  <option value="Marketting">Marketting</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              {/* Role */}
              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="Role"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Role
                  </label>
                </div>
                <select
                  id="Role"
                  className=" xl:input-select mr-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("Role")}
                >
                  <option value="">Select</option>

                  <option value="Marketting">Marketting</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              {/* Position */}
              <div className="">
                <div className="mb-2 block">
                  <label
                    htmlFor="Position"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Position
                  </label>
                </div>

                <select
                  id="Position"
                  required
                  className=" xl:input-select  border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("Position")}
                >
                  <option value="">Select</option>
                  <option value="Marketting">Marketting</option>
                  <option value="Sales">Sales</option>
                </select>
              </div>
              {/* Direct Manger */}
              <div>
                <div className="mb-2 block">
                  <label
                    htmlFor="Direct Manger"
                    className="block h-fit text-sm font-medium text-gray-900 mb-1"
                  >
                    Direct Manger
                  </label>
                </div>
                <select
                  id="Direct Manger"
                  className=" xl:input-select mr-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("Direct-Manger")}
                >
                  <option value="">Select</option>

                  <option value="Marketting">Marketting</option>
                  <option value="Sales">Sales</option>
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
                  className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                  
                />
              </div>
              <label
                htmlFor="home"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 text-sm font-bold"
              >
                Allow employee to work from home
              </label>
            </div>
            <div className="flex flex-row-reverse gap-4 border-t pt-2.5">
              <button
                type="submit"
                className=" text-white bg-main  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center "
              >
                Save
              </button>
              <button
                className=" text-white bg-danger  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-1.5 text-center "
                onClick={() => {
                  setShowModal(false);
                }}
              >
                Cancel
              </button>
            </div>
          </form>

        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default NewEmploee;
