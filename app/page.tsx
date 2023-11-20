import filterRecipesByCategory from '@/lib/getFilterRecipes'

export default function AllRecipes() {
  const spreadRecipes = filterRecipesByCategory()


  return spreadRecipes;
}
