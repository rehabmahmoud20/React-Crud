import { createSlice } from "@reduxjs/toolkit";
import { emloyeeData } from "../data.js";
const initialState = {
  newEmployeeData: [],
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
      state.newEmployeeData.push(action.payload);
    },
    // handle employe removal
    removeEmployee(state, action) {
      const DataCopy = JSON.parse(JSON.stringify(state.employee));
      const filteredData = DataCopy.filter((e) => e.id !== action.payload);
      state.employee = [...filteredData];
    },
    // search bar handling
    search(state, action) {
      const DataCopy = JSON.parse(JSON.stringify(state.searchedDataCopy));

      const data = DataCopy.filter((e) => {
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
