import { Button, Tooltip } from "flowbite-react";
import { BiDotsVerticalRounded } from "react-icons/bi";

const ToolTip = ({ employee }) => {
  const { role, manger, office, date } = employee;

  return (
    <Tooltip
      content={
        <div className="w-fit">
          <div>
            office :<div>{office}</div>
          </div>
          <div>
          Role :<div>{role}</div>
          </div>
          <div>
          coppied manger  :<div>{manger}</div>
          </div>
          <div>
          Joinning date :<div>{date}</div>
          </div>
          <div>
          Manger:<div>{manger}</div>
          </div>
        </div>
      }
      placement="bottom"
      style="light"
    >
        <BiDotsVerticalRounded className="text-xs hover:cursor-pointer " />
    </Tooltip>
  );
};

export default ToolTip;
