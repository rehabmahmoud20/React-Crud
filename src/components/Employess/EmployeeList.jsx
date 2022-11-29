import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {

    const TotalEmployess = useSelector((state) => state.employeData.employee);
console.log(TotalEmployess)
  return (
    <section className=" px-3 mx-auto grid 2xl:grid-cols-4 lg:grid-cols-2 gap-x-4 h-fit gap-y-9">
    {TotalEmployess.map((e) => (
        <EmployeeCard employee={e} key={e.id} />
      ))}

    </section>
  )
}

export default EmployeeList