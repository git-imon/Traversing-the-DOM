const grandparent = document.getElementById('grandparent-id')
// const parents = document.getElementsByClassName('parent')
const parents = Array.from(document.getElementsByClassName('parent'))

// This will throw error because getElementsByClassName will return collection 
// but collection doesn't have forEach method
parents.forEach(changeColor)

// changeColor(grandparent)
changeColor(parents)

function changeColor(element){
    element.style.backgroundColor = "#333"
}