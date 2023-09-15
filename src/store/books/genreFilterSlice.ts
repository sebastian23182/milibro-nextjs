import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: string = ""

export const genreFilterSlice = createSlice({
    name: "genreFilter",
    initialState,
    reducers: {
        actionGenreFilter: (state, action: PayloadAction<string>) => {
            return action.payload
        } 
    }
})

export default genreFilterSlice.reducer

export const { actionGenreFilter } = genreFilterSlice.actions