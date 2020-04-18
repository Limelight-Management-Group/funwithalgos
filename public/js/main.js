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
// Here I use the keyword new to create another instance of the Stack class.
var newStack = new Stack();

stackarr = [1,2,3,4,5,6,7,8,9,10,11];
for(var i = 0; i < stackarr.length; i++){
  newStack.push(stackarr[i]);
}
console.log(newStack.peek())
console.log(newStack.pop())
console.log(newStack.peek())
console.log(newStack.size() + ': items are in the stackarr!')

/*Sets*/

function mySet(){
  //the collection array will hold the set.
  var collection = [];
  //this method will check to see if an element is present; true or false.
  this.has = function(element){
    return (collection.indexOf(element) !== -1);
  };
  //this method will return the entire collection array.
  this.values = function(){
    return collection;
  };
  // This adds an element to the set
  this.add = function(element){
    if(!this.has(element)){
      collection.push(element);
      return true;
    }
    return false;
  };
  // This will remove an element from the collection's array.
  this.remove = function(element){
    if(this.has(element)){
      index = collection.indexOf(element);
      collection.splice(index, 1);
    }
    return false;
  };
  //this will show the size of the collecion array.
  this.size = function(){
    return collection.length;
  };

  //this will return union of two sets.
  this.union = function(otherSet){
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();

    firstSet.forEach(function(e){
      unionSet.add(e);
    })
    return unionSet;
  };

  //this will return the intersection of two sets as one.
  this.intersection = function(otherSet){
    var intersectionSet = new mySet();
    var firstSet = this.values();

    firstSet.forEach(function(e){
      if(otherSet.has(e)){
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  //this will return a new set with the difference between two sets
  this.difference = function(otherSet){
    var differentSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e){
      if(!otherSet.has(e)){
        differentSet.add(e);
      }
    });
    return differentSet;
  };

  //This will test if the set is a subset of a different set.
  this.subset = function(otherSet){
    var firstSet = this.values();
    return firstSet.every(function(value){
      return otherSet.has(value)
    });
  };
}

var set1 = new mySet();
var set2 = new mySet();

var arrayA = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var arrayB = ['a','b','c'];
var arrayC = ['l','m','n','o','p','q','r','s'];

for(var i = 0; i < arrayA.length; i++){
  set1.add(arrayA[i]);
  console.log(set1.values());
}
for(var i = 0; i < arrayC.length; i++){
  set2.add(arrayC[i]);
  console.log(set2.values());
}
if(set2.subset(set1)){
  console.log('it is a subset.')
}else{
  console.log('it is not a subset.')
}

/* Queues */

function Queue (){
  //storage array for que
  collection = [];
  //this will console.log() the contents of the collection storage array;
  this.print = function(){
    console.log(collection, "the entire collection");
  };
  //this will push elements on to the front of the queue
  this.enqueue = function(element){
    collection.push(element);
  };
  //this will remove elements from the back of the queue
  this.dequeue = function(){
    return collection.shift();
  };
  // this will return the element at the front of the queue
  this.front = function(){
    return collection[0];
  };
  //this will return the length of the collection
  this.size = function(){
    return collection.length;
  };
  //this will check if the queue is empty
  this.isEmpty = function(){
    return (collection.length === 0);
  };
}

var queue = new Queue();
let values = ['a','b','this is the new front','d','e','f','g','h','i','j','k','l'];

for(var i = 0; i < values.length; i++){
  queue.enqueue(values[i]);
  // console.log('this is values i:', values[i]);  
}

queue.print();

queue.dequeue();
queue.dequeue();
queue.print();
queue.front();
queue.isEmpty();
queue.size();
// queue.print();


/* Priority Queue */

function PriorityQueue(){
  var collection = [];
  this.printCollection = function(){
    (console.log('the entire collection', collection));
  };
  this.enqueue = function(element){
    if(this.isEmpty()){
      collection.push(element);
    } else {
      var added = false;
        for (var i = 0; i < collection.length; i++) {
          if(element[1] < collection[i][1]){
            collection.splice(i,0,element);
            added = true;
            break;
          }      

        }
        if(!added){
          collection.push(element);
        }
    }
  };
  this.dequeue = function(){
    var value = collection.shift(); 
    return value[0];
  };
  this.front = function(){
    return collection[0];
  };
  this.size = function(){
    return collection.length;
  };
  this.isEmpty = function(){
    return (collection.length === 0);
  };

}

var priorityqueue = new PriorityQueue();

priorityqueue.enqueue(['Limelight', 9]);
priorityqueue.enqueue(['LMG',1]);
priorityqueue.enqueue(['other people', 5]);
priorityqueue.printCollection();