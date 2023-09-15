import { configureStore, type Middleware } from "@reduxjs/toolkit"
import pendingBooksReducer from "./books/pendingBooksSlice"
import finishedBooksReducer from "./books/finishedBooksSlice"
import bookIDReducer from "./books/bookIDSlice"
import bookInformationViewReducer from "./books/bookInformationViewSlice"
import genreFilterReducer from "./books/genreFilterSlice"
import searchInputReducer from "./books/searchInputSlice"
import bookAnimationReducer from "./books/bookAnimationSlice"
import bookDragIDReducer from "./books/bookDragID"
import bookLoadingSkeletonReducer from "./books/bookLoadingSkeleton"

const persistanceLocalStorageMiddleware: Middleware = (store) => (next) => (action) => {
    next(action)
    const persistedState = localStorage.getItem("__redux__books__state__")
    if (!persistedState) localStorage.setItem("__redux__books__state__", 
        JSON.stringify({
        pendingBooks: [], 
        finishedBooks: []
    }))
       
    setTimeout(() => { 
        localStorage.setItem("__redux__books__state__", JSON.stringify({
            pendingBooks: store.getState()["pendingBooks"], 
            finishedBooks: store.getState()["finishedBooks"]
        }))
    }, 0)  
}

export const store = configureStore({
    reducer: { 
        pendingBooks: pendingBooksReducer,
        finishedBooks: finishedBooksReducer,
        bookID: bookIDReducer,
        bookInformationView: bookInformationViewReducer,
        genreFilter: genreFilterReducer,
        searchInput: searchInputReducer,
        bookAnimation: bookAnimationReducer,
        bookDragID: bookDragIDReducer,
        bookLoadingSkeleton: bookLoadingSkeletonReducer
    },
    middleware: [persistanceLocalStorageMiddleware]
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch