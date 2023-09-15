import { actionPendingBooks } from "@/store/books/pendingBooksSlice"
import { actionFinishedBooks } from "@/store/books/finishedBooksSlice"
import { actionBookID } from "@/store/books/bookIDSlice"
import { actionBookInformationView } from "@/store/books/bookInformationViewSlice"
import { actionGenreFilter } from "@/store/books/genreFilterSlice"
import { actionSearchInput } from "@/store/books/searchInputSlice"
import { actionBookAnimation } from "@/store/books/bookAnimationSlice"
import { actionBookDragID } from "@/store/books/bookDragID"
import { actionBookLoadingSkeleton } from "@/store/books/bookLoadingSkeleton"
import { useAppDispatch } from "./store"
import { type Book } from "@/app/types"

function useClientStateDispatch() {
    const dispatch = useAppDispatch()

    const setPendingBooks = (payload: Book["ISBN"]) => {
        dispatch(actionPendingBooks(payload))
    }

    const setFinishedBooks = (payload: Book["ISBN"]) => {
        dispatch(actionFinishedBooks(payload))
    }

    const setBookID = (payload: Book["ISBN"]) => {
        dispatch(actionBookID(payload))
    }

    const setBookInformationView = (payload: boolean) => {
        dispatch(actionBookInformationView(payload))
    }

    const setGenreFilter = (payload: string) => {
        dispatch(actionGenreFilter(payload))
    }

    const setSearchInput = (payload: string) => {
        dispatch(actionSearchInput(payload))
    }

    const setBookAnimation = (payload: boolean) => {
        dispatch(actionBookAnimation(payload))
    }
    
    const setBookDragID = (payload: Book["ISBN"]) => {
        dispatch(actionBookDragID(payload))
    }

    const setBookLoadingSkeleton = (payload: boolean) => {
        dispatch(actionBookLoadingSkeleton(payload))
    }

    return { 
        setPendingBooks, 
        setFinishedBooks, 
        setBookID,
        setBookInformationView,
        setGenreFilter,
        setSearchInput,
        setBookAnimation, 
        setBookDragID,
        setBookLoadingSkeleton
    }
}

export { useClientStateDispatch }
