import { type Book } from "@/app/types"
import { useAppSelector } from "./store"
import { useMemo } from "react"

interface Props {
    books: Book[]
}

function useClientStates({ books }: Props) {
    const bookID = useAppSelector((state) => state.bookID)
    const genreFilter = useAppSelector((state) => state.genreFilter)
    const searchInput = useAppSelector((state) => state.searchInput)
    const bookInformationView = useAppSelector((state) => state.bookInformationView)

    const booksList = useMemo(() => {
        if (searchInput) return genreFilter ?
        books.filter(
            (book) => 
            book.genre === genreFilter && book.ISBN != bookID &&
            (book.title.toLowerCase().includes(searchInput) || 
            book.author.name.toLowerCase().includes(searchInput) || 
            book.synopsis.toLowerCase().includes(searchInput))).sort((a, b) => a.title.localeCompare(b.title)) :
        books.filter(
            (book) => 
            book.ISBN != bookID &&
            (book.title.toLowerCase().includes(searchInput) || 
            book.author.name.toLowerCase().includes(searchInput) || 
            book.synopsis.toLowerCase().includes(searchInput))).sort((a, b) => a.title.localeCompare(b.title));
        if (bookInformationView) return genreFilter ? 
            books.filter((book) => book.genre === genreFilter && book.ISBN != bookID) : 
            books.filter((book) => book.ISBN != bookID)
        return genreFilter ? books.filter((book) => book.genre === genreFilter) : books}, [books, genreFilter, bookInformationView, bookID, searchInput])

    const bookSelected = useMemo(() => (
        books.find((book) => book.ISBN === bookID)
    ), [books, bookID])

    return { booksList, bookSelected }
}

export { useClientStates }