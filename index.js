const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let words = "";
let randWords = "";
let nWords = ['australia', 'helicopter', 'rainbow', 'army', 'queen', 'piano', 'candle', 'kangaroo', 'scooter', 'magazine', 'eggplant', 'orange', 'flower', 'family', 'dream' ];
 
const newWords = () => {
    let randomNum = Math.floor(Math.random() * nWords.length) + 1
    let actNwords = nWords[randomNum];
    return actNwords;
}
const scrambleWords = (arr) => {
     for(var i =arr.length-1; i>0 ; i--){
         let finalWord =arr[i];
         let a = Math.floor(Math.random()* (i+1));
         arr[i] = arr[a];
         arr[a] = finalWord; 
     }
     return arr;
}
 


btn.addEventListener('click', function () {
    if (!play) {
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        words = newWords()
        randWords = scrambleWords(words.split("")).join("");
        msg.innerHTML = `Guess the Word: ${randWords}`;
    }else{
        let temWords = guess.value;
        if( temWords === words ){
          play = false;
          msg.innerHTML = `It's Correct. It is ${words}`;
          btn.innerHTML = "Play Again";
          guess.classList.toggle('hidden');
          guess.value= "";

        }else{
            msg.innerHTML = `It's Incorrect.Please Try Again. It is ${words}`;
            btn.innerHTML = "Play Again";
        }
    }
})