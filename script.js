let precoTotal = 0;
let dish = null;
let drink = null;
let dessert = null;
let name = null;
let adress = null;

function selectDish(dish){

    const selected = document.querySelector(".dishes .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dish.classList.add("selected");

}

function selectDrink(drink){

    const selected = document.querySelector(".drinks .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    drink.classList.add("selected");

}

function selectDessert(dessert){

    const selected = document.querySelector(".desserts .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dessert.classList.add("selected");

}