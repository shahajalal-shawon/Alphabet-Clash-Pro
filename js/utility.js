function hideElementsById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("hidden");
}

function setBackgroundColor(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-yellow-400')
}

function getARandomAlphabet() {
  // step-1: create a alphabet array
  const alphabetString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetString.split("");
//   console.log(alphabets);

  // step-2: get a random index 0-25
  const randomNumber = Math.random() * 25;
  const randomIndex =Math.round(randomNumber);
//   console.log(randomIndex); 

  const alphabet = alphabets[randomIndex];
//   console.log(randomIndex, alphabet);
  return alphabet;
}
