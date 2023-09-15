import GenreSelect from "./GenreSelect"
import BookSearchInput from "./BookSearchInput"
import styles from "../styles/pagenav.module.css"

interface Props {
    genres: string[]
}

export default function PageNav({ genres }: Props) {
    return (
        <nav className={styles.nav}>
            <BookSearchInput/>
            <GenreSelect genres={genres}/>
        </nav>
    )
}