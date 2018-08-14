
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

var almond = document.getElementById("almond-cookie");
almond.addEventListener("click", function(){
  all = new Cookie(1, "almond");
  console.log(all.amount);
  console.log(all.description);
})

var coco = document.getElementById("coco-cookie");
coco.addEventListener("click", function(){
  coca = new Cookie(1, "coconut");
  console.log(coca.amount);
  console.log(coca.description);
})



var bw = document.getElementById("bw-cookie");
bw.addEventListener("click", function(){
  bwhite = new Cookie(1, "black&white");
  console.log(bwhite.amount);
  console.log(bwhite.description);
})



