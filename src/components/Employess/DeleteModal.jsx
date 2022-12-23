import React, { useState } from "react";
import { AiFillDelete } from "react-icons/ai";
import { toast } from 'react-toastify';


// modal imports
import { Modal } from "flowbite-react";
import { useMutation } from '@apollo/client';
import mutations from '../../mutations'


import { Spinner } from "flowbite-react";






const DeleteModal = ({employee,removeEmp,delValidtionError,delFlag,updateList}) => {
  const {   id } = employee;

  const [showModal, setShowModal] = useState(false);
  const [password,setPass] = useState('')
  const [errorMsg,setErrorMsg] = useState()
  const [passwordCase,setPassCase] = useState(true)
  const { removeUser } = mutations;
  const [removeFunc, { loading,errors:deleerror, onCompleted, data: del }] = useMutation(removeUser, {
    onCompleted() {
      toast.success('Deleted successfuly');

      updateList()   
      setPassCase(true)
      setShowModal(false); 
      // toast.success('Deleted successfuly');
    },
    onError(delError){     
      setErrorMsg(delError.graphQLErrors[0].extensions.reason)
        setPassCase(false)
        // toast.error('Deleted successfuly');
 }
  })
  const deleteEmployee = (id, password) => {
  
    removeFunc({
      variables: {
        id, password
      }
    }
    )


  };

  const onClick = () => {
    setShowModal(true);
  };
  const handleDel = (e)=>{


    e.preventDefault()
 
    deleteEmployee(id,password)
   
  }

  const handlePass = (e) =>{
   
    setPass(e.target.value)
console.log(password)

  }
  return (
    <React.Fragment>
      <div >
      <AiFillDelete
      onClick={onClick}
            className="text-xs muted hover:cursor-pointer"
          />
      </div>
      <Modal
        show={showModal}
        popup={true}
      
      >
        <Modal.Body >
          <p className="uppercase form-title main-color "> are you sure you want to delete ? </p>

          <form
           onSubmit={handleDel}
          >
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
       
       
      {/* btns */}
            <div className="justify-center sm:justify-end flex  gap-4  ">
            <button
                className="rounded text-white bg-danger  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium    btn  "
                onClick={() => {
                  setShowModal(false);
                  setPass('')
                }}
              >
                Cancel
              </button>
              <button
                type="submit"
                className=" rounded text-white bg-main  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium   btn "
              >
               {loading?<div className="text-center  flex justify-center items-center">
                  <Spinner aria-label="Center-aligned spinner example" />
                </div> : (
                  
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
