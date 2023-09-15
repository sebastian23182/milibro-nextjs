import styles from "../styles/generalinfo.module.css"
import BooksLists from "./BooksLists"
import { type Book } from "@/app/types"

interface Props {
    books: Book[]
}

export default function GeneralInfo({ books }: Props) {
    return (
        <section className={styles.container}>
            <h1>A leer!</h1>
            <p>Explora nuevos y emocionantes mundos literarios llevando registro de ello, todo a tu ritmo sin perderte de nada, agrega
            libros a tu lista de espera, marcalos como terminados, busca libros acorde a los generos que te interesan, que el ultimo lugar donde te pierdas
            sea en el pais de las maravillas.
            </p>
            <BooksLists books={books}/>
        </section>
    )
}