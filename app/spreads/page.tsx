import filterRecipesByCategory from '@/app/lib/getFilterRecipes'

export default function Spreads() {
    const spreadRecipes = filterRecipesByCategory('Spreads')

    return spreadRecipes;
}
