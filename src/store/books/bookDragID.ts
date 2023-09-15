import { type Book } from "@/app/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: Book["ISBN"] = ""

export const bookDragIDSlice = createSlice({
    name: "bookDragID",
    initialState,
    reducers: {
        actionBookDragID: (state, action: PayloadAction<Book["ISBN"]>) => {
            return action.payload
        } 
    }
})

export default bookDragIDSlice.reducer

export const { actionBookDragID } = bookDragIDSlice.actions