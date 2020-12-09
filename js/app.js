import 'bootstrap/dist/js/bootstrap';
import '../sass/style.scss';

//Variables


const btnShopping = document.querySelectorAll('.btn-outline-success');
const shoppingCartItems = document.querySelector('.shopping-cart-items');
const shoppingCartDropdown = document.querySelector('.shopping-cart');
const totalMoney = document.querySelector('.lighter-text');
const badge = document.querySelector('.badge');
const shoppingCartBtn = document.querySelector('i');

let money = [];

// Functions

btnShopping.forEach(btn => btn.addEventListener('click', () => { shoppingCartDropdown.classList.add('activeDropdown') }));


btnShopping.forEach(btn => btn.addEventListener('click', (e) => {

        const shoppingCart = new Object;
        shoppingCart.value = parseFloat(e.target.parentNode.children[2].children[0].innerText);
        shoppingCart.name = e.target.parentNode.children[1].children[0].innerText;
        shoppingCart.img = e.target.parentNode.children[0].src;
    
        console.log(shoppingCart.img);
    
      
        shoppingCartItems.innerHTML +=
            `
          <li class="clearfix">
            <img src=${shoppingCart.img} />
            <span class="item-name">${shoppingCart.name}</span>
            <span class="item-price">${shoppingCart.value}$</span>
          </li>
          `;
    
    
        money.push(shoppingCart.value);
        console.log(money);
    
        var total = money.reduce(function (a, b) {
            return a + b;
        });
        console.log(total);
    
        totalMoney.innerText = `Total: ${total}$`;
        badge.innerText = `${money.length}`;
    
}

));


shoppingCartBtn.addEventListener('click', () => {
    shoppingCartDropdown.classList.toggle('activeDropdown')
});


