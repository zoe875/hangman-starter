//global variables here: word, word array(s), guesses, guessedLetters
let word = "";
let wordArraysEasy = ["apple", "table", "chair", "dog", "tree", "moon", "book", "ball", "cat", "sun"];
let wordArrayMedium = ["luminous", "jovial", "quaint", "serenity", "vortex", "ephemeral", "whimsical", "circuit", "glisten", "puzzle"]
let wordArrayHard = ["breeze", "fathom", "serene", "plague", "jungle", "vivid", "pioneer", "echo", "mosaic", "vortex",]
let guesses ;
let guessedLetters = [];
//event listeners for startGame and guessLetter
//for example:
document.getElementById("start").addEventListener("click",startGame);
document.getElementById("guessLetter").addEventListener("click",guessLetter);

//once at start of the game
function startGame() {
    console.log("hi")
    
    // let l = document.getElementById("guessedLetter").value
    // console.log(l)
    // document.getElementById("guessedLetters").innerHTML = l

    /*
    - Reset the board, empty guessedLetters 
    - Set a word from words array into word - this line will grab  a random element from your words array for you:
    word = words[Math.floor(Math.random() * words.length)];
    */
 
    guessedLetters = [];
    document.getElementById("word").innerHTML = ""
    document.getElementById("guessedLetters").innerHTML = guessedLetters
    
    let difficulty = document.getElementById("difficulty").value
    if (difficulty == "Easy" ){
        word = wordArraysEasy[Math.floor(Math.random() * word.length)];
    }else if (difficulty == "Medium" ){
        word = wordArrayMedium[Math.floor(Math.random() * word.length)];
    }else if (difficulty == "Hard" ){
        word = wordArrayHard[Math.floor(Math.random() * word.length)];
    }
   
    console.log(word);
    guesses = word.length;
    document.getElementById("numGuesses").innerHTML = guesses

    printWord();


}

//at start and every time the user enters a guess
function printWord() {
    var answer = "";
    for (let i = 0; i < word.length; i++) {
        if (guessedLetters.indexOf(word[i])!= -1){  // 
            answer += word[i];
        }else{
            answer += "_ ";
            
        }
    }
    document.getElementById("printword").innerHTML = answer;

    if (answer.includes("_ ") == false){
        document.getElementById("guessedLetters").innerHTML = "You Win!!!";
    }
    if (guesses == 0){
        document.getElementById("guessedLetters").innerHTML = "You lose!!!"
        document.getElementById("word").innerHTML = word
    }
    //document.setelement = answer;
/*
Compare each letter in answer word to the letters in guessedLetters using guessedLetters.indexOf(letter).  Use this to build the “_” word with the correctly guessed letters filled in.
there is a help video for this in classroom 
*/


}

//every time the user enters a guess
function guessLetter() {
    let l = document.getElementById("guessedLetter").value
    console.log(l)
    guessedLetters.push(l);
    document.getElementById("guessedLetters").innerHTML = guessedLetters
    console.log(guessedLetters)
    if(word.includes(l) != true){
        guesses = guesses-1
    }
    printWord();
    document.getElementById("numGuesses").innerHTML = guesses
    console.log(guesses)
    
   
    
/*
Manage the game: Add letters to guessedLetters, call printWord, deduct from guesses, check for a win or loss.
*/

}
