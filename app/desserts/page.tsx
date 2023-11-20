import filterRecipesByCategory from '@/lib/getFilterRecipes'

export default function Desserts() {
    const dessertsRecipes = filterRecipesByCategory('Dessert')

    return dessertsRecipes;
}
