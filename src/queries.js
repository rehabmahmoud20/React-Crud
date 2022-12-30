import { gql } from "@apollo/client";

// get form data querry
export const FORM_AND_SINGLEEMP_DATA = gql`
  query ($id: ID, $isEmp: Boolean!) {
    attendance_profiles(first: 20) {
      data {
        name
        id
      }
    }
    company_departments(first: 20) {
      data {
        name
        id
      }
    }
    company_positions(first: 20) {
      data {
        id
        name
      }
    }
    profile {
      company {
        currentSubscription {
          plan {
            roles {
              id
              name
            }
          }
        }
      }
    }
    company_offices(first: 1) {
      data {
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
    user(id: $id) @include(if: $isEmp) {
      name
      email
      phone
      starts_at
      office {
        id
        name
      }
      department {
        id
        name
      }
      position {
        id
        name
      }
      manager {
        id
        name
      }
      copied_managers {
        name
        id
      }
      attendance_profile {
        id
      }
      can_work_home
      face {
      path
      id
      }
      profile_picture {
      path
      id
      }
    }
  }
`;

// get all employess queries
export const GET_EMP = gql`
  query getusers($currentPage: Int, $input: UserFilterInput) {
    company_users(first: 20, page: $currentPage, input: $input) {
      data {
        id
        name
        email
        phone
        position {
          name
        }
        department {
          name
        }
        offices {
          name
        }
        joining_date
        manager {
          name
        }
        copied_managers {
          name
          id
        }
        face {
          path
          
          }
      }
      paginatorInfo {
        total
        count
        currentPage
        hasMorePages
        lastItem
        lastPage
      }
    }
  }
`;
