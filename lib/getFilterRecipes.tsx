import Link from "next/link"
import Image from 'next/image'

import { recipes } from "@/data/recipes"
import styles from '@/app/page.module.css'


export default function filterRecipesByCategory(category?: string) {
  const filterRecipes = category ? recipes.filter(recipe => recipe.category.includes(category)) : recipes

  return (
    <main className={styles.main}>
      <div className={styles.recipe_grid}>
        {filterRecipes.map(recipe => {
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