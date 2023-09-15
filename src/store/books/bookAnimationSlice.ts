import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: boolean = false

export const bookAnimationSlice = createSlice({
    name: "bookAnimation",
    initialState,
    reducers: {
        actionBookAnimation: (state, action: PayloadAction<boolean>) => {
            return action.payload
        } 
    }
})

export default bookAnimationSlice.reducer

export const { actionBookAnimation } = bookAnimationSlice.actions