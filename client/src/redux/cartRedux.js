import {createSlice} from "@reduxjs/toolkit";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        yogas:[],
        quantity:0,
        total:0,
    },
    reducers:{
        addYoga:(state,action)=>{
            state.quantity+=1;
            state.yogas?.push(action.payload);
            state.total+=action.payload.price*action.payload.quantity;
        }
    }

})

export const {addYoga} = cartSlice.actions;
export default cartSlice.reducer;