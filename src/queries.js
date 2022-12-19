import { gql } from '@apollo/client';

 export  const GET_EMP = gql`

 query  {company_users(first: 20, page: 1) {
       data {
       id
       name
       email
       position{name}
       department {name}
       offices{name}
       joining_date
       manager{name}
       copied_managers{name}
       
     }
     paginatorInfo {
       total
       count
       currentPage
       hasMorePages
       lastItem
       lastPage
     }
   }}
 
   `

export  const COMP_OFFICE =gql`
query {
  company_offices(first:1){
   data{
     name
   } 
 }
 }

`

   