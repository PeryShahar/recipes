import Link from "next/link";
import styles from './navbar.module.css'

const links = [
    { name: 'All', href: '/' },
    { name: 'Breakfast', href: '/breakfast' },
    { name: 'Lunch', href: '/lunch' },
    { name: 'Soups', href: '/soups' },
    { name: 'Spreads', href: '/spreads' },
    { name: 'Desserts', href: '/desserts' },
    { name: 'Beverages', href: '/beverages' },
];

export default function NavLinks() {
    return (
        <nav className={styles.nav}>
            {links.map((link) => {
                return (
                    <Link
                        key={link.name}
                        href={link.href}>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}
