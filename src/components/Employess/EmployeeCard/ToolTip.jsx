import { Button, Tooltip } from "flowbite-react";
import { AiOutlineExclamation } from "react-icons/ai";



const ToolTip = ({ employee }) => {
  const { role, manger, office, date } = employee;

  return (
    <Tooltip
      content={
        <div className="w-fit">
          <div>
            office :{office}
          </div>
          <div>
          Role :{role}
          </div>
          <div>
          coppied manger  :{manger}
          </div>
          <div>
          Joinning date :{date}
          </div>
          <div>
          Manger:<div>{manger}</div>
          </div>
        </div>
      }
      placement="bottom"
      style="light"
    >
        <AiOutlineExclamation className="text-xs hover:cursor-pointer " />
    </Tooltip>
  );
};

export default ToolTip;
