import { createSlice } from "@reduxjs/toolkit";
import { emloyeeData } from "../data.js";
const initialState = {
  employee: emloyeeData,
  searchedDataCopy: emloyeeData,
};

// reducer => state + action
export const dataSlice = createSlice({
  name: "employeeData",
  initialState,
  reducers: {
    // add new employee
    getFormData(state, action) {
      state.employee.push({...action.payload,id:Math.random()});
    },
    // handle employe removal
    removeEmployee(state, action) {
      const filteredData = state.employee.filter((e) => e.id !== action.payload);
      state.employee = filteredData;
    },
    // search bar handling
    search(state, action) {
      const data = state.searchedDataCopy.filter((e) => {
        if (action.payload === "") {
          return e;
        } else {
          return e.employeeName
            .toLowerCase()
            .includes(action.payload.toLowerCase());
        }
      });
      state.employee = data;
    },
  },
});
export const { getFormData, search, removeEmployee } = dataSlice.actions;
