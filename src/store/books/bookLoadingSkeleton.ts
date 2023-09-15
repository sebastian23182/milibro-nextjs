import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

const initialState: boolean = false

export const bookLoadingSkeletonSlice = createSlice({
    name: "bookLoadingSkeleton",
    initialState,
    reducers: {
        actionBookLoadingSkeleton: (state, action: PayloadAction<boolean>) => {
            return action.payload
        } 
    }
})

export default bookLoadingSkeletonSlice.reducer

export const { actionBookLoadingSkeleton } = bookLoadingSkeletonSlice.actions