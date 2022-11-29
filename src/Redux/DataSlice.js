import { createSlice } from "@reduxjs/toolkit";
import {emloyeeData} from '../data.js'
const initialState = {
    newEmployeeData: [],
    employee:emloyeeData
  };
  console.log(emloyeeData)

  // reducer => state + action
export const dataSlice = createSlice({
    name: "employeeData",
    initialState,
    reducers: {
     
      // add new employee
      getFormData(state, action) {
        state.newEmployeeData.push(action.payload);
      },
// employee card data
    exportEmployeData(state, action) {
    state.newEmployeeData.push(action.payload);
  },
     
  
    },
  });
  export const {
    getFormData,exportEmployeData
  } = dataSlice.actions;

