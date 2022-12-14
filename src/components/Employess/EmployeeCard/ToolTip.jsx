import { Button, Tooltip } from "flowbite-react";
import { AiOutlineExclamation } from "react-icons/ai";

const ToolTip = ({ employee }) => {
  const { role, manger, office, date } = employee;

  return (
    <Tooltip
      content={
        <div className="w-fit">
          <div className="grid grid-cols-3 gap-4">
            <div>
             <p className="muted">office :</p>  <div>{office}</div>
            </div>

            <div>
              <p className="muted"> Role : </p>
              <div>{role}</div>
            </div>
            <div>
              <p className="muted">  coppied manger :</p>
             <div>{manger}</div>
            </div>

            <div>
              <p className="muted">
              Joinning date :
              </p>
              <div>{date}</div>
            </div>
            <div>
              <p className="muted">
              Manger:
              </p>
             <div>{manger}</div>
            </div>
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
