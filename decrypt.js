const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  " ",
];
console.log(letters);
const decryptBtn = document.getElementById("decryptbtn");
decryptBtn.addEventListener("click", () => {
  let encryptedWord = document.getElementById("textboxdecrypt").value;
  let decryptedWord = String();
  for (let i = 0; i < encryptedWord.length; i++) {
    letters.forEach(letter => {
      if (encryptedWord[i] === letter) {
        let indexOfLetter = letters.indexOf(letter) - 3;
        console.log(indexOfLetter + letters.length);
        if (indexOfLetter < 0) {
          decryptedWord += letters[indexOfLetter + letters.length];
          console.log(decryptedWord);
        } else {
          decryptedWord += letters[letters.indexOf(letter) - 3];
          console.log(decryptedWord);
        }
      }
    });
  }
  document.getElementById("decryptfinish").innerText = decryptedWord;
});
