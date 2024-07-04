let input=document.querySelector('input');
let button=document.querySelector('button');
let grid=document.querySelector('.grid');

let n;

button.addEventListener('click',()=>{
    clearGrid();
    n=input.value;
    for(let i=0;i<n*n;i++){
        let cell = document.createElement('div');
        cell.classList.add('cell');
        cell.style.height=`${700/parseFloat(n)-2}px`; //To account for borders
        cell.style.width=`${700/parseFloat(n)-2}px`;
        grid.appendChild(cell);
        console.log('ok');
    }
    console.log('added');
});