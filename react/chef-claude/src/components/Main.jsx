import { useState } from "react";
import RecipePrompt from "./RecipePrompt";

function Main() {
    const INGREDIENTS = ["Chicken", "Oregano", "Tomatoes"];
    const [ingredient, setIngredient] = useState(INGREDIENTS);
    

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const newIngredient = formData.get("ingredient");

        setIngredient(prevIngredient => [...prevIngredient, newIngredient]);
        event.currentTarget.reset()
        
        console.log(ingredient)

    }

    const ingredientsListItems = ingredient.map(item => (
        <li key={item}>{item}</li>
    ))

    return (
        <main>
            <div className="form-wrapper">
                <form className="form" action="" method="" onSubmit={handleSubmit}>
                    <input className="form-input" type="text" placeholder="e.g. oregano" name="ingredient" />
                    <button className="form-submit"><span>+</span> Add Ingredient</button>
                </form>
            </div>

            <ul>
                {ingredientsListItems}
            </ul>

            {ingredient.length > 1 && <RecipePrompt />}
        </main>
    );
}

export default Main;