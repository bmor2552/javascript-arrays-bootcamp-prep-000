var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function destructivelyAddElementToBeginningOfArray(array, element){
  array.unshift(element)
  return array
}
function addElementToBeginningOfArray(array, element) {
 return [element, ...array]
}

function destructivelyAddElementToEndOfArray(array, element) {
 array.push(element)
 return array
}

function addElementToEndOfArray(array, element) {
return [...array, element]
}

function accessElementInArray(array) {
return array[2];
}
function destructivelyRemoveElementFromBeginningOfArray(array){
  return array.shift();
}

function removeElementFromBeginningOfArray(){

}

function destructivelyRemoveElementFromEndOfArray(){

}

function removeElementFromEndOfArray(){

}
