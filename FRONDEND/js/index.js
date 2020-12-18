import {renderResults, results_container} from "./searchView.js";
import {showRecipe} from "./recipeView.js";
import {addShopping} from "./listView.js";

// Page Elements
const input = document.querySelector('.search__field');
const submitBtn = document.querySelector('.search__btn');
const recipeBtn = document.querySelector('.recipe__btn');

const apiKey = "3f777f69-d500-4cf8-9bd2-6bea0c152e0e"; 
const url = "http://localhost:8080/api/recipes";
const endpoint='?title='

// Add AJAX functions here:
const getRecipe = async () => {

    const recipe = input.value;
    const urlToFetch = `${url}${endpoint}`
    try {
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            renderResults(jsonResponse.data.recipes);
        } else {
            throw new Error ('something went wrong!')
        }


    }catch (err){
        console.log(err);
    }





    }


let currentRecipe = {};

const getOneRecipe = async (id) => {
    const recipe_id = id
    const urlToFetch = `${url}/${id}`
    try {
        const response = await fetch(urlToFetch);
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(jsonResponse);
            currentRecipe = jsonResponse.data.recipe;
            showRecipe(jsonResponse.data.recipe);
            //addShopping(jsonResponse.data.recipe);
        } else {
            throw new Error ('something went wrong!')
        }
    }catch (err){
        console.log(err);
    }

    }



    submitBtn.addEventListener('click', getRecipe);

    results_container.addEventListener('click', event =>{
        console.log(event.target.closest('li').id);
        getOneRecipe(event.target.closest('li').id);
    }) 


    
    document.querySelector('.recipe').addEventListener('click',(e)=>{
        if(e.target.closest('button').className === "btn-small recipe__btn"){
            addShopping(currentRecipe);
        }
        
    }
     );

