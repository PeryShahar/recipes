import Image from 'next/image'
import Link from 'next/link'

import { recipes } from '../data/recipes'
import Navbar from '@/components/Navbar'
import styles from './page.module.css'



export default function Home() {

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>OUR RECIPES</h1>
      <Navbar />
      <div className={styles.recipeGrid}>
        {recipes.map(recipe => {
          return (
            <Link key={recipe.id} className={styles.recipeItem} href={recipe.link}>
              <Image src={recipe.img} alt='recipe-img' width='300' height='300' />
              <p className={styles.recipeTitle}>{recipe.title}</p>
            </Link>
          )
        })}
      </div>
    </main >
  )
}
