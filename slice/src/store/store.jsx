import { configureStore } from "@reduxjs/toolkit";
import { formReducers } from "./slices/formSlice";
import { courseReducer } from "./slices/courseSlice";

export const store = configureStore({
    reducer: {
        form: formReducers,
        courses: courseReducer
    }
})