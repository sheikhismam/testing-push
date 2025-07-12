document.getElementById("search-btn").addEventListener("click", (e) => {
    const inputText = document.getElementById("input-box").value;

  if (inputText == "") {
    emptyInputSearch();
  } else {
    mealAPI(inputText);
  }
});


const emptyInputSearch = () => {
  document.getElementById("emptySearch").innerHTML = `
        <h2 id="red-warning">Type in the input box first!</h2>
    `;

    document.getElementById("input-box").addEventListener("click", (e) => {
        document.getElementById("red-warning").innerText = "";
    })
};

const mealAPI = (inputText) => {
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputText}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.meals) {
        document.getElementById("meal-main-container").innerHTML = ``;
        displayMeal(data.meals);
      } else {
        mealNotFound();
      }
    });
};



const displayMeal = (meals) => {
    const mealContainer = document.getElementById("meal-main-container");
    
    meals.forEach( meal => {
        
        let div = document.createElement("div");
        div.classList.add("meal-card");


        div.innerHTML = `
            <img id="meal-img" src=${meal.strMealThumb} alt="">
            <h2 id="meal-title">${meal.strMeal} </h2>
        `
        

        mealContainer.appendChild(div);

        div.addEventListener("click", (e) => {
            document.getElementsByTagName("div")[0].innerHTML = "";
            showMealDetails(meal);
        })
        

    })
}



const mealNotFound = () => {
    const h1 = document.createElement("h1");
    h1.classList.add("no-meal")
    h1.innerText = "No such meal is found";

    document.getElementById("meal-container").appendChild(h1);
}



const showMealDetails = (targetCard) => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // makes it smooth instead of instant
    });
    const div = document.createElement("div");
    div.classList.add("details-meal-card");

    let ingredientsList = "<ul>";
    for(let i = 1; i<=20; i++) {
        const ingredient = targetCard[`strIngredient${i}`];
        if(ingredient && ingredient.trim() !== ""){
            ingredientsList += `<li>${ingredient}</li>`;
        }
        ingredientsList += "</ul>"
    }

    div.innerHTML = `
        <img class="details-meal-img" src=${targetCard.strMealThumb} alt="">
        <h1>${targetCard.strMeal}</h1>
        <h3>Ingredients</h3>
        ${ingredientsList}
    `
    document.getElementsByTagName("div")[0].append(div);
}