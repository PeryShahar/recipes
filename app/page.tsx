import filterRecipesByCategory from '@/app/lib/getFilterRecipes'

export default function AllRecipes() {
  const spreadRecipes = filterRecipesByCategory()


  return spreadRecipes;
}
