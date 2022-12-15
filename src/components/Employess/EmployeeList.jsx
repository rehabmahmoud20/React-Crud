import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard/EmployeeCard";

import { removeEmployee } from "../../Redux/DataSlice";

const EmployeeList = () => {
  const dispatch = useDispatch();
  const emps = useSelector((state) => state.employeData.employee);

  //  remove employee
  const deleteEmployee = (id) => {
    dispatch(removeEmployee(id));
  };
  return (
    <main className="  main-content  w-full  md:grid   lg:grid-cols-2   h-fit gap-y-9 px-1  sm:px-9">
      {emps.map((e) => (
        <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee} />
      ))}
    </main>
  );
};

export default EmployeeList;
