// way number 1
// function play(){
//     const homeSection = document.getElementById("home-section");
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove('hidden')
// }

// way number 2
function play() {
  // hide everything show only the playgorund
  hideElementsById("home-section");
  hideElementsById("final-score");
  showElementById("play-ground");
// reset life and score
  setTextElementValueById('current-life', 5)
  setTextElementValueById('current-score', 0)
  continueGame();
}

function continueGame() {
  // set a random alphabet
  const alphabet = getARandomAlphabet();
  // console.log(alphabet);

  // show the alphabet to the screen
  const currentAlphabet = document.getElementById("current-alphabet");
  currentAlphabet.innerText = alphabet;
  // set background color
  setBackgroundColor(alphabet);
}

function gameOver(){
  hideElementsById('play-ground');
  showElementById("final-score");
  // update the final score
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('last-score', lastScore);

  // clear the last selected alphabet highlight
  const currentAlphabet = getElementTextById('current-alphabet');
  console.log(currentAlphabet);
  removeBackgrounColorById(currentAlphabet)
}

// keyboard button press section
document.addEventListener("keyup", handleKeyBoardButtonPress);

function handleKeyBoardButtonPress(event) {
  const playerPressed = event.key;
  console.log('player presed', playerPressed);
  if(playerPressed === 'Escape'){
    gameOver();
  }
  // console.log("btn pressed", event.key);

  // get the expected press
  const currentAlphabetElements = document.getElementById("current-alphabet");
  const currentAlphabet = currentAlphabetElements.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();
  // console.log(playerPressed, expectedAlphabet);

  if (playerPressed === expectedAlphabet) {
    const currentScore = getTextElementValueById("current-score");
    // console.log(currentScore); 
    const updatedScore = currentScore + 1;
    setTextElementValueById('current-score', updatedScore)

    // --------------------
    // update score
    // // 1.get the current score
    // const currentScoreElement = document.getElementById("current-score");
    // const currentScoreText = currentScoreElement.innerText;
    // const currentScore = parseInt(currentScoreText);
    // console.log(currentScore);
    // // 2. increase the score by one
    // const newScore = currentScore + 1;
    // // 3.show the update score
    // currentScoreElement.innerText = newScore;

     

    removeBackgrounColorById(expectedAlphabet);
    continueGame();
  } else {
    const currentLife = getTextElementValueById('current-life');
    const updatedLife = currentLife - 1;
    setTextElementValueById('current-life', updatedLife);

    if (updatedLife === 0) {
      gameOver()
    }
    // ---------------------
    // // 1.get the current life
    // const currentLifeElement = document.getElementById("current-life");
    // const currentLifeText = currentLifeElement.innerText;
    // const currentLife = parseInt(currentLifeText);

    // // 2. reduce the life count
    // const reduceLife = currentLife - 1;
    // // 3.display the update current life
    // currentLifeElement.innerText = reduceLife;

  }
}
