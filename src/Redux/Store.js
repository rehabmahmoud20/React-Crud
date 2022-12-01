import {configureStore} from '@reduxjs/toolkit'
import {dataSlice} from './DataSlice'

export const Store = configureStore({
    reducer :{
        employeData : dataSlice.reducer,
        
         }
   })