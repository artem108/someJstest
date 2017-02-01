document.body.onload = function() {

document.getElementById('button').onclick = function addText() {

var newText, newLi, list;
newText = document.getElementById('input').value;
newLi = document.createElement('li');
list = document.getElementById('list');

list.appendChild(newLi);

newLi.innerHTML = newText;




// document.getElementById('areaForText').innerHTML = newText;
 // return addText;
}}
// пригодиться document.createElement(tag)
