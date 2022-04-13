// const grandparent = document.getElementById('grandparent-id')
// const parents = document.getElementsByClassName('parent')
const grandparent = document.querySelector(".grandparent")
const parents = Array.from(grandparent.children)
// const parents = Array.from(document.getElementsByClassName('parent'))

// const grandparent = document.querySelector(grandparent-id)

// This will throw error because getElementsByClassName will return collection 
// but collection doesn't have forEach method
parents.forEach(changeColor)

// changeColor(grandparent)
// changeColor(parents)

const childOne = document.querySelector("#childOne")
const parent = childOne.parentElement
const grandParent = parent.parentElement

changeColor(childOne)

function changeColor(element){
    element.style.backgroundColor = "#333"
}