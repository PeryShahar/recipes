import filterRecipesByCategory from '@/lib/getFilterRecipes'

export default function Lunch() {
    const soupsRecipes = filterRecipesByCategory('Soups')

    return soupsRecipes;
}
