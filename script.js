
let addOnClick=()=>{
  //create 'li' item inside of ol element
  let inputBox = document.querySelector('.input-box')
  let regex = /^\s+$/;
  if(regex.test(inputBox.value)<=0 && inputBox.value){
let listItem = document.createElement('li')
listItem.innerHTML =
`<span class="click task-item">  ${document.querySelector('.input-box').value} </span> 
<span class="click" style="color:red">(Edit)</span>
<span class="click" style="color:blue">(Remove)</span>`
document.querySelector('.ol-list').appendChild(listItem)
document.querySelector('.input-box').value="";

// create eventlistner for task item
let taskItem = listItem.querySelector('.task-item')
taskItem.addEventListener('click',completeItem)
}
}
let completeItem=(e)=>{
if(e.target.style.textDecoration==="line-through"){
  e.target.style.textDecoration='none';
}else{
  e.target.style.textDecoration  = 'line-through';
}
}
 
let button = document.querySelector('.add-item')
button.addEventListener('click',addOnClick)