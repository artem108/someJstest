document.body.onload = function() {

// take value input and create item

var newLi, list, aInNewLi;

list = document.getElementById('list');
newLi = document.createElement('li');
aInNewLi = document.createElement('a');
aInNewLi.id  = 'aInNewLi'

document.getElementById('button').onclick = function addText() {

var newText = document.getElementById('input').value;

list.appendChild(newLi);
newLi.appendChild(aInNewLi)
aInNewLi.innerHTML = newText;

}
// create button for li

aInNewLi.onclick = function createButton() {
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

    var inputForEdit = document.createElement('input');

    edit.id = 'inputForEdit'
    edit.type = 'text'
    var holdText = document.getElementById('aInNewLi').value;

    inputForEdit.innerHTML = holdText;



  }

}
}
