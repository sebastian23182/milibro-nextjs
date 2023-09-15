import styles from "../styles/booktopmodal.module.css"
import { type Book } from "@/app/types"
import Image from "next/image"
import Check from "@/icons/Check"
import Trashcan from "@/icons/Trashcan"


interface Props {
    book: Book,
    text: keyof typeof TEXT_OPTIONS
}

const TEXT_OPTIONS = {
    ADD_READ: { text: "Añadido a libros por leer", icon: <Check/>},
    REMOVE_READ: { text: "Eliminado de libros por leer", icon: <Trashcan/> },
    ADD_FINISH: { text: "Añadido a libros leidos", icon: <Check/> },
    REMOVE_FINISH: { text: "Eliminado de libros leidos", icon: <Trashcan/> }
}

export default function BookTopModal({ book, text }: Props) {
    return <div className={styles.container}>
            <Image src={book.cover} alt={book.title} width={60} height={80} priority/>
            <div className={styles.info}>
                <h2>{book.title}</h2>
                <p>{TEXT_OPTIONS[text].text}</p>
            </div>
            <div className={styles.icon}>{TEXT_OPTIONS[text].icon}</div>
        </div>    
}
