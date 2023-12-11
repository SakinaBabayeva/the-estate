const products =document.getElementById("products");
const pages=document.getElementById ("page");


let page=1;
let limit=3;



async function getProducts(){
   let skip=(page-1) * limit;
   const response=await axios.get(`https://65680f8f9927836bd97407de.mockapi.io/products?page=${page}&limit=${limit}&skip=${skip}`);
   db=response.data;
   console.log(db);
   db.map(item=>{
    const box=document.createElement ("div");
    box.className=("boxDiv");
    box.innerHTML=`
    <p>${item.title}</p>;
    <img src=${item.image} alt="">
    <button onclick="addtocart(${item.id})">addtocart</button>
    
    `
    products.appendChild (box);

   })
   page++;
};
pages.addEventListener('click',getProducts);

function addtocart(id) {
    const cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.push (db.find(item=>item.id==id))
    localStorage.setItem('cart',JSON.stringify(cart))
    
}

window.onload=()=>{
    getProducts()
}