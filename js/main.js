//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
document.querySelector('button').addEventListener('click', getDrink)
function getDrink(){
  const drink = document.querySelector('input').value
  fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
  .then(res => res.json()) // parse response as JSON
  .then(data => {
    console.log(data.drinks)
      let num = 0
      document.querySelector('h3').innerText = data.drinks[num].strInstructions
      document.querySelector('img').src = data.drinks[num].strDrinkThumb
      document.querySelector('h2').innerText = data.drinks[num].strDrink
      document.querySelector('p').innerText = data.drinks[num].strAlcoholic
  
  document.querySelector('#forwardBtn').addEventListener('click', goForward)
  document.querySelector('#backBtn').addEventListener('click', goBack)
  
  function goForward(){
    num++
    document.querySelector('h3').innerText = data.drinks[num].strInstructions 
      document.querySelector('img').src = data.drinks[num].strDrinkThumb
      document.querySelector('h2').innerText = data.drinks[num].strDrink
      document.querySelector('p').innerText = data.drinks[num].strAlcoholic
}

  function goBack(){
    if(num > 0){
      num--
      document.querySelector('h3').innerText = data.drinks[num].strInstructions
      document.querySelector('img').src = data.drinks[num].strDrinkThumb
      document.querySelector('h2').innerText = data.drinks[num].strDrink
      document.querySelector('p').innerText = data.drinks[num].strAlcoholic
    }
  }
     

  })
  .catch(err => {
      console.log(`error ${err}`)
  });
}




 