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
  //collection array for Priority Queue;
  var collection = [];
  //this method will print the contents of the collection array;
  this.printCollection = function(){
    (console.log('the entire collection', collection));
  };
  //this method will take and element and check to see if the queue isEmpty
  this.enqueue = function(element){
  //if the queue is empty, you can push the element into the collection array
    if(this.isEmpty()){
      collection.push(element);
    } else {
      //added is set to false and element is placed, based upon priority
      //if the collection is not empty, the element's priority is compared to the priority of the items in the collection array;
      //if the prioity of the element is greater than that of the collection array, the element is pushed in.
      var added = false;
        for (var i = 0; i < collection.length; i++) {
          //if the element's priority is less than that of the item in the array, the element is spliced into the zero index of the array;
          if(element[1] < collection[i][1]){
            collection.splice(i,0,element);
            added = true;
            break;
          }      

        }
        //
        if(!added){
          collection.push(element);
        }
    }
  };
  //this method will remove and return the value at the 0 index; 
  this.dequeue = function(){
    var value = collection.shift(); 
    return value[0];
  };
  //this will return the collection's 0 index;
  this.front = function(){
    return collection[0];
  };
  //this is will return the length of the array
  this.size = function(){
    return collection.length;
  };
  //this will check to see if the collection is empty;
  this.isEmpty = function(){
    return (collection.length === 0);
  };

}

var priorityqueue = new PriorityQueue();

priorityqueue.enqueue(['Limelight', 9]);
priorityqueue.enqueue(['LMG',1]);
priorityqueue.enqueue(['other people', 5]);
priorityqueue.printCollection();

/* Binary Search Trees */

class Node {
  constructor(data, left = null, right = null){
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  // the binary search tree constructor sets the root of the tree to null;
  constructor(){
    this.root = null;
  }
  // the add function takes in data and creates a node assigning the value to this.root; 
  add(data){
    const node = this.root;
    //if this is the first node, the this.root will still be set to null
    //if node is null, then this.root is assigned to a new node containing the data;
    if(node === null){
      this.root = new Node(data);
      return;
    } else {
      //if the root is not null, then the data is compared;  
      const searchTree = function(node){
        //if the data passed in is smaller than node.data;
        if(data < node.data){
          //we, then, check to see if the left node is null; if it is, we create a new left node with the data passed in assigning to node.left;
          if(node.left === null){
            node.left = new Node(data);
            return;
            //if node.left is not null, we recursively run searchtree with the added data, until we find a place to put the node;
          } else if (node.left !== null){
            //when you run again, there will no longer be a node on the left; that is where you will place the node;
            return searchTree(node.left);
          }
          //once again, we're comparing the data passed in to node.data to see if the passed in data is greater;
          else if (data > node.data){
            //if node.right is null; create a new node for the right and add the passed in data;
            if(node.right === null){
              node.right = new Node(data);
              return;
            //if the node on the right is not null, run the searchtree with node.right, until you find a place to put the node;
            //when you run again, there will no longer be a node on the right; that is where you will place the node;
            } else if(node.right !== null) {
              return searchTree(node.right);
            }
          }
          //if the values are equal, you do not add the node, and you will retrun node;
        } else {
          return null;
        }
      };
      return searchTree(node);
    }

  }
  findMin(){
    let current = this.root;
    while( current.left !== null){
      current = current.left;
    }
    return current.data;
  }
  findMax(){
    let current = this.root;
    while (current.right !== null){
      current = current.right;
    }
    return current.data;
  }
  find(data){
    let current = this.root;
    while(current.data !== data){
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
      if(current === null){
        return null;
      }
    }
    return current;  
  }
  isPresent(data){
    let current = this.root;
    while(current){
      if(data === current.data){
        return true;
      }
      if(data < current.data){
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
  remove(data){
    const removeNode = function(node, data){
      if(node == null){
        return null;
      }
      if(data == node.data){
        if(node.left == null && node.right = null){
          return null;
        }
        if(node.left == null){
          return node.right;
        }
        if(node.right == null){
          return node.left;
        }
        var tempNode = node.right;
        while(tempNode.left !== null){
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if ( data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
  this.root = removeNode(this.root, data);
  }
}