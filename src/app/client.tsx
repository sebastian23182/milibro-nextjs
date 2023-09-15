"use client"

import styles from '../styles/client.module.css'
import PageNav from "@/components/PageNav"
import { type Book } from "./types"
import { Providers } from '@/store/providers'
import BooksSection from '@/components/BooksSection';

interface Props {
    books: Book[]
    genres: string[]
}

export default function Client({ books, genres }: Props) {
    return (
        <Providers>
            <PageNav genres={genres}/>
            <div className={styles.separator}>
                <hr className={styles.line}></hr>
            </div>
            <BooksSection books={books}/>
        </Providers>                       
    )
}