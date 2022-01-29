let precoTotal = 0;
let dish = null;
let drink = null;
let dessert = null;
let name = null;
let adress = null;
let choice_dish = false
let choice_drink = false
let choice_dessert = false

function selectDish(dish){

    const selected = document.querySelector(".dishes .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dish.classList.add("selected");
    choice_dish = true;
    isReady();

}

function selectDrink(drink){

    const selected = document.querySelector(".drinks .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    drink.classList.add("selected");
    choice_drink = true;
    isReady();

}

function selectDessert(dessert){

    const selected = document.querySelector(".desserts .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dessert.classList.add("selected");
    choice_dessert = true;
    isReady();
}

function isReady(){
    if (choice_dish && choice_drink && choice_dessert){
        const waiting = document.querySelector(".waitingButton");
        waiting.classList.add("hidden");
        const ready = document.querySelector(".readyButton");
        ready.classList.remove("hidden");
    }
}