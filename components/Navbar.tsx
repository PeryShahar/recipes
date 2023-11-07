import Link from "next/link";
import styles from './navbar.module.css'


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href='/'>All</Link>
            <Link href='/lunch'>Lunch</Link>
            <Link href='/soups'>Soups</Link>
            <Link href='/spreads'>Spreads</Link>
            <Link href='/desserts'>Desserts</Link>
        </nav>
    )
}