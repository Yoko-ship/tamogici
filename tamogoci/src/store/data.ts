import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    id:NaN
}

export const IdStore = createSlice({
    name:"id",
    initialState,
    reducers:{
        getId(state,action){
            state.id = action.payload
        }
    }

})

export const {getId} = IdStore.actions
export default IdStore.reducer