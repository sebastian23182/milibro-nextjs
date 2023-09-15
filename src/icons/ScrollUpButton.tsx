"use client"

import styles from "../styles/scrollupbutton.module.css"

export default function ScrollUpButton() {
    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }
    return (
        <svg xmlns="http://www.w3.org/2000/svg" className={styles.button} onClick={handleScroll} viewBox="0 0 24 24" width="48" height="48">
            <path d="M11.9997 10.8284L7.04996 15.7782L5.63574 14.364L11.9997 8L18.3637 14.364L16.9495 15.7782L11.9997 10.8284Z" fill="rgba(0,0,0,0.7)">
            </path>
        </svg>
    )
}