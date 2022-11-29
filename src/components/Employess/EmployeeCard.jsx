import "./card.css";
const EmployeeCard = ({employee}) => {
  const {image,employeeName,position,department,empCase} = employee
  console.log(employee)
  return (
    <div className="card flex">
      <div className="card-img">

      </div>
      <div className="card-content">
        <div>EmployeeCard</div>
      </div>
    </div>
  );
};

export default EmployeeCard;
