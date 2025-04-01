const message = document.querySelector(".message")
const inputNum=document.querySelector(".guess");
const num=document.querySelector(".number");
const highscore=document.querySelector(".highscore");
const score=document.querySelector(".score");
console.log(inputNum);

let randomNumber=Math.floor(Math.random()*20)+1;
console.log(randomNumber);
let scoreValue=20;
let highScoreValue=0;


document.querySelector(".check").addEventListener("click",function(){

console.log('clicked');
let guessNum =Number(inputNum.value);
console.log(guessNum);
 if(!guessNum){
    // console.log("No value");
    message.textContent="No Number.....";
    
 }
 else if(guessNum>20 || guessNum<0){
    message.textContent="Invalid Input!";

 }
 else if(guessNum===randomNumber){
    message.textContent="Your guess is right!";
    num.textContent=guessNum;
    num.style.width="20rem";
    document.body.style.backgroundColor="green";
    if(scoreValue>highScoreValue){
      highScoreValue=scoreValue;
      highscore.textContent=highScoreValue;

    }
   }
else if(guessNum>randomNumber){
   if(scoreValue>0){
    message.textContent="It is to high!";
    score.textContent=--scoreValue;
   }
 
    
}
else if(guessNum<randomNumber){
   if(scoreValue>0){
    message.textContent="It is to low";
    score.textContent=--scoreValue;


   }

}
else{
   displayMessage("You lost the game!");

}

    

})

document.querySelector(".again").addEventListener("click",function(){
   scoreValue=20; 
   message.textContent="start guessing...";
   inputNum.value="";
   num.textContent="?";


   score.textContent=scoreValue;
   document.body.style.backgroundColor="#222";
   randomNumber=Math.floor(Math.random()*20)+1;
   
})

