import { AiOutlineExclamation } from "react-icons/ai";



import * as React from 'react';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';


const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: 'white',
      color: 'rgba(0, 0, 0, 0.87)',
    //   maxWidth: 400,
      fontSize: 11,
      border: '1px solid #dadde9',
    },
  }));





export default function CustomizedTooltips({employee}) {
  const { role,manager,offices,joining_date ,copied_managers  } = employee;

  return (
    <div>
      <HtmlTooltip arrow  title={<React.Fragment>
         <span className="grid grid-cols-3 gap-2">
         <div>
             <div className="muted">office :</div>  <div>{offices[0].name}</div>
           </div>

           <div>
             <div className="muted"> Role : </div>
             <div>{role}</div>
           </div>
           <div>
             <div className="muted">  coppied manger :</div>
             {copied_managers.map(e=>
             ( <div key={e.id}>{e.name}</div>)
             )}
           </div>

           <div>
             <div className="muted">
               Joinning date :
             </div>
             <div>{joining_date}</div>
           </div>
           <div>
             <div className="muted">
               Manger:
             </div>
             <div>{manager?.name}</div>
           </div>
         </span>
          
       </React.Fragment>}>
       <div className=" hover:cursor-pointer">
          <AiOutlineExclamation className="icon-size"/>
        </div>
      </HtmlTooltip>
     
    
   
    </div>
  );
}
