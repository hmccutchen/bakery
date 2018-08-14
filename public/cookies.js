
 cCounter = 0;

class Cookie{
  constructor(price, description){

this.price = price;
this.description = description;
this.amount = cCounter += 1;

  }

}


var chocCookie = document.getElementById("choc-cookie");

chocCookie.addEventListener("click", function(){

choco = new Cookie(1, "chocolate");
console.log(choco.amount);
console.log(choco.description);

})

var oat = document.getElementById("oatmeal");
oat.addEventListener("click", function(){

  oats = new Cookie(1, "oatmeal");
  console.log(oats.amount);
  console.log(oats.description);
})

var ginger = document.getElementById("ginger-cookie");
ginger.addEventListener("click", function(){

ging = new Cookie(1, "ginger");

console.log(ging.amount);
console.log(ging.description);

})
