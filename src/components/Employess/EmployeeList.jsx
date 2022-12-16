import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";
import { removeEmployee } from "../../Redux/DataSlice";
// graph
import { useQuery, gql,useMutation } from '@apollo/client';
import { useState } from "react";
import PaginationControlled from "./PaginationControlled";
import mutations from '../../mutations'
// removeUser :gql`

 export  const GET_EMP = gql`

query  {company_users(first: 5, page: 1) {
      data {
      id
      name
      email
      position{name}
      department {name}
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

const EmployeeList = () => {
  const dispatch = useDispatch();
  const emps = useSelector((state) => state.employeData.employee);
  // console.log(GET_EMP)

  const {loading, error, data} = useQuery(GET_EMP) 
  // const [currentPage,setCurrentPge] = useState(1)
  // const [empPerPage,setempPerPage] = useState(20)
  // const lastIndex = currentPage * empPerPage;
  // const firstIndex = lastIndex - empPerPage;
  // const currentPosts = data?.company_users?.data.slice(firstIndex,lastIndex)
const {removeUser} = mutations;
const [ removeFunc] = useMutation(removeUser)
  console.log(loading, error, data)
  console.log(data?.company_users?.paginatorInfo.total);

const password = '123456'
 

  //  remove employee
  const deleteEmployee = (id) => {
    console.log('del')
    removeFunc({
      variables:{
        id,password
      }
    })
    // dispatch(removeEmployee(id));
  };
  if (loading) return <p>loading ....</p>
  return (
    <main className="  main-content  w-full  md:grid      h-fit gap-y-9 px-1 md:px-4  lg:px-9">
      {data?.company_users?.data.map((e) => (
        <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee} />
      ))}
      {/* <PaginationControlled  empPerPage={empPerPage}  totalPosts={data?.company_users?.paginatorInfo.total}/> */}
    </main>
  );
};

export default EmployeeList;
