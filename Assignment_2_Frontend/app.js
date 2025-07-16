window.addEventListener("load", () => {
  byDefaultDrink();
});

document.getElementById("search-btn").addEventListener("click", (e) => {
  const searchedDrink = document.getElementById("search-bar").value;

  if (searchedDrink != "") {
    drinkAPI(searchedDrink);
  } else {
    emptyInputSearch();
    byDefaultDrink();
  }
});

const drinkAPI = (searchedDrink) => {
  fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchedDrink}`
  )
    .then((res) => res.json())
    .then((data) => {
      if (data["drinks"]) {
        displayDrink(data);
      } else {
        document.getElementById(
          "drink-container"
        ).innerHTML = `<h1>Your searched drink is not Found</h1>`;
      }
    });
};

const emptyInputSearch = () => {
  document.getElementById("emptySearch").innerHTML = `
        <h2 id="red-warning">Type in the search bar!</h2>
    `;

  document.getElementById("search-bar").addEventListener("click", (e) => {
    document.getElementById("red-warning").innerText = "";
  });
};

const displayDrink = (object) => {
  const drinkContainer = document.getElementById("drink-container");
  drinkContainer.innerHTML = "";
  object["drinks"].forEach((drink) => {
    const div = document.createElement("div");
    div.classList.add("drink-card");
    div.innerHTML = `
            <img class="drink-img" src=${drink.strDrinkThumb}  alt="">
            <h2 class="drink-name">${drink.strGlass.slice(0, 14)}</h2>
            <p class="drink-category">Category: ${drink.strCategory.slice(
              0,
              14
            )}</p>
            <p class="drink-instructions">Instructions: ${drink.strInstructions.slice(
              0,
              14
            )}...</p>
            <button class="add-to-cart-btn" onclick="handleAddToCart(this,'${
              drink.strDrinkThumb
            }', '${drink.strGlass}')">Add to Cart</button>
            <button class="details-btn" onclick="showDetails('${drink.strDrink}', '${drink.strDrinkThumb}',  '${drink.strCategory}', '${drink.strAlcoholic}', \`${drink.strInstructions}\`)">Details</button>
        `;
    drinkContainer.appendChild(div);
  });
};

const byDefaultDrink = () => {
  document.getElementById("drink-container").innerHTML = ``;
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a`)
    .then((res) => res.json())
    .then((data) => displayDrink(data));
};

const handleAddToCart = (button, drinkImage, drinkName) => {
  let noOfSelectedCard = parseInt(
    document.getElementById("total-no").innerText
  );
  
  if (button.innerText != "Already Selected" && noOfSelectedCard < 7) {
    const div = document.createElement("div");
    div.classList.add("drink-concise");
    div.innerHTML = `
        <img src=${drinkImage} class="img-concise" alt="">
        <p class="p-concise" >${drinkName}</p>
    `;
    document.getElementById("cart-container").appendChild(div);
    button.innerText = "Already Selected";
    noOfSelectedCard += 1;
    document.getElementById("total-no").innerText = noOfSelectedCard;
  }else {
    alert("You can't add anymore to the cart"); 
  }
};


const showDetails = (title, img, category, alcoholic, instructions) => {
    document.getElementById("modal-title").innerText = title;
    document.getElementById("modal-img").src = img;
    document.getElementById("modal-category").innerText = "Category: " + category;
    document.getElementById("modal-alcoholic").innerText = "Alcoholic: " + alcoholic;
    document.getElementById("modal-instructions").innerText = "Instructions: " +  instructions;

    document.getElementById("drink-modal").style.display = "block";
}


document.querySelector('.close-btn').addEventListener("click", (e) => {
    document.querySelector('#drink-modal').style.display = "none";
})