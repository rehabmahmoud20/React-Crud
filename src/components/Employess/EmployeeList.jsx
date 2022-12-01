import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard";


import { removeEmployee } from "../../Redux/DataSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const emps = useSelector((state) => state.employeData.employee);

  //  remove employee
  const deleteEmployee = (id) => {
    dispatch(removeEmployee(id));
  };
  return (
    <section className=" px-3  justify-center grid 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-2 gap-x-4 h-fit gap-y-9">
      {emps.map((e) => (
        <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee} />
      ))}
    </section>
  );
};

export default EmployeeList;
