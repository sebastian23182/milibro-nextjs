import styles from "../styles/pending-finished.module.css"
import { type Book } from "@/app/types"
import AddToReadList from "@/icons/AddToReadList"
import AddToFinishedList from "@/icons/AddToFinishedList"
import Image from "next/image"
import { useAppSelector } from "@/hooks/store"
import { useEffect } from "react"
import { useClientStateDispatch } from "@/hooks/useClientStateDispatch"
import { useLocalStorageListener } from "@/hooks/useLocalStorageListener"
import BookTopModal from "./BookTopModal"
import { toast } from "sonner"

interface Props {
    books: Book[]
}

export default function FinishedBooks({ books }: Props) {
    const { storageListener, setStorageListener } = useLocalStorageListener()
    const { setFinishedBooks, setPendingBooks } = useClientStateDispatch()
    const finishedBooks = useAppSelector((state) => state.finishedBooks)
    const pendingBooks = useAppSelector((state) => state.pendingBooks)
    const bookDragID = useAppSelector((state) => state.bookDragID)

    useEffect(() => {
        const persistedState = localStorage.getItem("__redux__books__state__")
        if (persistedState) setFinishedBooks(JSON.parse(persistedState).finishedBooks)
        setStorageListener(false)
    }, [storageListener])

    const handleDragEnd = (e: React.DragEvent) => {
        e.preventDefault()
        if (pendingBooks.includes(bookDragID)) setPendingBooks(bookDragID)
        if (!finishedBooks.includes(bookDragID)) {
            setFinishedBooks(bookDragID) 
        } else return
        const book = books.find((item) => item.ISBN === bookDragID)
        if (book) toast(<BookTopModal book={book} text="ADD_FINISH"/>, {
            duration: 3000
        })
    }

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
    }

    return (
        <section className={styles.section} onDrop={handleDragEnd} onDragOver={handleDragOver}>
            <div className={styles.title}>
                <h3>Libros leídos <span>({finishedBooks.length})</span></h3>
            </div>
            <div className={styles.line}></div>
            <div className={styles.ulcontainer}>
                <ul>
                    {finishedBooks?.map((id: Book["ISBN"]) => {
                        const book = books.find((item) => item.ISBN === id)
                        if (book) return (
                            <li key={id}>
                                <Image 
                                alt={book.title} 
                                src={book.cover}
                                width={90}
                                height={130}
                                priority
                                />
                                <div className={styles.info}>
                                    <h3>{book.title}</h3>
                                    <p><b>Genero: </b>{book.genre}</p>
                                    <p><b>Autor: </b>{book.author.name}</p>
                                    <div className={styles.interactions}>
                                        <AddToReadList book={book}/>
                                        <AddToFinishedList book={book}/>
                                    </div>
                                </div>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </section>
    )
}