import { useSelector, useDispatch } from "react-redux";
import EmployeeCard from "./EmployeeCard";

const EmployeeList = () => {

    const TotalEmployess = useSelector((state) => state.employeData.employee);
console.log(TotalEmployess)
  return (
    <section className="container mx-auto">
    {TotalEmployess.map((e) => (
        <EmployeeCard employee={e} key={e.id} />
      ))}

    </section>
  )
}

export default EmployeeList