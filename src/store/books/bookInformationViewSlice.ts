import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: boolean = false

export const bookInformationViewSlice = createSlice({
    name: "bookInformationView",
    initialState,
    reducers: {
        actionBookInformationView: (state, action: PayloadAction<boolean>) => {
            return action.payload
        } 
    }
})

export default bookInformationViewSlice.reducer

export const { actionBookInformationView } = bookInformationViewSlice.actions