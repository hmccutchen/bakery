
var counter = 0;
class Cake {
  constructor(price, description){
this.price = price;
this.description = description;
this.amount = counter += 1;

  }
}


var pinapple = document.getElementById("pine-cake");
pinapple.addEventListener("click", function(){

  pine = new Cake(2, "pinapple");
  console.log(pine.amount);
  console.log(pine.description);
  document.getElementById("number").innerHTML = pine.amount;

})


var birth = document.getElementById("b-cake");
birth.addEventListener("click", function(){

  bday = new Cake(1, "Birthday cake");
  console.log(bday.amount);
  console.log(bday.description);
  document.getElementById("number").innerHTML = bday.amount;
})



var coco = document.getElementById("coco-cake");
coco.addEventListener("click", function(){

  coconut = new Cake(1, "coconut cake");
  console.log(coconut.amount);
  console.log(coconut.description);
  document.getElementById("number").innerHTML = coconut.amount;
})




var cheese = document.getElementById("cheese-cake");
cheese.addEventListener("click", function(){

  cheecake = new Cake(1, "Cheese cake");
  console.log(cheecake.amount);
  console.log(cheecake.description);
  document.getElementById("number").innerHTML = cheesecake.amount;
})

var red = document.getElementById("red-velvet");
red.addEventListener("click", function(){

  redv = new Cake(1, "red-velvet");
  console.log(redv.amount);
  console.log(redv.description);
  document.getElementById("number").innerHTML = redv.amount;
})


var carrot = document.getElementById("carrot-cake");

carrot.addEventListener("click", function(){

  care = new Cake(1, "carrot-cake");
  console.log(care.amount);
  console.log(care.description);
  document.getElementById("number").innerHTML = care.amount;
})
