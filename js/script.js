const searchForm = document.querySelector(".search-form");
const navbar = document.querySelector(".navbar");


/* buttons */

const searchBtn = document.querySelector("#search-btn");
const menuBtn = document.querySelector("#menu-btn");



const card = document.querySelectorAll("#card")
const cartItem = document.querySelector(".cart-items-container");
const btnAdd = document.querySelectorAll("#add-btn")
const cartBtn = document.querySelector("#cart-btn");



function cartToggle() {
    cartBtn.addEventListener('click', function () {
        cartItem.classList.toggle("active")
        document.addEventListener('click', function(e){
            if (!e.composedPath().includes(cartBtn) &&
            !e.composedPath().includes(cartItem)) {
            cartItem.classList.remove("active");
        }
        })
       
    })
        
    }
cartToggle();




class Shopping{
    constructor(title, price, image) {
        this.title = title;
        this.price = price;
        this.image = image
    }
}


for (let i = 0; i < card.length; i++) {
    btnAdd[i].addEventListener('click', function (e) {
    
       let title = card[i].getElementsByClassName("title")[0].textContent;
        let price = card[i].getElementsByClassName("price")[0].textContent;
        let image = card[i].getElementsByClassName("imgs")[0].src;
        
        btnAdd[i].textContent = "In Card";
        btnAdd[i].style.backgroundColor = "green";
        btnAdd[i].classList.add("disabled");

        let shopping = new Shopping(title, price, image);
        let ui = new UI();

        ui.addToCart(shopping);
        ui.removeCart()    
   e.preventDefault(); 
  })
}



class UI {
    removeCart(){
    let btnRemove = document.querySelectorAll("#removebutton");
 
    for (let i = 0; i < btnRemove.length; i++) {
       btnRemove[i].addEventListener('click', function(){
        this.parentElement.parentElement.remove(); 
        btnAdd[i].textContent = "Add To Card";
        btnAdd[i].style.backgroundColor = "#0e0e0e";
        btnAdd[i].classList.add("disabled");
       }) 
    }
}

    addToCart(shopping) {
        const listItem = document.createElement("div");
        listItem.classList = "row-list";

        listItem.innerHTML =
            `
<div class="cart-item">
<i id="removebutton" class="fas fa-times"></i>
<img src="${shopping.image}" alt="menu" />
<div class="content">
    <h3>${shopping.title}</h3>
<div class="price">${shopping.price}</div> 
</div>
</div>
`
cartItem.appendChild(listItem)
    }
}




 

searchBtn.addEventListener('click', function () {
    searchForm.classList.toggle('active')
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(searchBtn) &&
            !e.composedPath().includes(searchForm)) {
            searchForm.classList.remove("active");
        }
    })
});




menuBtn.addEventListener("click", function () {
    navbar.classList.toggle('active')
    document.addEventListener("click", function (e) {
        if (!e.composedPath().includes(menuBtn) &&
            !e.composedPath().includes(navbar)) {
            navbar.classList.remove("active");
        }
    })
});

