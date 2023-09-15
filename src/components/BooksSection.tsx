import { lazy } from "react";
import { useAppSelector } from '@/hooks/store'
import { useClientStates } from "@/hooks/useClientStates";
import GeneralInfo from '@/components/GeneralInfo'
import styles from '../styles/client.module.css'
import { type Book } from "@/app/types";
import ListOfBooks from "./ListOfBooks";
import BookToast from "./BookToast";

const LazyBookInfo = lazy(() => import("@/components/BookInfo"))

interface Props {
    books: Book[]
}

export default function BooksSection({ books }: Props) {
    const { booksList, bookSelected } = useClientStates({ books })
    const bookInformationView = useAppSelector((state) => state.bookInformationView)

    return (
        <section className={bookInformationView ? styles.books : styles.section}>
            <BookToast/>
            <LazyBookInfo bookSelected={bookSelected}/>
            <ListOfBooks booksList={booksList}/>
            {!bookInformationView && <GeneralInfo books={books}/>}
        </section>  
    )
}