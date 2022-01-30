
let dishChoice;
let drinkChoice;
let dessertChoice;
let dishPrice
let drinkPrice
let dessertPrice
let userName
let userAddress
let dishIsChosen = false
let drinkIsChosen = false
let dessertIsChosen = false

function selectDish(dish, title, price){

    const selected = document.querySelector(".dishes .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dish.classList.add("selected");
    dishChoice = title;
    dishPrice = price;
    dishIsChosen = true;
    isReady();

}

function selectDrink(drink, title, price){

    const selected = document.querySelector(".drinks .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    drink.classList.add("selected");
    drinkChoice = title;
    drinkPrice = price;
    drinkIsChosen = true;
    isReady();

}

function selectDessert(dessert, title, price){

    const selected = document.querySelector(".desserts .selected");
    if(selected !== null){
        selected.classList.remove("selected");
    }
    dessert.classList.add("selected");
    dessertChoice = title
    dessertPrice = price;
    dessertIsChosen = true;
    isReady();
}

function isReady(){
    precoTotal = document.querySelector(".dishes .selected").getElementsByClassName("product__price");
    if (dishIsChosen && drinkIsChosen && dessertIsChosen){
        const waiting = document.querySelector(".waitingButton");
        waiting.classList.add("hidden");
        const ready = document.querySelector(".readyButton");
        ready.classList.remove("hidden");
    }
}

function getAdditionalInfos(){


    let totalSum = dishPrice + drinkPrice + dessertPrice;
   
    userName = prompt("Qual é o seu nome?");
    const nameTemp = document.querySelector(".hiddenUi__name");
    nameTemp.innerHTML = userName;

    userAddress = prompt("Qual é o endereço de entrega?");
    const adressTemp = document.querySelector(".hiddenUi__address");
    adressTemp.innerHTML = userAddress;

    const dishTemp = document.querySelector(".hiddenUi__dish");
    dishTemp.innerHTML = dishChoice;

    const dishPriceTemp = document.querySelector(".hiddenUi__dishPrice");
    dishPriceTemp.innerHTML = dishPrice.toFixed(2).replace('.',',');

    const drinkTemp = document.querySelector(".hiddenUi__drink");
    drinkTemp.innerHTML = drinkChoice;

    const drinkPriceTemp = document.querySelector(".hiddenUi__drinkPrice");
    drinkPriceTemp.innerHTML = drinkPrice.toFixed(2).replace('.',',');

    const dessertTemp = document.querySelector(".hiddenUi__dessert");
    dessertTemp.innerHTML = dessertChoice;

    const dessertPriceTemp = document.querySelector(".hiddenUi__dessertPrice");
    dessertPriceTemp.innerHTML = dessertPrice.toFixed(2).replace('.',',');
    
    const totalSumTemp = document.querySelector(".hiddenUi__totalSum");
    totalSumTemp.innerHTML = `R$ ${(totalSum).toFixed(2).replace('.',',')}`;

    (document.querySelector(".hiddenUi")).classList.remove("hidden");
}

function closeOrder(){
    let totalSum = dishPrice + drinkPrice + dessertPrice;
    const whatsappMessage = `Olá, gostaria de fazer o pedido:\n- Prato: ${dishChoice}\n- Bebida: ${drinkChoice}\n- Sobremesa: ${dessertChoice}\n Total: R$ ${(totalSum).toFixed(2).replace('.',',')}\n\n Nome: ${userName}\n Endereço: ${userAddress}`;
    window.open(`https://wa.me/5519998215333?text=${encodeURIComponent(whatsappMessage)}`);
}

function cancel(){
    (document.querySelector(".hiddenUi")).classList.add("hidden");
}