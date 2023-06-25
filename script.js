



/*
const collection = document.getElementsByClassName("element");
for (let i = 0; i < collection.length; i++) {
  collection[i].style.border = "none";

  function myFunction() {
    document.getElementsByClassName("yellow").style.border = "1px solid red";
  }
}*/


var X = document.getElementsByClassName("yellow");
function myFunction() {

  for (let x of X) {
    if (x.style.display === "block") {
      x.style.display = "none";
    
    } else {
      x.style.borderStyle = "solid";
      x.style.borderWidth = "4px";
      x.style.borderColor = "black";
    }
  }
}



var X = document.getElementsByClassName("purple");
function myFunction() {

  for (let x of X) {
    if (x.style.display === "block") {
      x.style.display = "none";
    
    } else {
      x.style.borderStyle = "solid";
      x.style.borderWidth = "4px";
      x.style.borderColor = "black";
    }
  }
}

var X = document.getElementsByClassName("orange");
function myFunction() {

  for (let x of X) {
    if (x.style.display === "block") {
      x.style.display = "none";
    
    } else {
      x.style.borderStyle = "solid";
      x.style.borderWidth = "4px";
      x.style.borderColor = "black";
    }
  }
}