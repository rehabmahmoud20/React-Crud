import { gql } from '@apollo/client';

 


// ATTEND_PROFILE
export  const ATTEND_PROFILE =gql`
query{
  attendance_profiles(first:20){
    data{
      name
      id
    }
  }
  company_departments(first:20){
    data{
      name
      id
    }
  }
  company_positions(first:20){
    data{
      id
      name
    }
      }
      profile{
        company{
         currentSubscription{
           plan{
             roles{
              id
               name
             }
           }
         }
       }
        }
        company_offices(first:1){
          data{
            name
            id
          } 
        }
        company_users(first: 20, page: 1) {
          data {
          id
          name       
        }
    
      }
}

`

// single_user_query

export  const SINGLE_USER_QUERY = gql`query getsingleUser($id:ID){
  user(id:$id){
    name
    email
    phone
    starts_at
    office{
      id
      name
    }
    department{
      id
      name
    }
    position{
      id
      name
    }
    manager{
      id
      name
    }
    copied_managers{
      name
      id
    }  
     attendance_profile{
      id
    }
  }
}
`



/*
mutation createUser {
  store_user_with_user_salary_config(
    input: {
      user_input: {
        name:"aa"
      phone:"1111"
        email:""
        starts_at:""
        office_id:""
        department_id:""
        role_id:""
        att_profile_id:"2"
        position_id:"2"
        manager_id:"22"
        copied_managers:[]
        can_work_home:1
        company_id:"1"
        has_credentials:1
        max_homeDays_per_week:1
        can_ex_days:0
        home_days:[]
        flexible_home:0
       
      }
      user_salary_config_input:{
        salary_config:{
          start_at:"22/10/2022"
        }
      }
    }
  ){
    id
  }
}

*/

export const GET_EMP = gql`

query getusers($currentPage:Int,$input: UserFilterInput)  
{company_users(first: 20, page: $currentPage,input : $input) {
      data {
      id
      name
      email
      phone
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



   