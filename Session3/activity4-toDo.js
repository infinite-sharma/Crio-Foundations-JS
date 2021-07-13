const todoDB = [];
//to add a new todo item to the end of the list depending on the 
function addTodo(item, priority){
  if(priority == "high"){
    todoDB.unshift(item);
  } else {
    todoDB.push(item);
  }
}

//Set the item at the given index to null
function clearTodo(index){
  todoDB[index] = null;
}

//Update the item at the given index with newItem passed to the function.
function updateTodo(index, newItem){
  todoDB[index] = newItem;
}

//return the todo item at given index else full list of todos if nothing is passed.
function getTodo(index){
  if(index !== undefined){
    return todoDB[index];
  } else{
    return todoDB;
  }
}
console.log(todoDB);

console.log(addTodo("Read Books", "low"));

console.log(addTodo("Exercises", "high"));

console.log(todoDB);

console.log(updateTodo(1, "Eat Code Sleep"));

console.log(todoDB);

console.log(getTodo(0));

console.log(clearTodo(1));

console.log(todoDB);



