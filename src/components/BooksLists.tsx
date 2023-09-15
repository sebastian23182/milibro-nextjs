import PendingBooks from "./PendingBooks"
import FinishedBooks from "./FinishedBooks"
import styles from "../styles/bookslists.module.css"
import { type Book } from "@/app/types"

interface Props {
    books: Book[]
}

export default function BooksLists({ books }: Props) {
    return (
        <div className={styles.container}>
            <PendingBooks books={books}/>
            <FinishedBooks books={books}/>
        </div>
    )
}