import React, { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { handleShowDel } from "../../Redux/DataSlice";

import { useMutation } from "@apollo/client";
import mutations from "../../mutations";

// libraries components
import { Modal } from "flowbite-react";
import { Spinner } from "flowbite-react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const DeleteModal = ({ updateList, id }) => {
  const delFlag = useSelector((state) => state.employeData.showDelModal);
  const dispatch = useDispatch();

  const [password, setPass] = useState("");
  const [errorMsg, setErrorMsg] = useState();
  const [passwordCase, setPassCase] = useState(true);
  const { removeUser } = mutations;
  const [removeFunc, { loading }] = useMutation(removeUser, {
    onCompleted(data) {
      if (
        data.delete_user?.message ===
        "This user is a direct manager for another employee"
      ) {
        setPassCase(false);
        setErrorMsg(data.delete_user?.message);
      } else {
        updateList();
        setPassCase(true);
        setErrorMsg("");
        dispatch(handleShowDel(false));
        setPass("");
        //s w e e t   a l e r t
      
        Swal.fire({
          title: `Employee deleted succesfully`,
          timer: 2000,
          icon: "success",
          timerProgressBar: false,
          showConfirmButton: false,
        });
      }
    },
    onError(delError) {
      setErrorMsg(delError.graphQLErrors[0].extensions.reason);
      setPassCase(false);
    },
  });

  const deleteEmployee = (id, password) => {
    removeFunc({
      variables: {
        id,
        password,
      },
    });
  };

  const handleDel = (e) => {
    e.preventDefault();
    deleteEmployee(id, password);
  };

  const handlePass = (e) => {
    setPass(e.target.value);
  };
  return (
    <React.Fragment>
      <Modal show={delFlag} popup={true}>
        <Modal.Body>
          <p className="uppercase form-title main-color ">
            {" "}
            are you sure you want to delete ?{" "}
          </p>

          <form onSubmit={handleDel}>
            <input
              onChange={handlePass}
              value={password}
              type="password"
              id="default-search"
              className="w-1/2 mx-auto block py-1 border border-gray-300 text-gray-900 text-sm rounded-lg w-full focus:ring-blue-500 focus:border-blue-500 block   px-10 "
              placeholder="please enter your password"
            />
            {!passwordCase && (
              <p className="mt-0.5 text-sm text-red-600 dark:text-red-500  text-center">
                {errorMsg}
              </p>
            )}

            {/*  b t n s  */}
            <div className="justify-center sm:justify-end flex  gap-4  ">
              <button
                className="rounded text-white bg-danger  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium    btn  "
                onClick={() => {
                  dispatch(handleShowDel(false));
                  setPass("");
                  setErrorMsg("");
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" rounded text-white bg-main  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium   btn "
              >
                {loading ? (
                  <div className="text-center  flex justify-center items-center">
                    <Spinner aria-label="Center-aligned spinner example" />
                  </div>
                ) : (
                  <p>Delete</p>
                )}
              </button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default DeleteModal;
