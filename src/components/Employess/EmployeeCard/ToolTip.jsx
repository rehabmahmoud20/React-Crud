// // import { Button, Tooltip } from "flowbite-react";
// import { AiOutlineExclamation } from "react-icons/ai";

// // const ToolTip = ({ employee }) => {
// //   const { role, manger, office, date } = employee;

// //   return (
// //     <Tooltip
// //       content={
// //         <div className="w-fit">
// //           <div className="grid grid-cols-3 gap-4">
// //             <div>
// //              <p className="muted">office :</p>  <div>{office}</div>
// //             </div>

// //             <div>
// //               <p className="muted"> Role : </p>
// //               <div>{role}</div>
// //             </div>
// //             <div>
// //               <p className="muted">  coppied manger :</p>
// //              <div>{manger}</div>
// //             </div>

// //             <div>
// //               <p className="muted">
// //               Joinning date :
// //               </p>
// //               <div>{date}</div>
// //             </div>
// //             <div>
// //               <p className="muted">
// //               Manger:
// //               </p>
// //              <div>{manger}</div>
// //             </div>
// //           </div>
// //         </div>
// //       }
// //       placement="bottom"
// //       style="light"
// //     >
// //       <AiOutlineExclamation className="text-xs hover:cursor-pointer " />
// //     </Tooltip>
// //   );
// // };

// // export default ToolTip;

// import { withStyles, makeStyles } from '@material-ui/core/styles';
// import Tooltip from '@material-ui/core/Tooltip';

// const LightTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: theme.palette.common.white,
//     color: 'rgba(0, 0, 0, 0.87)',
//     boxShadow: theme.shadows[1],
//     fontSize: 11,
//   },
// }))(Tooltip);

// const useStylesBootstrap = makeStyles((theme) => ({
//   arrow: {
//     color: 'red',
//     backgroundColor: 'red',
//   },
//   tooltip: {
//     backgroundColor: '#fff',
//   },
// }));

// // function BootstrapTooltip(props) {
// //   const classes = useStylesBootstrap();

// //   return <Tooltip arrow classes={classes} {...props} />;
// // }

// const HtmlTooltip = withStyles((theme) => ({
//   tooltip: {
//     backgroundColor: '#f5f5f9',
//     color: 'rgba(0, 0, 0, 0.87)',
//     maxWidth: 220,
//     fontSize: theme.typography.pxToRem(12),
//     border: '1px solid #dadde9',
//   },
// }))(Tooltip);

// export default function CustomizedTooltips({ employee }) {
//   const { role, manger, office, date } = employee;

//   return (
//     <div>
//       <LightTooltip  title={<div>
//         <div className="grid grid-cols-3 gap-4">
//           <div>
//             <p className="muted">office :</p>  <div>{office}</div>
//           </div>

//           <div>
//             <p className="muted"> Role : </p>
//             <div>{role}</div>
//           </div>
//           <div>
//             <p className="muted">  coppied manger :</p>
//             <div>{manger}</div>
//           </div>

//           <div>
//             <p className="muted">
//               Joinning date :
//             </p>
//             <div>{date}</div>
//           </div>
//           <div>
//             <p className="muted">
//               Manger:
//             </p>
//             <div>{manger}</div>
//           </div>
//         </div>
//       </div>} >

//         <div className=" hover:cursor-pointer">
//           <AiOutlineExclamation />
//         </div>

//       </LightTooltip>


//     </div>
//   );
// }




