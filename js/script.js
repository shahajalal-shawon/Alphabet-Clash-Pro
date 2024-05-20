// way number 1
// function play(){
//     const homeSection = document.getElementById("home-section");
//     homeSection.classList.add('hidden')

//     const playgroundSection = document.getElementById("play-ground");
//     playgroundSection.classList.remove('hidden')
// }

// way number 2
function play(){
    hideElementsById('home-section');
    showElementById('play-ground')
    continueGame();  
    
}

function continueGame(){
    // set a random alphabet
    const alphabet =  getARandomAlphabet();
    console.log(alphabet);

    // show the alphabet to the screen
    const currentAlphabet = document.getElementById("current-alphabet");
    currentAlphabet.innerText = alphabet;

    // set background color
    setBackgroundColor(alphabet);
}