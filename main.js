var hyper = document.getElementsByClassName(".hyper");
var normal = document.getElementsByClassName(".normal");
var lazy = document.getElementsByClassName(".lazy");
var large = document.getElementsByClassName(".large");
var medium = document.getElementsByClassName(".medium");
var small = document.getElementsByClassName(".small");
var noShedding = document.getElementsByClassName(".noShedding");
var okWithShedding = document.getElementsByClassName(".okWithShedding");
var btn = $('.button')

btn.on("click",chooseDog);

function chooseDog(){
  if (hyper.checked === true) {
    window.location.href = "dogs.html";
    console.log("chooseDog");

}else if (hyper.checked === true && large.checked === true && okWithShedding.checked === true){
  //dog breed
}else if (hyper.checked === true && medium.checked === true && noShedding.checked === true){
  //dog breed
}else if (hyper.checked === true && medium.checked === true && okWithShedding.checked === true) {
  //dog breed
}else if (hyper.checked === true && small.checked === true && noShedding.checked === true){
  //dog breed
}else if (hyper.checked === true && small.checked === true && okWithShedding.checked === true){
  //dog breed
}else if (normal.checked === true && large.checked === true && noShedding.checked === true){
  //dog breed
}else if (normal.checked === true && large.checked === true && okWithShedding.checked === true){
  //dog breed
}else if (normal.checked === true && medium.checked === true && noShedding.checked === true){
  //dog breed
}else if (normal.checked === true && medium.checked === true && okWithShedding.checked === true){
  //dog breed
}else if (normal.checked === true && small.checked === true && noShedding.checked === true){
  //dog breed
}else if (normal.checked === true && small.checked === true && okWithShedding.checked === true){
  //dog breed
}else if (lazy.checked === true && large.checked === true && noShedding.checked === true){
  //dog breed
}else if (lazy.checked === true && large.checked === true && okWithShedding.checked === true){
  //dog breed
}else if (lazy.checked === true && medium.checked === true && noShedding.checked === true) {
  //dog breed
}else if (lazy.checked === true && medium.checked === true && okWithShedding.checked === true) {
  //dog breed
}else if (lazy.checked === true && small.checked === true && noShedding.checked === true) {
  //dog breed
}else if (lazy.checked === true && small.checked === true && okWithShedding.checked === true) {
  //dog breed
  } else {
  //invalid input
  }
}
