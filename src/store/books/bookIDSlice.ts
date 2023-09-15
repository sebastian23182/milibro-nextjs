import { type Book } from "@/app/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: Book["ISBN"] = ""

export const bookIDSlice = createSlice({
    name: "bookID",
    initialState,
    reducers: {
        actionBookID: (state, action: PayloadAction<Book["ISBN"]>) => {
            return action.payload
        } 
    }
})

export default bookIDSlice.reducer

export const { actionBookID } = bookIDSlice.actions