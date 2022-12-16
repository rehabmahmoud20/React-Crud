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
    <main className="  main-content  w-full  md:grid      h-fit gap-y-9 px-1 md:px-4  lg:px-9">
      {emps.map((e) => (
        <EmployeeCard employee={e} key={e.id} removeEmp={deleteEmployee} />
      ))}
    </main>
  );
};

export default EmployeeList;
