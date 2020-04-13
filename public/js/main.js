// Stacks

// functions: push, pop, peek, length

var letters = []; //this will become the stack

var word = "noon" || "racecar" || "chicken";

var rword = "";

// Put letters of word into the stack.
for(var i = 0; i < word.length; i++){
  letters.push(word[i]);
}

// pop off the stack in reverse order
for(var i = 0; i < word.length; i++){
  rword += letters.pop();
}

if(rword === word){
  console.log(word,"is a palindrome.");
}
else{
  console.log(word, "is not a palindrome! Sorry.")
}

/* Without an array, create your own stack */

// Creates the stack

var Stack = function(){
  this.count = 0;
  this.storage = {};

  // Adds value on to the end of the stack
  this.push = function(value){
    // the index for the values in the storage is being set by the count that began at 0; as you add values, the index increases.
    this.storage[this.count] = value;
    // here I iterate the count by 1 with ++
    this.count++;
    
  }
  // Removes and returns the values at the end of the stack
  this.pop = function(){
    if(this.count === 0){
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count]
    delete this.storage[this.count];
    return result
  }

  // returns the size of the stack
  this.size = function(){
    return this.count;
  }

  // returns the value at the end of a stack
  this.peek = function(){
    return this.storage[this.count-1];
  }

}

var newStack = new Stack();

stackarr = [1,2,3,4,5,6,7,8,9,10,11]
for(var i = 0; i < stackarr.length; i++){
  newStack.push(stackarr[i]);
}
console.log(newStack.peek())
console.log(newStack.pop())
console.log(newStack.peek())
console.log(newStack.size() + ': items are in the stackarr!')



