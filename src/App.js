import { useEffect, useState } from 'react';
import './App.css';
import RecipesList from './RecipesList';
import backgroundVideo from './video.mp4';

function App() {

  const myId = 'ed35a06d';
  const myKey = 'a5071a91eb5e73a0ad6cd8d5c1089fbf';

  const [myRecipe, setMyRecipe] = useState([]);
  const [mySearch, setMySearch] = useState(``);
  const [enteredSearch, setEnteredSearch] = useState('random')

  useEffect ( () => {
    const myRecipe = async() => {
      const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${enteredSearch}&app_id=${myId}&app_key=${myKey}&imageSize=SMALL&random=true`);
      const data = await response.json();
      setMyRecipe(data.hits);
    }
    myRecipe()
  }, [enteredSearch])

  const myRecipeSearch = (e) => {
    setMySearch(e.target.value);
  }

  const findRecipe = (e) => {
    e.preventDefault();
    setEnteredSearch(mySearch);
  }

  return (
    <div>
      <div className='container'>
        <video autoPlay loop muted>
          <source src={backgroundVideo} type='video/mp4'/>
        </video>
        <h1>Recipes for all occasions</h1>
      </div>
      <div className='container'>
        <form onSubmit={findRecipe}>
          <input className='search' placeholder='Enter the ingredients...' onChange={myRecipeSearch} value={mySearch}/>
        </form>
        <button onClick={findRecipe}>
            <img className='icon' src="https://img.icons8.com/metro/26/null/search.png" alt='find icon'/>
        </button>
      </div>
      <div className='listContainer'>
        {myRecipe.map ((element, index) => (
          <RecipesList key={index}
            label={element.recipe.label}
            image={element.recipe.image}
            calories={element.recipe.calories}
            mealType={element.recipe.mealType}
            cuisineType={element.recipe.cuisineType}
            ingredients={element.recipe.ingredientLines}
            />
        ))}
      </div>
    </div>
  );
}

export default App;
