
import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import { setShowModalVal,handleEditOrAdd } from "../../Redux/DataSlice";

// graph
import { useQuery, useMutation } from '@apollo/client';
import { useEffect, useState } from "react";
import PaginationControlled from "./PaginationControlled";
import mutations from '../../mutations'
import { GET_EMP } from '../../queries'

import Search from "../search/Search";
import { Spinner } from "flowbite-react";
import NewEmploee from "../NewEmploeeData/NewEmploee";
import { Button } from "flowbite-react";




const EmployeeList = () => {
  const flag = useSelector((state) => state.employeData.showModal);

  const dispatch = useDispatch();
  const [searchedData, setSearched] = useState('')
  const [delValidErorr,setError] = useState(false)
  const [delFlag,setDelFlag] = useState(false)
  const [hello ,sethello] = useState('gggg')


  const [currentPage, setCurrentPge] = useState(1)


  const emps = useSelector((state) => state.employeData.employee);

  const { loading, error, data, refetch, networkStatus } = useQuery(GET_EMP, {
    variables: {
      currentPage: currentPage,
      input: { "name": searchedData }
    },
    fetchPolicy: "no-cache"
  })
  useEffect((()=>{
    if (loading === false && data) {
          setCurrentPge(data?.company_users?.paginatorInfo.currentPage)

    }
  }),[data,loading])
  console.log(data?.company_users?.data, loading, networkStatus)
  // const [currentPage,setCurrentPge] = useState(1)
  const [empPerPage, setempPerPage] = useState(20)
  const [currentEmp, setCurr] = useState()
  const lastIndex = currentPage * empPerPage;
  // const [searchedData,setSearched] = useState()
  const firstIndex = lastIndex - empPerPage;



  const { removeUser } = mutations;
  const [removeFunc, { loading: delLoading,errors:deleerror, onCompleted, data: del }] = useMutation(removeUser, {
    onCompleted() {
      refetch()
      // console.log(delFlag)
      setDelFlag(false)
      console.log('com'+delFlag)

    },
    onError(delError){     
        setError(delError.graphQLErrors[0].extensions.reason)
        // if(delValidErorr){
          setDelFlag(true)
      console.log('not'+delFlag)

        // }
       
 }
  })
  console.log(data?.company_users?.paginatorInfo)
  console.log(data?.company_users?.paginatorInfo.currentPage);
  const page = (num) => setCurrentPge(num)

// handle iiiiiid
const [id,setId] = useState('')
const handleId = (val) =>{
  console.log(val)
setId(val)
}

  //  remove employee
  const deleteEmployee = (id, password) => {
  
    removeFunc({
      variables: {
        id, password
      }
    }
    )


  };

  // search 
  const handleSearch = (val) => {
    setSearched(val)
    setCurrentPge(1)


  }
  // modal handling
  const modal = () => {
    dispatch(setShowModalVal(true))
    dispatch(handleEditOrAdd('add'))
  }


  return (
    <main className="h-fit  relative">

      <div className=" flex mb-12 px-1 md:px-4 lg:px-9">
        <Search handleSearch={handleSearch} value={searchedData} />
        <div >
          <Button onClick={
            modal
          }>
            + Add new
          </Button>

        </div>
        <NewEmploee updateList={refetch} emps={data?.company_users?.data} id={id} />

      </div>
      {delLoading || loading ? (<div className="text-center main-height flex justify-center items-center  w-full">
        <Spinner aria-label="Center-aligned spinner example" />
      </div>) : (
        <div>
          <div className="  main-content  w-full  md:grid      h-full  gap-y-9 px-1 md:px-4  lg:px-9">
            {
              data?.company_users?.data.map(e => (
                <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee}   updateList={refetch} handleId={handleId}/>
              ))
            }



          </div>
          <div className="w-full flex justify-center  ">
            <PaginationControlled totalEmp={data?.company_users?.paginatorInfo.total} empPerPage={empPerPage} handle={page} currentPage={currentPage} />
          </div>
        </div>




      )}


    </main>
  );
};

export default EmployeeList;
