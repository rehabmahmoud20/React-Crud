import {  gql } from '@apollo/client';



const mutations = {
removeUser :gql`
mutation removeUserFun( $id: ID!,$password: String!){
    delete_user(id:$id,password:$password) {
        status
        message
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