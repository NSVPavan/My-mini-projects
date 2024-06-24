let gameStarted=false;
let responses=['ROCK','PAPER','SCISSOR'];
function randomResponse(){
    let response=Math.floor(Math.random()*3)+0;
    return responses[response];
}
document.addEventListener('keydown',()=>{
    if(gameStarted){
        return;
    }
    gameStarted=true;
    console.log('Game has started!');
    let h3=document.querySelector('h3');
    h3.innerText='Game has started, head to console.';
    h3.style.color='green';
    for(let round=1;round<=5;round++){
        console.log(`Round-${round}`);
        let userResponse=prompt("What's your move: rock or paper or scissor");
        console.log(`Your move: ${userResponse}`);
    }
})