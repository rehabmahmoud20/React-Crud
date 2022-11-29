import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard";
import {emloyeeData} from '../../data'
import { useState } from "react";

import {removeEmployee} from '../../Redux/DataSlice'


const EmployeeList = () => {

 const [empData,setData] = useState(emloyeeData)
 const dispatch = useDispatch();
  const emps = useSelector((state) => state.employeData.employee);


    // console.log(emps)
    const deleteEmployee = (id) => {
      // let newEmp = empData.filter(e => e.id !== id)
    dispatch(removeEmployee(id));
console.log(id)
      // setData(newEmp)
 
    };
  return (
    <section className=" px-3 mx-auto grid 2xl:grid-cols-4 lg:grid-cols-2 gap-x-4 h-fit gap-y-9">
    {emps.map((e) => (
        <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee}/>
      ))}

    </section>
  )
}

export default EmployeeList