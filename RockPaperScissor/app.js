let gameStarted=false;
document.addEventListener('keydown',()=>{
    if(gameStarted){
        return;
    }
    gameStarted=true;
    console.log('Game has started!');
    let h3=document.querySelector('h3');
    h3.innerText='Game has started, head to console.';
    h3.style.color='green';
})