import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./NewEmploeeData.css";
import mutations from "../../mutations";

import Previews from "./Previews";
import { Spinner } from "flowbite-react";




// modal imports
import { Modal, Button } from "flowbite-react";

import { useForm } from "react-hook-form";

import { handleEditOrAdd, setShowModalVal } from "../../Redux/DataSlice";

import { ATTEND_PROFILE, GET_EMP,SINGLE_USER_QUERY } from '../../queries'

import { useLazyQuery, useMutation } from "@apollo/client";



const NewEmploee = (props) => {

  const flag = useSelector((state) => state.employeData.showModal);
  const editOrAdd = useSelector((state) => state.employeData.editOrAdd);
  // console.log(editOrAdd)

  const dispatch = useDispatch();
// MANGER
  const [manges, setmanges] = useState('')
  const [mange, setmanger] = useState('')
// COPPIED MANGER
  const [coppiedMangers, setCoppied] = useState([])
  const [selectedVal ,setSelected] = useState(false)
  // validation
  const [valiatinFlag, setValidatinFlag] = useState(true)
  const [email, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [nameError, setNameError] = useState('')
  const [defaultVals,setDefaultVals] = useState({
    name:'',
    phone:'',
    position_id:"",
    starts_at:"",
    department_id:"",
    email:"",
    att_profile_id:"",
    office_id:"",
    phone:"", 
    role:"",
    copied_managers:[],
    manager_id:''
  })

  // GET SINGLE EMP DATA
  const [getSingleUser,{data:singleuserData,loading:singleUseLoad}] =useLazyQuery(SINGLE_USER_QUERY,{
    variables: {
      id:props.id
    }
  })
  useEffect((()=>{
      console.log(props.id)
      getSingleUser()
  }),[editOrAdd === 'edit'])
  useEffect((()=>{
    if ( singleUseLoad === false && singleuserData ) {
     console.log(singleuserData.user)
    
  
    //  setDefaultVals((prev)=>{
    // return  {...prev,name:singleuserData.user.name}
    //  })
     reset({...defaultVals,name:singleuserData.user.name,email:singleuserData.user.email,phone:singleuserData.user.phone,
      starts_at:singleuserData.user.starts_at,
      office_id:singleuserData.user.office.id,
      department_id:singleuserData.user.department.id,
      att_profile_id:singleuserData.user.attendance_profile.id,
      position_id:singleuserData.user.position.id,
      manager_id:singleuserData.user.manager.id,
      copied_managers:['19'],
    })
     console.log(defaultVals)
     console.log(singleuserData.user)
    }
  }),[singleUseLoad,singleuserData])
  // singleuserData.user.copied_managers[1].id
// ADD EMP MUTATION
  const [getOpts, { data: attendProfile, loading }] = useLazyQuery(ATTEND_PROFILE)

  const { addUser,editUser } = mutations;
  const [addUserMutationFun, { loading: addLoad, onCompleted, error: dderror }] = useMutation(addUser, {
    refetchQueries: [
      {
        query: GET_EMP,
        variables: {
          currentPage: props.page
        }
      },
    ],
    onCompleted: () => {
      setValidatinFlag(true)
      props.updateList()
      dispatch(setShowModalVal(false))
      reset()
    },
    onError(delError) {
      setValidatinFlag(false)
      setNameError(delError.graphQLErrors[0].extensions.validation["input.user_input.name"][0])
      setEmailError(delError.graphQLErrors[0].extensions.validation["input.user_input.email"][0])
      setPhoneError(delError.graphQLErrors[0].extensions.validation["input.user_input.phone"][0])

    }
  })

  const [editUserMutationFun,{loading:editLoad}] = useMutation(editUser,{
    onCompleted: () => {
      // setValidatinFlag(true)
      props.updateList()
      dispatch(setShowModalVal(false))
      reset()
    }
  })
  useEffect(() => {
    if (flag) {
      getOpts()
    }
  }, [flag])
  useEffect(() => {
    if (loading === false && attendProfile) {
      setmanges(attendProfile?.company_users?.data)
      setCoppied(attendProfile?.company_users?.data)
    }
  }, [loading, attendProfile])

  ////////////////////////////////////////
// handle manger
  const handleselect = (event) => {
    setmanger(event.target.value)
    console.log(event.target.value)
    let newArr = manges.filter(e => {
      return e.id !== event.target.value
    })
  
    setCoppied(newArr)

  }
  // handleCoppied
  const handleCoppied = (e) => {
    let options = e.target.selectedOptions;
    let values = [];
    for(let i = 0; i < options.length;i++){
        values.push(options[i].value)
    }
 
    let newArr = manges.filter(e => {
      return !values.includes(e.id)
    })
    setmanges(newArr)

  }
  // edit user
const editUserFunc = (data) =>{
  const { position_id, starts_at, department_id, email, att_profile_id, name, office_id, phone, role,manager_id,copied_managers } = data
  editUserMutationFun({
    variables:{
      input :{
        user_input: {
          id:props.id,
          name: name,
          phone: phone,
          email: email,
          starts_at: starts_at,
          office_id: office_id,
          department_id: department_id,
          role_id: role,
          att_profile_id: att_profile_id,
          position_id: position_id,
          manager_id: manager_id,
          copied_managers: copied_managers,
          can_work_home: 1,
          company_id: "1",
          has_credentials: 1,
          max_homeDays_per_week: 1,
          can_ex_days: 0,
          home_days: [],
          flexible_home: 0,
        }
      }
    }
  })
}



  // add user
  const addPerson = (data) => {
    const { position_id, starts_at, department_id, email, att_profile_id, name, office_id, phone, role,manager_id,copied_managers } = data
    addUserMutationFun({
      variables: {
        input: {
          user_input: {
            name: name,
            phone: phone,
            email: email,
            starts_at: starts_at,
            office_id: office_id,
            department_id: department_id,
            role_id: role,
            att_profile_id: att_profile_id,
            position_id: position_id,
            manager_id: manager_id,
            copied_managers: copied_managers,
            can_work_home: 1,
            company_id: "1",
            has_credentials: 1,
            max_homeDays_per_week: 1,
            can_ex_days: 0,
            home_days: [],
            flexible_home: 0,
          },
          user_salary_config_input: {
            salary_config: {
              start_at: "22-10-2022"
            }
          }
        }
      }
    })
  }
 
  //   rect hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ mode: "onChange",
defaultValues:{
...defaultVals
}
});
  return (
    <React.Fragment>
     
      <Modal
        show={flag}
        popup={true}
     
      >
        {
          loading ? (<div className="text-center main-height flex justify-center items-center  w-full">
            <Spinner aria-label="Center-aligned spinner example" />
          </div>) : (<Modal.Body className="modal-width">
            <p className="uppercase form-title main-color ">new employee</p>

            <form
              onSubmit={handleSubmit((data) => {
                if (editOrAdd === 'add') {
                  addPerson(data)
                } else {
                  editUserFunc(data)
                  console.log('edit')
                }


              })}
            >
              {/* ============================================ personal info data ====================================================================== */}
              <div className="info-title relative">
                <p className="font-bold main-color after-title  mb-7">
                  Personal Info
                </p>
              </div>
              <div className="lg:flex personal-info-data">

                <div
                  className="uppercase  border  border-dashed w-full  pb-8 pt-12 image-container  mb-3 xl:mb-0"
                >
                  {/* image drag and drop */}
                  <Previews />
                </div>
                <div className="lg:grid lg:grid-cols-2  lg:gap-x-6 personal-info">
                  <div className="personal-info-input input-margin mb-3.5">
                    <label
                      htmlFor="name"
                      className={"block h-fit text-sm font-medium  mb-1 label " + (nameError && 'text-red-600')}

                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                     
                      className="  border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "

                      {...register('name',
                        
                      )}

                    />
                    {!valiatinFlag && (
                      <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                        {nameError}
                      </p>
                    )}
                  </div>


                  <div className="personal-info-input mb-3.5">
                    <label
                      htmlFor="starts_at"
                      className="block h-fit text-sm font-medium  mb-1 label "
                    >
                      Start Date
                    </label>
                    <input
                      type="date"
                      id="starts_at"

                      className="muted border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 pl-6"
                      placeholder="20/03/2020"
                      {...register("starts_at",
                        //  {
                        //   required: 'This is required',
                        // }
                      )
                      }
                    />

                  </div>


                  <div className="personal-info-input input-margin mb-3.5 xl:mb-0">
                    <label
                      htmlFor="phone"
                      className={"block h-fit text-sm font-medium  mb-1 label " + (phoneError && 'text-red-600')}
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className=" border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "

                      {...register("phone")}
                    />
                    {!valiatinFlag && (
                      <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                        {phoneError}
                      </p>
                    )}
                  </div>

                  <div className="personal-info-input mb-3.5 xl:mb-0">
                    <label
                      htmlFor="email"
                      className={"block h-fit text-sm font-medium  mb-1 label " + (email && 'text-red-600')}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className=" border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                      placeholder="Email"

                      {...register("email",
                        // {
                        //   required: 'This is required',
                        // }
                      )
                      }
                    />
                    {!valiatinFlag && (
                      <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                        {email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* ============================================ office info data ====================================================================== */}
              <div className="info-title relative">
                <p className="font-bold main-color after-title  mb-3.5 ">
                  Office Info
                </p>
              </div>
              {/* office */}
              <div className="mb-2.5">
                <div className=" block">
                  <label
                    htmlFor="office"
                    className="block h-fit text-sm font-medium   label"
                  >
                    Office
                  </label>
                </div>
                <select
                  id="office"
                  className=" muted   border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("office_id")}
                >
                  <option value="">Name</option>
                  <option value={attendProfile?.company_offices?.data[0]?.id} >{attendProfile?.company_offices?.data[0]?.name}</option>
                </select>
              </div>
              <div className=" xl:grid xl:grid-cols-2 xl:gap-x-8 ">
                {/* department */}
                <div className="mb-2.5">
                  <div className="block">
                    <label
                      htmlFor="department"
                      className={"block h-fit text-sm font-medium  mb-1 label " + (errors.name?.type === 'required' && 'text-red-600')}
                    >
                      Department
                    </label>
                  </div>
                  <select
                    id="department"

                    className="muted  border border-gray-300 text-red-600  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    {...register('department_id',
                 
                    )
                    }
                  >
                    <option value="">Select</option>

                    {attendProfile?.company_departments?.data.map((e) => (
                      <option value={e.id} key={e.id}>{e.name}</option>
                    ))}
                  </select>

                </div>
                {/* Attendence Profile */}
                <div className="mb-2.5">
                  <div className=" block">
                    <label
                      htmlFor="Attendence Profile"
                      className=" block h-fit text-sm font-medium  mb-1 label"
                    >
                      Attendence Profile
                    </label>
                  </div>
                  <select
                    id="Attendence Profile"
                    className="muted w-full border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    {...register("att_profile_id")}
                  >
                    <option value="">Select</option>
                    {attendProfile?.attendance_profiles?.data.map((e) => (
                      <option value={e.id} key={e.id}>{e.name}</option>
                    ))}
                  </select>
                </div>
                {/* Role */}
                <div className="mb-2.5">
                  <div className="block">
                    <label
                      htmlFor="Role"
                      className="block h-fit text-sm font-medium  mb-1 label"
                    >
                      Role
                    </label>
                  </div>
                  <select
                    id="Role"
                    className="muted w-full  border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block   py-1 px-6"
                    {...register("role")}
                  >
                    <option value="">Select</option>

                    {attendProfile?.profile?.company?.currentSubscription?.plan?.roles.map((e) => (
                      <option value={e.id} key={e.id}>{e.name}</option>
                    ))}

                  </select>
                </div>
                {/* Position */}
                <div className="mb-2.5">
                  <div className=" block ">
                    <label
                      htmlFor="Position"
                      className={"block h-fit text-sm font-medium  mb-1 label " + (errors.name?.type === 'required' && 'text-red-600')}
                    >
                      Position
                    </label>
                  </div>

                  <select
                    id="Position"

                    className="muted w-full  border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    {...register('position_id'
                      // , {
                      //   required: 'This is required',
                      // }
                    )
                    }
                  >
                    <option value="">Select</option>
                    {attendProfile?.company_positions?.data.map((e) => (
                      <option value={e.id} key={e.id}>{e.name}</option>
                    ))}

                  </select>
                  {/* {errors.Position?.type === 'required' && (
                  <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                    {errors.Position.message}
                  </p>
                )} */}
                </div>
                {/* Direct Manger */}
                <div className="mb-2.5">
                  <div className=" block">
                    <label
                      htmlFor="Direct Manger"
                      className="block h-fit text-sm font-medium  mb-1 label"
                    >
                      Direct Manger
                    </label>
                  </div>
                  <select
                    id="Direct Manger"
                    className="muted w-full  border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("manager_id")}
                  onChange={handleselect}

                  >
                    <option value="">Select</option>

                    {manges.length > 0 && manges.map((e) => (
                      <option value={e.id} key={e.id}>{e.name}</option>
                    ))}
                  </select>
                </div>
                {/* coppied Manger */}
                <div className="mb-2.5">
                  <div className=" block">
                    <label
                      htmlFor="Direct Manger"
                      className="block h-fit text-sm font-medium  mb-1 label"
                    >
                      Coppied Manger
                    </label>
                  </div>
                  <select
                    
                    multiple
                    id="Direct Manger"
                    className="muted w-full  border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                  {...register("copied_managers")}
                  onChange={handleCoppied}

                  >
                    <option value="">Select</option>

                    {coppiedMangers.length > 0 && coppiedMangers.map((e) => (
                      <option  value={e.id} key={e.id}>{e.name}</option>
                    ))}
                  </select>
                </div>
              </div>
              {/* ============================================ Work From Home ====================================================================== */}

              <div className="info-title relative">
                <p className="font-bold main-color after-title  mb-6">
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
                  className="ml-2 text-sm font-medium  dark:text-gray-300 text-sm font-bold text"
                >
                  Allow employee to work from home
                </label>
              </div>
              <div className="justify-center sm:justify-end flex  gap-4 border-t pt-2.5">
                <button
                  className="rounded text-white bg-danger  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium    btn  "
                  onClick={() => {
                    dispatch(setShowModalVal(false));
                    setEmailError('')
                    setPhoneError('')
                    setNameError('')
                    dispatch(handleEditOrAdd(''))
                    reset({...defaultVals})
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" rounded text-white bg-main  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium   btn "
                >
                  {
                    addLoad|| editLoad ? <div className="text-center  flex justify-center items-center">
                      <Spinner aria-label="Center-aligned spinner example" />
                    </div> : (

                      <p>save</p>
                    )
                  }
                  {/* Save */}
                </button>

              </div>
            </form>
          </Modal.Body>)
        }

      </Modal>
    </React.Fragment>
  );
};

export default NewEmploee;
