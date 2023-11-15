import { configureStore } from "@reduxjs/toolkit";
import Reducer from "./Reducer";


const   store = configureStore({
    reducer : {
        todo : Reducer
    }
    
})

export default store;