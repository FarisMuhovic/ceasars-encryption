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
const encryptBtn = document.getElementById("encryptbtn");
encryptBtn.addEventListener("click", () => {
  let encryptingWord = document.getElementById("textboxencrypt").value;
  let encryptingWordLowerCase = encryptingWord.toLowerCase();
  let encryptedWord = String();
  for (let i = 0; i < encryptingWordLowerCase.length; i++) {
    letters.forEach(letter => {
      if (encryptingWordLowerCase[i] === letter) {
        let indexOfLetter = letters.indexOf(letter) + 3;
        if (indexOfLetter >= letters.length - 1) {
          let NewindexOfLetter = 0;
          NewindexOfLetter = +(indexOfLetter - letters.length);
          encryptedWord += letters[NewindexOfLetter];
        } else {
          let indexOfLetter = letters.indexOf(letter) + 3;
          encryptedWord += letters[indexOfLetter];
        }
      }
    });
  }
  document.getElementById("encryptfinish").innerText = encryptedWord;
});
