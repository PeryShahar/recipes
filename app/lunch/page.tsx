import filterRecipesByCategory from '@/app/lib/getFilterRecipes'

export default function Lunch() {
    const lunchRecipes = filterRecipesByCategory('Lunch')

    return lunchRecipes;
}
