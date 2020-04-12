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