let input=document.querySelector('input');
let button=document.querySelector('button');
let grid=document.querySelector('.grid');

let n;

function clearGrid(){
    let cells = document.querySelectorAll('.cell');
    for(cell of cells){
        cell.remove();
    }
}

button.addEventListener('click',()=>{
    clearGrid();
    n=input.value;
    for(let i=0;i<n*n;i++){
        let cell = document.createElement('div');
        cell.addEventListener('mouseenter',()=>{
            cell.style.backgroundColor='black';
        });
        cell.classList.add('cell');
        cell.style.height=`${700/parseFloat(n)-2}px`; //To account for borders
        cell.style.width=`${700/parseFloat(n)-2}px`;
        grid.appendChild(cell);
    }
});