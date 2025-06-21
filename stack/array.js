class Stack{
  constructor(){
    this.stack = [];
  }

  //add an element to the stack
  push(element){
    this.stack.push(element);
  }

  //remove the top element
  pop(){
    if(this.isEmpty()){
      console.log("Stack underflow")
      return null;
    }
    return this.stack.pop();
  }

  ///view the top element without removing it
   peek(){
    if(this.isEmpty()){
      console.log("Stack is empty");
      return null;
    }
    return this.stack[this.stack.length - 1];
   }

   //check if the stack is empty
   isEmpty(){
    return this.stack.length === 0;
   }

   //size of the stack
   size(){
    return this.stack.length;
   }

   //print the stack
   print(){
    console.log(this.stack.join("- > "))
   }
}

const stack = new Stack()

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();

console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.size());
