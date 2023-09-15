import { type Book } from "@/app/types"
import styles from "../styles/addtoreadlist.module.css"
import { useAppSelector } from "@/hooks/store"
import { useClientStateDispatch } from "@/hooks/useClientStateDispatch"
import { toast } from "sonner"
import BookTopModal from "@/components/BookTopModal"

interface Props {
    book: Book
}

export default function AddToFinishedList({ book }: Props) {
    const { setPendingBooks, setFinishedBooks } = useClientStateDispatch()
    const pendingBooks = useAppSelector((state) => state.pendingBooks)
    const finishedBooks = useAppSelector((state) => state.finishedBooks)

    const handleClick = () => {
        if (pendingBooks.includes(book.ISBN)) {
            setPendingBooks(book.ISBN)
            toast(<BookTopModal book={book} text="ADD_FINISH"/>, {
                duration: 3000
            })
        } else {
            if (finishedBooks.includes(book.ISBN)) {
                toast(<BookTopModal book={book} text="REMOVE_FINISH"/>, {
                    duration: 3000
                })
            } else {
                toast(<BookTopModal book={book} text="ADD_FINISH"/>, {
                    duration: 3000
                })
            }
        }
        setFinishedBooks(book.ISBN)
    }

    return (
        <button className={`${styles.add} ${finishedBooks.includes(book.ISBN) && styles.added}`} 
        onClick={handleClick} title={finishedBooks.includes(book.ISBN) ? "Remover de la lista de libros leidos" : "Agregar a la lista de libros leidos"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="45" viewBox="0 -960 960 960" width="45" fill="rgb(255,255,255)">
                <path d="M378-246 154-470l43-43 181 181 384-384 43 43-427 427Z">
                </path>
            </svg>
        </button>
    )
}