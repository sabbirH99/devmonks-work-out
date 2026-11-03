function RecipePrompt() {
    return (
        <div className="recipe-prompt">
            <div className="recipe-prompt-content">
                <h2>Ready For A Recipe?</h2>
                <p> You've got enough ingredients! Let Chef Claude
                create a delicious recipe using what you have.</p>
                <button className="generate-recipe">
                    Generate Recipe
                </button>
            </div>
        </div>
    )
}

export default RecipePrompt;