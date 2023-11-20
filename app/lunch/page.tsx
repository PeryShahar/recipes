import filterRecipesByCategory from '@/lib/getFilterRecipes'

export default function Lunch() {
    const lunchRecipes = filterRecipesByCategory('Lunch')

    return lunchRecipes;
}
