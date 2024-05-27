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

function removeBackgrounColorById(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('bg-yellow-400')
}

function getTextElementValueById(elementId){
  const element = document.getElementById(elementId);
  const elementValueText = element.innerText;
  const value = parseInt(elementValueText);
  return value;
}

function setTextElementValueById(elementId, value){
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getElementTextById(elementId){
  const element = document.getElementById(elementId);
  const text = element.innerText;
  return text;
}

// function getARandomAlphabet() {
//   // step-1: create a alphabet array
//   const alphabetString = "abcdefghijklmnopqrstuvwxyz";
//   const alphabets = alphabetString.split("");
// //   console.log(alphabets);

//   // step-2: get a random index 0-25
//   const randomNumber = Math.random() * 25;
//   const randomIndex =Math.round(randomNumber);
// //   console.log(randomIndex); 

//   const alphabet = alphabets[randomIndex];
// //   console.log(randomIndex, alphabet);
//   return alphabet;
// }

function getARandomAlphabet(){
  const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
  const alphabets = alphabetString.split('');
  // console.log(alphabets);

  const randomNumber = Math.random()*25;
  const randomIndex = Math.round(randomNumber);
  // console.log(randomIndex);

  const alphabet = alphabets[randomIndex];
  return alphabet;
}