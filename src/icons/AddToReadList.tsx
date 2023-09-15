import { type Book } from "@/app/types"
import styles from "../styles/addtoreadlist.module.css"
import { useAppSelector } from "@/hooks/store"
import { useClientStateDispatch } from "@/hooks/useClientStateDispatch"
import { toast } from "sonner"
import BookTopModal from "@/components/BookTopModal"

interface Props {
    book: Book
}

export default function AddToReadList({ book }: Props) {
    const { setPendingBooks, setFinishedBooks } = useClientStateDispatch()
    const pendingBooks = useAppSelector((state) => state.pendingBooks)
    const finishedBooks = useAppSelector((state) => state.finishedBooks)
    
    const handleClick = () => {
        if (finishedBooks.includes(book.ISBN)) { 
            setFinishedBooks(book.ISBN) 
            toast(<BookTopModal book={book} text="ADD_READ"/>, {
                duration: 3000
            })
        } else {
            if (pendingBooks.includes(book.ISBN)) {
                toast(<BookTopModal book={book} text="REMOVE_READ"/>, {
                    duration: 3000
                })
            } else {
                toast(<BookTopModal book={book} text="ADD_READ"/>, {
                    duration: 3000
                })
            }
        }
        setPendingBooks(book.ISBN)
    }

    return (
        <button className={`${styles.add} ${pendingBooks.includes(book.ISBN) && styles.added}`} onClick={handleClick} 
        title={pendingBooks.includes(book.ISBN) ? "Remover de la lista de libros por leer" : "Agregar a la lista de libros por leer"}>
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32" fill="rgb(255,255,255)">
                <path d="M220-80q-24 0-42-18t-18-42v-680q0-24 18-42t42-18h520q24 0 42 18t18 42v680q0 24-18 42t-42 18H220Zm0-60h520v-680h-60v266l-97-56-97 56v-266H220v680Zm0 0v-680 680Zm266-414 97-56 97 56-97-56-97 56Z">
                </path>
            </svg>
        </button>
    )
}