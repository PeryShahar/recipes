import Image from 'next/image'
import Link from 'next/link'
import filterRecipesByCategory from '@/lib/getFilterRecipes'

import styles from '../page.module.css'

export default function Spreads() {
    const lunchRecipes = filterRecipesByCategory('Spreads')

    return (
        <main className={styles.main}>
            <div className={styles.recipe_grid}>
                {lunchRecipes.map(recipe => {
                    return (
                        <Link key={recipe.id} className={styles.recipe_item} href={recipe.link}>
                            <Image src={recipe.img} alt='recipe-img' width='300' height='300' />
                            <p className={styles.recipe_title}>{recipe.title}</p>
                        </Link>
                    )
                })}
            </div>
        </main >

    )
}
