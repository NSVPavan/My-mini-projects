let button=document.querySelector('button');
let heading=document.querySelector('h1');
let div=document.querySelector('div');
function getRandomColor(){
    let r=Math.floor(Math.random()*256);
    let g=Math.floor(Math.random()*256);
    let b=Math.floor(Math.random()*256);
    let alpha = Math.floor(Math.random() * 11) / 10;
    return `rgba(${r},${g},${b},${alpha})`;
}
button.addEventListener("click",()=>{
    let randomColor=getRandomColor();
    div.style.backgroundColor=randomColor;
    heading.textContent=randomColor;
    div.textContent="This is your new color";
})


