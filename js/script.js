document.body.onload = function() {
// take value input and create item

var newLi, list;

list = document.getElementById('list');
newLi = document.createElement('li');

document.getElementById('button').onclick = function addText() {
var newText = document.getElementById('input').value;

list.appendChild(newLi);
newLi.innerHTML = newText;

}

// create button for li

newLi.onclick = function createButton() {
  // delete
  var removeLi = document.createElement('input');

  removeLi.id = 'removeItem'
  removeLi.type = 'button'
  removeLi.value = 'delete'

  newLi.appendChild(removeLi);
  // fuction for delete item
  removeLi.onclick = function remove() {

    list.removeChild(newLi);

  }
  // edit button
  var edit = document.createElement('input');

  edit.id = 'edit'
  edit.type = 'button'
  edit.value = 'edit'

  newLi.appendChild(edit);

  edit.onclick = function edit() {
    // save change button
    var save = document.createElement('input');
    save.id = 'save'
    save.type = 'button'
    save.value = 'save'
    newLi.appendChild(save);

  }

}
}
