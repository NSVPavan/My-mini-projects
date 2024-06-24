let gameStarted=false;
let responses=['ROCK','PAPER','SCISSOR'];
let h3=document.querySelector('h3');
function randomResponse(){
    let response=Math.floor(Math.random()*3)+0;
    return responses[response];
}
function restartGame(){
    gameStarted=false;
    h3.innerText='Press any key to start!';
    h3.style.color='red';
}
document.addEventListener('keydown',()=>{
    if(gameStarted){
        return;
    }
    gameStarted=true;
    console.log('Game has started!');
    h3.innerText='Game has started, head to console.';
    h3.style.color='green';
    for(let round=1;round<=5;round++){
        console.log(`Round-${round}`);
        let userResponse="";
        while(!responses.includes(userResponse.toUpperCase())){
            userResponse=prompt("What's your move, rock, paper or scissor?");
            if(!responses.includes(userResponse.toUpperCase())){
                console.error("Enter a valid move!");
            }
        }
    }
})