let url="http://universities.hipolabs.com/search?country=India";
async function getdata(){
    let res=await axios.get(url);
    return res;
}
let button=document.querySelector('button');
let input=document.querySelector('input');
let list=document.querySelector('#list');
button.addEventListener('click',()=>
{
    list.innerText='';
    let state=input.value;
    getdata().then((res)=>{
        for(uni of res.data){
            if(state!=null&&uni['state-province']!=null&&state.toUpperCase()==uni['state-province'].toUpperCase()){
                let li=document.createElement('li');
                li.textContent=uni.name;
                list.appendChild(li);
            }
        }
    }).catch((err)=>{
        console.log("error occured");
        console.log(err);
    });
    input.value='';
});