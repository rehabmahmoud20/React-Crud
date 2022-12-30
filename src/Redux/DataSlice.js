import { createSlice } from "@reduxjs/toolkit";

const initialState = {

  showModal:false,
  editOrAdd : '',
  showDelModal : false,
};

export const dataSlice = createSlice({
  name: "employeeData",
  initialState,
  reducers: {
    setShowModalVal(state,action){
state.showModal = action.payload
    },
    handleEditOrAdd(state,action){
      state.editOrAdd = action.payload
    },
    handleShowDel(satate,action){
      satate.showDelModal = action.payload
    }

  },
});
export const { getFormData, search, removeEmployee,setShowModalVal ,handleEditOrAdd,handleShowDel} = dataSlice.actions;
