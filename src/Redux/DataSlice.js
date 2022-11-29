import { createSlice } from "@reduxjs/toolkit";
import { emloyeeData } from "../data.js";
const initialState = {
  newEmployeeData: [],
  employee: emloyeeData,
};
console.log(emloyeeData);

// reducer => state + action
export const dataSlice = createSlice({
  name: "employeeData",
  initialState,
  reducers: {
    // add new employee
    getFormData(state, action) {
      state.newEmployeeData.push(action.payload);
    },
    // handle employe removal
    removeEmployee(state, action) {
      const DataCopy = JSON.parse(JSON.stringify(state.employee));
      const filteredData = DataCopy.filter((e) => e.id !== action.payload);
      state.employee = [...filteredData];
    },
  },
});
export const { getFormData, exportEmployeData, removeEmployee } =
  dataSlice.actions;
