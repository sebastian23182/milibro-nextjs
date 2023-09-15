import data from "../books.json"
import Client from "./client"
import { type Book } from '@/app/types'
import styles from '../styles/page.module.css'
import ScrollUpButton from "@/icons/ScrollUpButton"

const books: Book[] = data.library.map((data) => data.book)
const genres: Book["genre"][] = Array.from(new Set(books.map((book) => book.genre)))

export default function Home() {
  return (
    <div>
      <div className={styles.background}></div>
      <header className={styles.header}>
        <a href="/">
          <h2>📚 Milibro</h2>
        </a>
      </header>
      <main className={styles.main}>
          <Client books={books} genres={genres}/>
      </main>
      <footer>
        <ScrollUpButton/>
      </footer>
    </div>
  )
}
