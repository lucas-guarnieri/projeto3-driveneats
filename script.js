
let dish_choice;
let drink_choice;
let dessert_choice;
let dish_price
let drink_price
let dessert_price
let user_name
let user_address
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
    const nameTemp = document.querySelector(".hiddenUi__name");
    nameTemp.innerHTML = user_name;

    user_address = prompt("Qual é o endereço de entrega?");
    const adressTemp = document.querySelector(".hiddenUi__address");
    adressTemp.innerHTML = user_address;

    const dishTemp = document.querySelector(".hiddenUi__dish");
    dishTemp.innerHTML = dish_choice;

    const dishPriceTemp = document.querySelector(".hiddenUi__dishPrice");
    dishPriceTemp.innerHTML = dish_price.toFixed(2);

    const drinkTemp = document.querySelector(".hiddenUi__drink");
    drinkTemp.innerHTML = drink_choice;

    const drinkPriceTemp = document.querySelector(".hiddenUi__drinkPrice");
    drinkPriceTemp.innerHTML = drink_price.toFixed(2);

    const dessertTemp = document.querySelector(".hiddenUi__dessert");
    dessertTemp.innerHTML = dessert_choice;

    const dessertPriceTemp = document.querySelector(".hiddenUi__dessertPrice");
    dessertPriceTemp.innerHTML = dessert_price.toFixed(2);
    
    const totalSumTemp = document.querySelector(".hiddenUi__totalSum");
    totalSumTemp.innerHTML = `R$ ${(dish_price + drink_price + dessert_price).toFixed(2)}`;

    (document.querySelector(".hiddenUi")).classList.remove("hidden");

  

}