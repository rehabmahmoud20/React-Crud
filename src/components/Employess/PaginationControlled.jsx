import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

export default function PaginationControlled({empPerPage,totalEmp,handle,currentPage}) {
  let pageNumbers = 0;

  for (let i = 1; i <= Math.ceil(totalEmp / empPerPage); i++) {
    pageNumbers++

  }
  const handleChange = (event, value) => {
    handle(value)
  };

  return (
    
    <Stack spacing={2}>
     <Pagination count={pageNumbers} page={currentPage} onChange={handleChange} />
    </Stack>
  );
}
