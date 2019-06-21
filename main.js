var hyper = document.querySelector(".hyper");
var normal = document.querySelector(".normal");
var lazy = document.querySelector(".lazy");
var large = document.querySelector(".large");
var medium = document.querySelector(".medium");
var small = document.querySelector(".small");
var noShedding = document.querySelector(".noShedding");
var okWithShedding = document.querySelector(".okWithShedding");
var btn = $('.button')

btn.on("click",chooseDog);

function chooseDog(){
if (hyper.checked === true && large.checked === true && noShedding.checked === true) {

  window.location.href = "hyper-large-noShedding.html";
}else if (hyper.checked === true && large.checked === true && okWithShedding.checked === true){

  window.location.href = "hyper-large-shed.html";

}else if (hyper.checked === true && medium.checked === true && noShedding.checked === true){

  window.location.href = "hyper-medium-noShedding.html";
}else if (hyper.checked === true && medium.checked === true && okWithShedding.checked === true) {

  window.location.href = "hyper-medium-shed.html";
}else if (hyper.checked === true && small.checked === true && noShedding.checked === true){

  window.location.href = "hyper-small-noShed.html";
}else if (hyper.checked === true && small.checked === true && okWithShedding.checked === true){

  window.location.href = "hyper-small-shed.html";
}else if (normal.checked === true && large.checked === true && noShedding.checked === true){

  window.location.href = "normal-large-noShed.html";
}else if (normal.checked === true && large.checked === true && okWithShedding.checked === true){

  window.location.href = "normal-large-shed.html";
}else if (normal.checked === true && medium.checked === true && noShedding.checked === true){
  //dog breed
  window.location.href = "normal-medium-noShed.html";
}else if (normal.checked === true && medium.checked === true && okWithShedding.checked === true){
  //dog breed
  window.location.href = "normal-medium-shed.html";
}else if (normal.checked === true && small.checked === true && noShedding.checked === true){
  //dog breed
  window.location.href= "normal-small-noShed.html";
}else if (normal.checked === true && small.checked === true && okWithShedding.checked === true){
  //dog breed
  window.location.href = "normal-small-shed.html";
}else if (lazy.checked === true && large.checked === true && noShedding.checked === true){
  //dog breed
  window.location.href = "lazy-large-noShed.html";
}else if (lazy.checked === true && large.checked === true && okWithShedding.checked === true){
  //dog breed
  window.location.href = "lazy-large-shed.html";
}else if (lazy.checked === true && medium.checked === true && noShedding.checked === true) {
  //dog breed
  window.location.href = "lazy-medium-noShed.html";
}else if (lazy.checked === true && medium.checked === true && okWithShedding.checked === true) {
  //dog breed
  window.location.href = "lazy-medium-shed.html";
}else if (lazy.checked === true && small.checked === true && noShedding.checked === true) {
  //dog breed
  window.location.href = "lazy-small-noShed.html";
}else if (lazy.checked === true && small.checked === true && okWithShedding.checked === true) {
  //dog breed
  window.location.href = "lazy-small-shed.html";
  } else {
  (`Answer invalid`);
  }
}
