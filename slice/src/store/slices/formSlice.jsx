import { createSlice } from '@reduxjs/toolkit'
import { addCourse } from "./courseSlice"



const formSlice = createSlice({
    name: 'form',
    initialState: {
        name: '',
        description: '',
        cost: ''
    },
    reducers: {
        changeName(state, action) {
            state.name = action.payload
        },
        changeDescription(state, action) {
            state.description = action.payload
        },
        changeCost(state, action) {
            state.cost = action.payload
        }
    },
    extraReducers(builder) {
        builder.addCase(addCourse(), (state) => {
            state.name = '',
                state.description = '',
                state.cost = ''
        })
    }
})

export const { changeName, changeDescription, changeCost } = formSlice.actions;
export const formReducers = formSlice.reducer