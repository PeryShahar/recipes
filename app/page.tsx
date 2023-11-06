'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import { recipes } from '../data/recipes'

function Navbar() {
  return (
    <>
      <Link href='/'>Lunch</Link>
      <Link href='/'>Soups</Link>
    </>
  )
}

export default function Home() {
  const router = useRouter();


  function handleNavigateToRecipe(recipeLink: string) {
    router.push(recipeLink);

  }

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>OUR RECIPES</h1>
      <Navbar />
      <div className={styles.recipeGrid}>
        {recipes.map(recipe => {
          return (
            <div key={recipe.id} className={styles.recipeItem} onClick={() => handleNavigateToRecipe(recipe.link)}>
              <Image src={recipe.img} alt='recipe-img' width='300' height='300' />
              <p className={styles.recipeTitle}>{recipe.title}</p>
            </div>
          )
        })}
      </div>
    </main >
  )
}
