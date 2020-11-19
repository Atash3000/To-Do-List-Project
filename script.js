
let addOnClick=()=>{
  //create 'li' item inside of ol element
let listItem = document.createElement('li')
listItem.innerHTML =
`<span class="click">  ${document.querySelector('.input-box').value} </span> 
<span class="click" style="color:red">(Edit)</span>
<span class="click" style="color:blue">(Remove)</span>`
document.querySelector('.ol-list').appendChild(listItem)
document.querySelector('.input-box').value="";
}

let button = document.querySelector('.add-item')
button.addEventListener('click',addOnClick)