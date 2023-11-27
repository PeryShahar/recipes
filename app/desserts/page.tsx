import filterRecipesByCategory from '@/app/lib/getFilterRecipes'

export default function Desserts() {
    const dessertsRecipes = filterRecipesByCategory('Dessert')

    return dessertsRecipes;
}
