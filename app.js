const cartvalue= document.getElementById("cart-value")
const cart=document.getElementById("cart")
Totalprice=0;
count=0;
let list=[];
var quantity=0;

const btn = document.querySelectorAll(".button");
const uniqueTitles = new Set();


btn.forEach((clicks) => {
  clicks.addEventListener("click", function() {
    const priceElement = this.parentElement.querySelector("p");
    const priceText = priceElement.textContent;
    const price = parseFloat(priceText.replace("$", ""));

    Totalprice+= price;

    const grandparentDiv = this.parentElement.parentElement;
    const titleElement=grandparentDiv.querySelector("div:nth-Child(1) h3");
    const bookTitle = titleElement.textContent;
    list.push(bookTitle);
    uniqueTitles.add(bookTitle);
  
    count+=1
    cartvalue.innerHTML=count;

    cart.onclick=()=>{

    function count(list) {
      const countMap = {};
      for (const name of list) {
      countMap[name] = (countMap[name] || 0) + 1;
      }
      for (const word in countMap) {
        console.log(`Item name: ${word} - Quantity: ${countMap[word]}`);
      }
    }
      
    count(list);
    dol=parseInt(Totalprice)
    cents=Totalprice*100
    cent=Math.round(cents%100)
    console.log(`The Total amount is ${dol}$ and ${cent} cents`)
    }
  });
});