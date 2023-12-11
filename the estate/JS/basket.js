const products = document.getElementById("products");

function getCart () {
    products.innerHTML = ''
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.map((item, index) => {
        let card = document.createElement("div");
        card.className = "cardBox";
        card.innerHTML = `
                  <img src="${item.thumbnail}" alt="">
                  <div class="cardTextBox">
                  p<${item.title}<p;
                  <img src='${item.image} alt=""
                  <button onclick="removeItem(${index})">Delete</button>
                 
                  </div>
                 
              `;
        products.appendChild(card);
      });
}

function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    getCart()
}

window.onload = () => {
    getCart()
}