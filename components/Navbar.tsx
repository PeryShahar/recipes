import Link from "next/link";
import styles from './navbar.module.css'


export default function Navbar() {
    return (
        <nav className={styles.nav}>
            <Link href='/'>Lunch</Link>
            <Link href='/'>Soups</Link>
            <Link href='/'>Spreads</Link>
            <Link href='/'>Desserts</Link>
        </nav>
    )
}