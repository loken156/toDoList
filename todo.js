

let todoList = ['mjölk', 'gå med hund', 'tanka bilen', 'kaffe med mor', 'gymma', 'koda', 'fiska', 'lunch'];
let doneList = []


// Lägg till en sak att göra till listan
function addToList(todoItem) {

  todoList.push(todoItem);

  return todoList;

}


//Lägg till en sak att göra överst i listan
function addToTopOfList(todoItem){
  todoList.unshift(todoItem)
  
  return todoList
}



//Ta bort en sak längst ner i listan
function removeFromBottom(){
  todoList.pop()
  
  return todoList
}



//Ta bort en sak högst upp i listan
function removeFromTop(){
  todoList.shift()

  return todoList
}



//Ta bort en sak baserad på dess placering i listan
function removeFromListByIndex(todoList, index){
  if (index >= 0 && index < todoList.length){

    let removedItem = todoList.splice(index, 1)[0]
    
    return removedItem
  }
}



//Ta bort en sak baserad på dess namn
function removeFromListByName(todoList, itemName){
  let index = todoList.findIndex(item => item === itemName) // skapa en funktion med findIndex som letar efter angivet itemName
  if (index !==-1){
    return removeFromListByIndex (todoList, index)
  }
  return null
}



//Ta bort en sak och lägg till den i ”har gjort”-lista
function moveToDone(todoList, itemName){
  let removedItem = removeFromListByName(todoList, itemName)
  if(removedItem !== null){
    doneList.push(removedItem)
  }
  return doneList
}



//Flytta en sak till toppen av listan
function moveToTop(todoList, itemName){
  let removedItem = removeFromListByName(todoList, itemName)
  if (removedItem !== null){
    todoList.unshift(removedItem)
  }
  return todoList
}



//Flytta en sak till botten av listan
function moveToBottom(todoList, itemName){
  let removedItem = removeFromListByName(todoList, itemName)
  if (removedItem !== null){
    todoList.push(removedItem)
  }
  return todoList
}




//Flytta en sak ett steg ner i listan
function moveDown(todoList, itemName){
  let index = todoList.findIndex(item => item === itemName) // letar efter itemName
  if(index !== -1 && index < todoList.length - 1){ //sätter index som false och kollar så att itemen inte redan ligger sist i arrayen
   
    //om det finns så använder vi splice för att ta bort vald sak och lägger den på nästa  position
    let removedItem = todoList.splice(index, 1)[0] //ta bort vald sak 
    todoList.splice(index + 1, 0, removedItem) // lägg till removed item på plats index+1 från index vi tog den
  
  }
  return todoList
}



//Flytta en sak ett steg upp i listan
function moveUp(todoList, itemName){
  let index = todoList.findIndex(item => item === itemName)
  if (index > 0){
    let removedItem = todoList.splice(index, 1)[0]
    todoList.splice(index - 1, 0, removedItem)
  }
  return todoList
    
}
// enkel for loop som visar listan samt indexplats
function showTodo(){
for(let i = 0 ; i < todoList.length; i++){
  console.log(i,todoList[i]);
}
}

