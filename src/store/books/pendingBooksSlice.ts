import { type Book } from "@/app/types"
import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: Book["ISBN"][] = []

export const pendingBooksSlice = createSlice({
    name: "pendingBooks",
    initialState,
    reducers: {
        actionPendingBooks: (state, action: PayloadAction<Book["ISBN"] | Book["ISBN"][]>) => {
            if (typeof action.payload === "object") return action.payload
            return state.includes(action.payload) ? state.filter((item) => item !== action.payload) : [...state, action.payload]
        } 
    }
})

export default pendingBooksSlice.reducer

export const { actionPendingBooks } = pendingBooksSlice.actions