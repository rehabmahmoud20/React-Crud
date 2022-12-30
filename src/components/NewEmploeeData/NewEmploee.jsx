import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";


import "./NewEmploeeData.css";
import mutations from "../../mutations";
import Previews from "./Previews";
import { Spinner } from "flowbite-react";

// modal imports
import { Modal } from "flowbite-react";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import { useForm } from "react-hook-form";

import { handleEditOrAdd, setShowModalVal } from "../../Redux/DataSlice";

import { FORM_AND_SINGLEEMP_DATA} from "../../queries";

import { useLazyQuery, useMutation } from "@apollo/client";

const NewEmploee = (props) => {
  const flag = useSelector((state) => state.employeData.showModal);
  const editOrAdd = useSelector((state) => state.employeData.editOrAdd);
  // requet to set image
  const [imgRequest,setImgReq] = useState(false)
  const handleImgReq = (val) =>{
    setImgReq(val)
  }

  const dispatch = useDispatch();
  const [editedImage, setEditedImage] = useState(null);

  // MANGER
  const [manges, setmanges] = useState("");
  // COPPIED MANGER
  const [coppiedMangers, setCoppied] = useState([]);
  // validation
  const [valiatinFlag, setValidatinFlag] = useState(true);
  const [validationErrs, setValidationErrors] = useState({
    email: "",
    phoneError: "",
    nameError: "",
  });
  const [imageFile, setImageFile] = useState(null);

  const handleImage = (file) => {
    setImageFile(file);
  };

  const [defaultVals] = useState({
    name: "",
    phone: "",
    position_id: "",
    starts_at: "",
    department_id: "",
    email: "",
    att_profile_id: "",
    office_id: "",
    phone: "",
    role: "",
    copied_managers: [],
    manager_id: "",
    work_home: false,
  });

  // ADD EMP querry
  const [getOpts, { data: formAndEmpData, loading }] = useLazyQuery(
    FORM_AND_SINGLEEMP_DATA,
    editOrAdd === "add"
      ? {
          variables: {
            isEmp: false,
            id: props.id,
          },
          fetchPolicy: "no-cache",
        }
      : {
          variables: {
            isEmp: true,
            id: props.id,
          },
          fetchPolicy: "no-cache",
        }
  );
  useEffect(() => {
    if (flag) {
      getOpts();
    }
  }, [flag]);

  useEffect(() => {
    if (flag) {
      if (formAndEmpData) {
        setmanges(formAndEmpData?.company_users?.data);
        setCoppied(formAndEmpData?.company_users?.data);
        // handling coppied mangers
        let filterdnewArr = formAndEmpData?.company_users?.data?.filter(
          (e) => e?.id !== formAndEmpData?.user?.manager?.id
        );

        setCoppied(filterdnewArr);
        // ===========================================================================================================================================================
        // coppied mangers ids  handling  mangers
        const coppiedIds = formAndEmpData?.user?.copied_managers.map(
          (e) => e.id
        );

        let newArr = formAndEmpData?.company_users?.data.filter((e) => {
          return !coppiedIds?.includes(e.id);
        });
        setmanges(newArr);
        // work from home
        let canWorkHome = false;
        if (formAndEmpData?.user?.can_work_home) {
          canWorkHome = true;
        } else {
          canWorkHome = false;
        }
        
        if (editOrAdd === "edit") {
          // handling edit image
          if(!formAndEmpData?.user?.face?.path){
            setEditedImage('');
          }else{
            const orginalPath = formAndEmpData?.user?.face?.path;
            const newPath = "http://mawared.pro" + orginalPath?.slice(28);
            setEditedImage(newPath);
          }

          reset({
            ...defaultVals,
            name: formAndEmpData?.user?.name,
            email: formAndEmpData?.user?.email,
            phone: formAndEmpData?.user?.phone,
            starts_at: formAndEmpData?.user?.starts_at,
            office_id: formAndEmpData?.user?.office?.id,
            department_id: formAndEmpData?.user?.department?.id,
            att_profile_id: formAndEmpData?.user.attendance_profile?.id,
            position_id: formAndEmpData?.user.position?.id,
            manager_id: formAndEmpData?.user.manager?.id,
            copied_managers: coppiedIds,
            work_home: canWorkHome,
          });
        }
      }
    }
  }, [formAndEmpData, flag]);
  // fun to handle oncomplete mutation 
  const onCopmMutFun =(val)=>{
    setValidatinFlag(true);
    setValidationErrors((prev) => {
      return {
        ...prev,
        phoneError: "",
        nameError: "",
        email: "",
      };
    });
    props.updateList();
    dispatch(setShowModalVal(false));
    reset({ ...defaultVals });
    //s w e e t   a l e r t
    
    Swal.fire({
      title: `Employee ${val} succesfully`,
      timer: 2000,
      icon: 'success',
      timerProgressBar: false,
      showConfirmButton:false,
 
    })
    
  }  //========================================================================== add user mutation ================================================================================
  const { addUser, editUser } = mutations;
  const [addUserMutationFun, { loading: addLoad }] =
    useMutation(addUser, {
      fetchPolicy: "no-cache",
      onCompleted: () => {
        onCopmMutFun('Added')
      },
      onError(delError) {
        setValidatinFlag(false);
        setValidationErrors((prev) => {
          return {
            ...prev,
            nameError:
              delError?.graphQLErrors[0]?.extensions?.validation?.[
                "input.user_input.name"
              ]?.[0],
            phoneError:
              delError?.graphQLErrors[0]?.extensions?.validation?.[
                "input.user_input.phone"
              ]?.[0],
            email:
              delError?.graphQLErrors[0]?.extensions?.validation?.[
                "input.user_input.email"
              ]?.[0],
          };
        });
      },
    });
  //========================================================================== edit user mutation ================================================================================

  const [editUserMutationFun, { loading: editLoad }] = useMutation(editUser, {
    fetchPolicy: "no-cache",
    onCompleted: () => {
      onCopmMutFun('Edited')
      setImgReq(false)
    },
    onError(delError) {
      setValidatinFlag(false);
      setValidationErrors((prev) => {
        return {
          ...prev,
          nameError:
            delError?.graphQLErrors[0]?.extensions?.validation?.[
              "input.user_input.name"
            ]?.[0],
          phoneError:
            delError?.graphQLErrors[0]?.extensions?.validation?.[
              "input.user_input.phone"
            ]?.[0],
          email:
            delError?.graphQLErrors[0]?.extensions?.validation?.[
              "input.user_input.email"
            ]?.[0],
        };
      });
    },
  });

  ////////////////////////////////////////
  const handleEditedImg = (val) => {
    setEditedImage(val);
    setImageFile(val);
  };
  // handle manger
  const handleMangerArr = (event) => {
    let newArr = formAndEmpData?.company_users?.data.filter((e) => {
      return e.id !== event.target.value;
    });

    setCoppied(newArr);
  };
  // handle Coppied mangers 
  const handleCoppied = (e) => {
    let options = e.target.selectedOptions;

    let values = [];
    for (let i = 0; i < options.length; i++) {
      values.push(options[i].value);
    }

    let newArr = formAndEmpData?.company_users?.data.filter((e) => {
      return !values.includes(e.id);
    });

    setmanges(newArr);
  };
  //========================================================================== handle edit user mutation fun ================================================================================

  const editUserFunc = (data) => {
    const {
      position_id,
      starts_at,
      department_id,
      email,
      att_profile_id,
      name,
      office_id,
      phone,
      role,
      manager_id,
      copied_managers,
      work_home,
    } = data;
    // handle work from home
    let homeWork;
    if (work_home) {
      homeWork = 1;
    } else {
      homeWork = 0;
    }
    editUserMutationFun({
      variables: {
        input: {
          user_input: {
            id: props.id,
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
            can_work_home: homeWork,
            company_id: "1",
            has_credentials: 1,
            max_homeDays_per_week: 1,
            can_ex_days: 0,
            home_days: [],
            flexible_home: 0,
            ...(imgRequest && {
              user_image: imageFile,
            }),

            
          },
        },
      },
    });
  };

  //========================================================================== handle add user mutation fun ================================================================================
  const addPerson = (data) => {
    const {
      position_id,
      starts_at,
      department_id,
      email,
      att_profile_id,
      name,
      office_id,
      phone,
      role,
      manager_id,
      copied_managers,
      work_home,
    } = data;

    // handle work from home
    let homeWork;
    if (work_home) {
      homeWork = 1;
    } else {
      homeWork = 0;
    }

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
            can_work_home: homeWork,
            company_id: "1",
            has_credentials: 1,
            max_homeDays_per_week: 1,
            can_ex_days: 0,
            home_days: [],
            flexible_home: 0,
            user_image: imageFile,
          },
          user_salary_config_input: {
            salary_config: {
              start_at: starts_at,
            },
          },
        },
      },
    });
  };
  //   rect hook form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      ...defaultVals,
    },
  });
  return (
    <React.Fragment>
      <Modal show={flag} popup={true}>
        {loading ? (
          <div className="text-center main-height flex justify-center items-center  w-full">
            <Spinner aria-label="Center-aligned spinner example" />
          </div>
        ) : (
          <Modal.Body className="modal-width">
            <p className="uppercase form-title main-color "> {editOrAdd === "add" ? (<p>new employee</p>): (<p>edit employee</p>)}</p>

            <form
              onSubmit={handleSubmit((data) => {
                if (editOrAdd === "add") {
                  addPerson(data);
                } else {
                  editUserFunc(data);
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
                <div className="uppercase  border  border-dashed w-full   image-container  mb-3 xl:mb-0 relative">
                  {/* i m a g e   d r a g   a n d    d r o p */}
                  <Previews
                    handleImage={handleImage}
                    editedImage={editedImage}
                    handleEditedImg={handleEditedImg}
                    handleImgReq={handleImgReq}
                  />
                </div>
             
                <div className="lg:grid lg:grid-cols-2  lg:gap-x-6 personal-info">
                  {/*  n a m e */}
                  <div className="personal-info-input input-margin mb-3.5">
                    <label
                      htmlFor="name"
                      className={
                        "block h-fit text-sm font-medium  mb-1 label " +
                        (validationErrs?.nameError && "text-red-600")
                      }
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      className="  border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "
                      {...register(
                        "name"
                        
                      )}
                    />
                    {!valiatinFlag && (
                      <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                        {validationErrs?.nameError}
                      </p>
                    )}
                  </div>
                  {/* d a t e */}
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
                      {...register("starts_at")}
                    />
                  </div>
                 {/* p h o n e */}
                  <div className="personal-info-input input-margin mb-3.5 xl:mb-0">
                    <label
                      htmlFor="phone"
                      className={
                        "block h-fit text-sm font-medium  mb-1 label " +
                        (validationErrs?.phoneError && "text-red-600")
                      }
                    >
                      Phone
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className=" border border-gray-300  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full py-1 px-6 "
                      {...register(
                        "phone"
                       
                      )}
                    />
                    {!valiatinFlag && (
                      <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                        {validationErrs?.phoneError}
                      </p>
                    )}
                  </div>
                  {/*  e m a i l */}
                  <div className="personal-info-input mb-3.5 xl:mb-0">
                    <label
                      htmlFor="email"
                      className={
                        "block h-fit text-sm font-medium  mb-1 label " +
                        (validationErrs?.email && "text-red-600")
                      }
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className=" border border-gray-300 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                      placeholder="Email"
                      {...register(
                        "email"
                       
                      )}
                    />
                    {!valiatinFlag && (
                      <p className="mt-0.5 text-sm text-red-600 dark:text-red-500">
                        {validationErrs.email}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* =============================================================== office info data ====================================================================== */}
              <div className="info-title relative">
                <p className="font-bold main-color after-title  mb-3.5 ">
                  Office Info
                </p>
              </div>
              {/* o f f i ce */}
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
                  <option value={formAndEmpData?.company_offices?.data[0]?.id}>
                    {formAndEmpData?.company_offices?.data[0]?.name}
                  </option>
                </select>
              </div>
              <div className=" xl:grid xl:grid-cols-2 xl:gap-x-8 ">
                {/* d e p a r t m e n t */}
                <div className="mb-2.5">
                  <div className="block">
                    <label
                      htmlFor="department"
                      className={
                        "block h-fit text-sm font-medium  mb-1 label " +
                        (errors.name?.type === "required" && "text-red-600")
                      }
                    >
                      Department
                    </label>
                  </div>
                  <select
                    id="department"
                    className="muted  border border-gray-300 text-red-600  text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    {...register("department_id")}
                  >
                    <option value="">Select</option>

                    {formAndEmpData?.company_departments?.data.map((e) => (
                      <option value={e.id} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* A t t e n d e n c e     P r o f i l e */}
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
                    {formAndEmpData?.attendance_profiles?.data.map((e) => (
                      <option value={e.id} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* R o l e */}
                {editOrAdd === "add" && (
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

                      {formAndEmpData?.profile?.company?.currentSubscription?.plan?.roles.map(
                        (e) => (
                          <option value={e.id} key={e.id}>
                            {e.name}
                          </option>
                        )
                      )}
                    </select>
                  </div>
                )}

                {/* P o s i t i o n */}
                <div className="mb-2.5">
                  <div className=" block ">
                    <label
                      htmlFor="Position"
                      className={
                        "block h-fit text-sm font-medium  mb-1 label " +
                        (errors.name?.type === "required" && "text-red-600")
                      }
                    >
                      Position
                    </label>
                  </div>

                  <select
                    id="Position"
                    className="muted w-full  border border-gray-300 text-red-600 text-sm  focus:ring-blue-500 focus:border-blue-500 block w-full  py-1 px-6"
                    {...register("position_id")}
                  >
                    <option value="">Select</option>
                    {formAndEmpData?.company_positions?.data.map((e) => (
                      <option value={e.id} key={e.id}>
                        {e.name}
                      </option>
                    ))}
                  </select>
                </div>
                {/* D i r e c t     M a n g e r */}
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
                    onChange={handleMangerArr}
                  >
                    <option value="">Select</option>

                    {manges.length > 0 &&
                      manges.map((e) => (
                        <option value={e.id} key={e.id}>
                          {e.name}
                        </option>
                      ))}
                  </select>
                </div>
                {/* c o p p i e d   M a n g e r */}
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

                    {coppiedMangers.length > 0 &&
                      coppiedMangers.map((e) => (
                        <option value={e.id} key={e.id}>
                          {e.name}
                        </option>
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
                    {...register("work_home")}
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
                    setValidationErrors((prev) => {
                      return {
                        ...prev,
                        phoneError: "",
                        nameError: "",
                        email: "",
                      };
                    });
                    reset({ ...defaultVals });
                    dispatch(handleEditOrAdd(""));
                    dispatch(setShowModalVal(false));

                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className=" rounded text-white bg-main  focus:ring-3 focus:outline-none focus:ring-cyan-300 font-medium   btn "
                >
                  {addLoad || editLoad ? (
                    <div className="text-center  flex justify-center items-center">
                      <Spinner aria-label="Center-aligned spinner example" />
                    </div>
                  ) : (
                    <p>save</p>
                  )}
                  {/* Save */}
                </button>
              </div>
            </form>
          </Modal.Body>
        )}
      </Modal>
    </React.Fragment>
  );
};

export default NewEmploee;
