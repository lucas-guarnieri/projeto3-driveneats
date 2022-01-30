
let dish_choice;
let drink_choice;
let dessert_choice;
let dish_price
let drink_price
let dessert_price
let user_name
let user_adress
let choice_dish = false
let choice_drink = false
let choice_dessert = false

function selectDish(dish, title, price){

    const selected = document.querySelector(".dishes .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dish.classList.add("selected");
    dish_choice = title;
    dish_price = price;
    choice_dish = true;
    isReady();

}

function selectDrink(drink, title, price){

    const selected = document.querySelector(".drinks .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    drink.classList.add("selected");
    drink_choice = title;
    drink_price = price;
    choice_drink = true;
    isReady();

}

function selectDessert(dessert, title, price){

    const selected = document.querySelector(".desserts .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dessert.classList.add("selected");
    dessert_choice = title
    dessert_price = price;
    choice_dessert = true;
    isReady();
}

function isReady(){
    precoTotal = document.querySelector(".dishes .selected").getElementsByClassName("product__price");
    if (choice_dish && choice_drink && choice_dessert){
        const waiting = document.querySelector(".waitingButton");
        waiting.classList.add("hidden");
        const ready = document.querySelector(".readyButton");
        ready.classList.remove("hidden");
    }
}

function getAdditionalInfos(){
    user_name = prompt("Qual é o seu nome?");
    user_adress = prompt("Qual é o endereço de entrega?");
    alert(user_name);

}