import {  gql } from '@apollo/client';



const mutations = {
removeUser :gql`
mutation removeUserFun( $id: ID!,$password: String!){
    delete_user(id:$id,password:$password) {
        status
        message
    }
}
`,
addUser : gql`
mutation add($input:StoreUserWithUserSalaryConfigInput){
    store_user_with_user_salary_config(input:$input){
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
}
`
,editUser :gql`
mutation edit($input:ExtraUserInput!){
    update_user(input:$input){
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
}

`
}
export default mutations;



// delete_user(
//     id: ID!
//     password: String!
//     replace_by: ID
//     new_manager_for_replaced_by: ID
//     ): StatusResponse