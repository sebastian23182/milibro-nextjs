import ListOfGenres from "./ListOfGenres"
import styles from "../styles/genreselect.module.css"
import { useAppSelector } from "@/hooks/store"
import { useClientStateDispatch } from "@/hooks/useClientStateDispatch"

interface Props {
    genres: string[]
}

export default function GenreSelect({ genres }: Props) {
    const genreFilter = useAppSelector((state) => state.genreFilter)
    const { setGenreFilter, setBookInformationView, setBookID } = useClientStateDispatch()
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setGenreFilter(e.target.value);
        setBookInformationView(false);
        setBookID("")
    }

    return (
        <select value={genreFilter} onChange={handleChange} className={styles.select}>
            <option value="">Todos</option>
            <ListOfGenres genres={genres}/>
        </select>
    )
}