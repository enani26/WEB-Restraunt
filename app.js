let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Chicken Ranch Pizza',
        image: 'pizza5.jpg',
        price: 9.00
    },
    {
        id: 2,
        name: 'Chicken BBQ',
        image: 'pizza6.jpg',
        price: 11
    },
    {
        id: 3,
        name: 'Shrimp pizza',
        image: 'pizza7.jpg"',
        price: 13
    },
    {
        id: 4,
        name: 'Sea-Food pizza',
        image: 'pizza8.jpg',
        price: 18
    },
    {
        id: 5,
        name: 'Pepperoni pizza',
        image: 'pizza9.jpeg',
        price: 22
    },
    {
        id: 6,
        name: 'Corn Tikki-Spicy fried aloo',
        image: 'snacks1.jpg',
        price: 15
    },
    {
        id: 7,
        name: 'Bread besan toast',
        image: 'snacks2.jpg',
        price: 35
    },{
        id: 8,
        name: 'Healthy soya nugget snacks',
        image: 'snacks3.jpg',
        price: 20
    },
    {
        id: 9,
        name: 'Tandoori soya chunks',
        image: 'snacks4.jpg',
        price: 30
    },
    {
        id: 10,
        name: 'Single cup Brew',
        image: 'drink1.jpg',
        price: 7
    },
    {
        id: 11,
        name: 'Caffe Americano',
        image: 'drinks2.jpg',
        price: 9
    },
    {
        id: 12,
        name: 'Caramel Macchiato',
        image: 'drinks3.jpg',
        price: 15
    },
    {
        id: 13,
        name: 'Standard black coffee',
        image: 'drink4.jpg',
        price: 8
    }


];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="../IMAGES/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}