import styles from "../styles/bookinfo.module.css"
import { type Book } from "@/app/types"
import { useState } from "react"
import ExitBook from "@/icons/ExitBook"
import AddToReadList from "@/icons/AddToReadList"
import AddToFinishedList from "@/icons/AddToFinishedList"
import { useClientStateDispatch } from "@/hooks/useClientStateDispatch"
import { useAppSelector } from "@/hooks/store"
import Image from "next/image"

interface Props {
    bookSelected?: Book
}

export default function BookInfo({ bookSelected }: Props) {
    const [disappearAnimation, setDisappearAnimation] = useState(false)
    const { setBookInformationView, setBookID, setBookLoadingSkeleton } = useClientStateDispatch()
    const bookInformationView = useAppSelector((state) => state.bookInformationView)
    const bookAnimation = useAppSelector((state) => state.bookAnimation)
    const bookLoadingSkeleton = useAppSelector((state) => state.bookLoadingSkeleton)

    const animateDisappear = () => {
        setDisappearAnimation(true);
        setTimeout(() => {
            setBookInformationView(false);
            setDisappearAnimation(false);
            setBookID("");
        }, 200);    
    }

    return bookInformationView && bookSelected &&
        <div className={`${styles.container} ${bookAnimation ? styles.animate : ""}`}>
            <figure onClick={animateDisappear} className={disappearAnimation ? styles.disappear : ""}>
                {bookLoadingSkeleton && <div className={styles.skeleton}></div>}
                <Image className={bookLoadingSkeleton ? styles.bookloading : styles.book} alt={bookSelected.title} 
                src={bookSelected.cover}
                width={450}
                height={600}
                onLoadingComplete={(e) => setBookLoadingSkeleton(false)}
                priority
                /> 
                <ExitBook/>
            </figure>
            <div className={styles.bookinfo}>
                <h3>{bookSelected.title}</h3>
                <p><b>ISBN: </b>{bookSelected.ISBN}</p>
                <p><b>Autor: </b>{bookSelected.author.name}</p>
                <div className={styles.interactions}>
                    <AddToReadList book={bookSelected}/>
                    <AddToFinishedList book={bookSelected}/>
                </div>
                <div className={styles.divisor}></div>
                <p>{bookSelected.synopsis}</p>
            </div>
        </div> 
}