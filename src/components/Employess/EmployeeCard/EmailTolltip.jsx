import { FaEnvelope } from "react-icons/fa";




import * as React from 'react';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
// import Typography from '@mui/material/Typography';


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





export default function EmailTolltip({employee}) {
  const { email  } = employee;



  return (
    <div>
      <HtmlTooltip arrow  title={<React.Fragment>
        email : {email}
          
       </React.Fragment>}>
       <div className=" hover:cursor-pointer">
          <FaEnvelope className="icon-size"/>
        </div>
      </HtmlTooltip>
     
    
   
    </div>
  );
}
