function addItem() {
  // TODO: add 'item' to the list of TODOs

  //Step 1: identify the value of the myInput element. 
  let input = document.getElementById('myInput');
  let inputText = input.value;

  if (inputText === ''){
    alert("You need to type some text first");
    return true;
  }

  //Step 2: Create a text node containing that value
  let txtNode = document.createTextNode(inputText);

  //Step 3: Create a new li element and append the text node to it
  let li = document.createElement("li");
  li.appendChild(txtNode);
    
  //Step 4: Append the li element to the existing myTODOs element. 
  var myTODOs = document.getElementById("myTODOs");
  myTODOs.appendChild(li);
  input.value = "";
}
