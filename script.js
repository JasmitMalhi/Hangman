//images counter
var counter = 0;
const images = ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png"];
//picking a random word, and the length of that word
var lowercase = "";
var randomNumber = Math.floor(Math.random() * words.length);
var randomWord = words[randomNumber];

var word = randomWord;
alert(word)
var dashes = "";
// to create dashes for the words
function createDashes(word) {
  dashes = "";
  for (i = 0; i < word.length; i++) {
    dashes += " _ ";
  }

  document.getElementById("dashes").innerHTML = dashes;
}

// to create all the buttons
function createButtons() {
  for (x = 1; x <= 26; x++) {

    var btn = document.createElement("BUTTON");

    var br = document.createElement("br");

    var letter = String.fromCharCode(x + 64);
    
    var t = document.createTextNode(letter);
// to when click check if letter is in the word, and to disable after clicked once
    btn.appendChild(t);
    btn.id = letter;
    btn.addEventListener("click", checkLetter);
    btn.addEventListener("click", disable);



    document.body.appendChild(btn);

    if (x % 13 == 0) {
      document.body.appendChild(br);
    }
//image counter
    document.getElementById("picBox").src = "image/" + images[counter];
  }

  createDashes(word);
  console.log(word);
  document.getElementById("startbtn").disabled = true;
}
//checking letter function
function checkLetter() {

  document.getElementById("p1").innerHTML += this.id;

  var lowercase = this.id.toLowerCase()
// -1 one means not in the word so if not in the word add to the counter
  if (word.indexOf(lowercase) !== -1) {
  } else {
    counter++;
  }
//for dashes, and putting letter to the dash
  if (word.includes(lowercase)) {
    var tempWord = "";
    dashes = dashes.replaceAll(" ", "");

    for (i = 0; i < word.length; i++) {
      if (word[i] == lowercase || word[i] == dashes[i]) {
        tempWord += word[i];
      }
      else {
        tempWord += " _ ";
      }
    }

    dashes = tempWord;
  }
  document.getElementById("picBox").src = "image/" + images[counter];
// once counter uses up all images it ends, or if you won
  document.getElementById("dashes").innerHTML = dashes;
  console.log(dashes);
  if (counter >= 8) {
    alert("WRONG");
    alert("Your word was " + randomWord);
  }

  else if (dashes == randomWord) {
    document.write("NICE")
    alert("Your word was " + randomWord);
  }
}

//randomword function
function randomWord(Array) {
  var word = Array[Math.floor(Math.random() * Array.length)];
  return word;
}

var dashes = word.length;

console.log(randomWord)
//disable after click
function disable() {
  document.getElementById(this.id).disabled = true;


}// redo button
function redo() {
  location.reload();
}
