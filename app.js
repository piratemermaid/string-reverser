

document.getElementById("submit").onclick = function () {
  var origString, stringArray, newString, length;
  newString = "";

  origString = document.getElementById("string_entry").value;
  length = origString.length;
  stringArray = origString.split("");
  console.log(stringArray);

  for(i = length - 1; i >= 0; i--) {
    newString += stringArray[i];
  }

  console.log(newString);

  document.getElementById("string_entry").value = newString;

};