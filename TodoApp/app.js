let task=document.querySelector('input');
let button=document.querySelector('#add-button');
let list = document.querySelector('#tasks');
let deleteall=document.querySelector('#delete-all');
task.addEventListener('keydown',function(event){
    if(event.key=='Enter'){
        button.click();
    }
})
button.addEventListener('click',function(){
    // let newTask=console.log(task.value);
    let newTask=document.createElement('li');
    let deleteButton=document.createElement('button');
    deleteButton.className='delete-button';
    if(task.value==''){
        console.warn('Input field is empty. Enter a valid task');
        return;
    }
    newTask.textContent=task.value;
    task.value=null;
    list.appendChild(newTask);
    deleteButton.textContent='delete';
    newTask.appendChild(deleteButton);
    deleteButton.addEventListener('click',function(){
        this.parentElement.remove();
    })
})
deleteall.addEventListener('click',function(){
    let allDeteButtons=document.querySelectorAll('.delete-button');
    if(allDeteButtons.length==0){
        console.error('Tasks are already empty!');
        return;
    }
    for(aButton of allDeteButtons){
        aButton.parentElement.remove();
    }
})