import { configureStore } from "@reduxjs/toolkit";
import IdReducer from "./data"

export const makeStore = () =>{
    return configureStore({
        reducer:{
            id:IdReducer
        }
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
