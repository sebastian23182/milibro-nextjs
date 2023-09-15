import styles from "../styles/listofbooks.module.css"
import Image from "next/image"
import { type Book } from "@/app/types"
import { useClientStateDispatch } from "@/hooks/useClientStateDispatch"
import { useAppSelector } from "@/hooks/store"

interface Props {
    booksList: Book[]
}

export default function ListOfBooks({ booksList }: Props) {
    const { setBookAnimation, setBookID, setBookInformationView, setBookDragID, setBookLoadingSkeleton } = useClientStateDispatch()
    const bookInformationView = useAppSelector((state) => state.bookInformationView)

    const handleBookView = (id: Book["ISBN"]) => {
        setBookLoadingSkeleton(true)
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })   
        setBookID(id)
        setBookInformationView(true) 
        setBookAnimation(true)    
        setTimeout(() => {
            setBookAnimation(false) 
        }, 250);  
    }

    const handleBookDrag = (id: Book["ISBN"]) => {
        setBookDragID(id)
    }

    return (
        <ul className={bookInformationView ? styles.view : styles.ul}>
            {booksList.map((book) => (
                <li key={book.ISBN} title={book.title} className={styles.li} 
                onDragStart={handleBookDrag.bind(null, book.ISBN)} onClick={handleBookView.bind(null, book.ISBN)} draggable="true">
                    <figure>
                    <Image alt={book.title} 
                        src={book.cover}
                        width={110}
                        height={160}
                        quality={50}
                        loading="lazy"
                        />
                    </figure>
                </li>
            ))}
      </ul>
    )
}