import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: string = ""

export const searchInputSlice = createSlice({
    name: "searchInput",
    initialState,
    reducers: {
        actionSearchInput: (state, action: PayloadAction<string>) => {
            return action.payload
        } 
    }
})

export default searchInputSlice.reducer

export const { actionSearchInput } = searchInputSlice.actions