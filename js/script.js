document.body.onload = function() {

// take value input and create item

document.getElementById('button').onclick = function addText() {
  var newLi, aInNewLi, list, newText;

  newLi = document.createElement('li');
  aInNewLi = document.createElement('a');
  aInNewLi.id  = 'aInNewLi'
  list = document.getElementById('list');


  list.appendChild(newLi);
  newLi.appendChild(aInNewLi)

  newText = document.getElementById('input').value;

aInNewLi.innerHTML = newText;


       function functionName() {
        document.getElementById('input').removeAttr('value');
       }



// _____________________________________________________________________________


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

  function ygt () {

    var li =  document.getElementsByTagName('li');
    li.removeChild( newText, removeLi);


  }

    // save change button
    var save = document.createElement('input');
    save.id = 'save'
    save.type = 'button'
    save.value = 'save'
    newLi.appendChild(save);

    var inputForEdit = document.createElement('input');
      edit.id = 'inputForEdit'
      edit.type = 'text'
    newLi.appendChild(inputForEdit);

    inputForEdit.innerHTML = newText;

    save.onclick = function () {

      saveText = inputForEdit.value;

      // newLi.removeChild(aInNewLi);

      var newA = document.createElement('a');

      newLi.appendChild(newA)

      newA.innerHTML = saveText;

      console.log(saveText);

    // if (save.onclick == true) {
    //   aInNewLi.removeChild( newText, removeLi, edit, save);
    //
    // }

      }


    }

  }
}

}
