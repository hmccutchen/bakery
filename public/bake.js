
 mcounter = 0;


class Muffins{

  constructor(price, description){

this.price = price;
this.description = description;
this.amount = mcounter += 1;

  }

}
newMuffin = new Muffins(1, "corn");



var muffin = document.getElementById("corn-muffin");
muffin.addEventListener("click", function(){
console.log(newMuffin.amount);
console.log(newMuffin.description);



})

var blueMuffin = document.getElementById("blue-muffin");

blueMuffin.addEventListener("click", function(){
  bmuffin = new Muffins(1, "blue");
  console.log(bmuffin.amount);
  console.log(bmuffin.description);
})


var strawMuffin = document.getElementById("straw-muff");
strawMuffin.addEventListener("click", function(){
  smuffin = new Muffins(1, "strawberry");
  console.log(smuffin.amount);
  console.log(smuffin.description);
})


var chocMuff = document.getElementById("choc-muffin");

chocMuff.addEventListener("click", function(){

cMuff = new Muffins(1, "chocolate!");

console.log(cMuff.amount);

console.log(cMuff.description);

})












































































































