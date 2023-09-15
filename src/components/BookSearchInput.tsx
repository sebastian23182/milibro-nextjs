import { useClientStateDispatch } from "@/hooks/useClientStateDispatch";
import styles from "../styles/booksearchinput.module.css"
import { ChangeEvent } from "react";

export default function BookSearchInput() {
    const { setSearchInput } = useClientStateDispatch()
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchInput(e.target.value.toLowerCase())
    }

    return (
        <input type="text" className={styles.search} onChange={handleChange} placeholder="Buscar por titulo"></input>
    )
}