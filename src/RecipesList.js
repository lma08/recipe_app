function RecipesList ({id, label, image, calories, mealType, cuisineType, ingredients}) {
    return(
        <div className="recipeListCon">
            <div className="listContainer">
                <h2>{label}</h2>
            </div>
            <div className="textContainer">
                <div className="listContainer">
                    <p><strong>Meal Type:</strong> {mealType}</p>
                    <p><strong>Cuisine:</strong> {cuisineType}</p>
                    <p><strong>Calories:</strong> {calories.toFixed()}</p>
                    <img src={image} alt='food'/>
                </div>
                <div className="listContainer">
                    <ul><strong>Ingredients:</strong>
                        {ingredients.map ((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default RecipesList;