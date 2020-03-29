// document.querySelector("button").addEventListener("click", handleClick);

// function handleClick() {
//   alert("Ive got clicked");
// }

// document.querySelector("button").addEventListener("click", function() {
//   alert("I've got clicked");
// });



var dict = new Map();
dict.set("w", "crash");
dict.set("a", "kick-bass");
dict.set("s", "snare");
dict.set("d", "tom-1");
dict.set("j", "tom-2");
dict.set("k", "tom-3");
dict.set("l", "tom-4");

var numberofDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberofDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    this.style.color = "white";
    var letter = this.innerHTML;
    var audio = new Audio("sounds/" + dict.get(letter) + ".mp3");
    audio.play();
    animatedButton(letter);
  });

  document.addEventListener("keypress", function (event){
    var pressedKey = event.key 
    var audio = new Audio("sounds/" + dict.get(pressedKey) + ".mp3");
    audio.play();
    animatedButton(pressedKey);
  });

  function animatedButton(key){
    var activeButton = document.querySelector("." + key);
    activeButton.classList.add("pressed");
    setTimeout(function (){activeButton.classList.remove("pressed")}, 180);
  }
}

