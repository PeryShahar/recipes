import { recipes } from "@/data/recipes"

export default function filterRecipesByCategory(category:string)  {
    return recipes.filter(recipe => recipe.category.includes(category))
}