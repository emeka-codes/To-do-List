let input= document.querySelector('#input')
let button= document.querySelector('#button')
let overallContainer=document.querySelector('#overall-container')
input.focus()

button.addEventListener('click', createDiv)

function createDiv(){
    let div= document.createElement('div')
    div.classList.add('divStyle')
    overallContainer.appendChild(div)
    let p= document.createElement('p')
    p.innerHTML=input.value
    div.appendChild(p)
    let del= document.createElement('button')
    del.classList.add('delete')
    del.innerText= "Delete"
    div.appendChild(del)
    input.value=""

    del.addEventListener('click', clear)

function clear(){
    overallContainer.removeChild(div)
}
}

