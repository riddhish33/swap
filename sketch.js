var a=prompt("enter first number")
var b=prompt("enter second number")


function setup() {
  var b1=createButton("click here to swap")
  b1.mousePressed(swap)
}

function draw() {
  background(220);
}
function swap(){
  [a,b]=[b,a]
  console.log("a after swaping"+a)
  console.log("b after swaping"+b)
}