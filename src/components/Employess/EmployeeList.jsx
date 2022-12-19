import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import { removeEmployee } from "../../Redux/DataSlice";
// graph
import { useQuery, gql, useMutation } from '@apollo/client';
import { useState } from "react";
import PaginationControlled from "./PaginationControlled";
import mutations from '../../mutations'
// import {GET_EMP} from '../../queries'
import Search from "../search/Search";
import { Spinner } from "flowbite-react";

// export let currentPosts = []


const EmployeeList = () => {
  const dispatch = useDispatch();
  const [searchedData, setSearched] = useState('')

  const [currentPage, setCurrentPge] = useState(1)
  // console.log(currentPage)

  const GET_EMP = gql`

  query getusers($currentPage:Int,$input: UserFilterInput)  {company_users(first: 20, page: $currentPage,input : $input) {
        data {
        id
        name
        email
        position{name}
        department {name}
        offices{name}
        joining_date
        manager{name}
        copied_managers{name}
        
      }
      paginatorInfo {
        total
        count
        currentPage
        hasMorePages
        lastItem
        lastPage
      }
    }}
  
    `
  const emps = useSelector((state) => state.employeData.employee);
  // console.log(GET_EMP)

  const { loading, error, data, refetch } = useQuery(GET_EMP, {
    variables: {
      currentPage: currentPage,
      input: { "name": searchedData }
    },
    fetchPolicy: "no-cache"
  })
  console.log(data?.company_users?.data)
  // const [currentPage,setCurrentPge] = useState(1)
  const [empPerPage, setempPerPage] = useState(20)
  const [currentEmp, setCurr] = useState()
  const lastIndex = currentPage * empPerPage;
  // const [searchedData,setSearched] = useState()
  const firstIndex = lastIndex - empPerPage;



  const { removeUser } = mutations;
  const [removeFunc, { loading: delLoading }] = useMutation(removeUser, {
    refetchQueries: [
      { query: GET_EMP } // DocumentNode object parsed with gql
      // 'GetComments' // Query name
    ],
  })
  // console.log(loading, error, data)
  console.log(data?.company_users?.paginatorInfo);
  const page = (num) => setCurrentPge(num)

  const password = '123456'


  //  remove employee
  const deleteEmployee = (id) => {
    console.log('del')
    removeFunc({
      variables: {
        id, password
      }
    })

  };
  // search 
  const handleSearch = (val) => {
    console.log(val)
    setSearched(val)


  }
  // delete loader

  return (
    <main >
      <Search handleSearch={handleSearch} value={searchedData} />
      <div className="  main-content  w-full  md:grid      h-fit gap-y-9 px-1 md:px-4  lg:px-9">
        {delLoading || loading ? (<div className="text-center h-1/2 flex justify-center items-center">
          <Spinner aria-label="Center-aligned spinner example" />
        </div>) : data?.company_users?.data.map((e) => (
          <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee} />
        ))}



      </div>

      <div className="w-full  flex justify-center">
        <PaginationControlled totalEmp={data?.company_users?.paginatorInfo.total} empPerPage={empPerPage} handle={page} />

      </div>

    </main>
  );
};

export default EmployeeList;
