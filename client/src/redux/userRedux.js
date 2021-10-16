import {createSlice} from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"user",
    initialState:{
       currentUser:null,
       isFetching:false,
       error:false
    },
    reducers:{
       loginStart=(state)=>{
           state.isFetching=true
       },
       loginSuccess=(state,action)=>{
           state.isFetching=false
           state.currentUser=action.payload
       },
       loginStart=(state)=>{},

    }

})

export const {addYoga} = cartSlice.actions;
export default cartSlice.reducer;