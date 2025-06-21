// Class representing the node in the linked list
class Node {
  constructor(new_data) {
    this.data = new_data;
    this.next = null;
  }
}

// Class to implement stack using a singly linked list
class Stack {
  // Constructor to initialize the stack
  constructor() {
    this.head = null;
  }

  // Function to check if the stack is empty
  isEmpty() {
    // If the head is null, the stack is empty
    return this.head === null;
  }

  // Function to push an element onto the stack
  push(new_data) {
    // Create a new node with the given data
    const new_node = new Node(new_data);

    // Link the new node to the current top node
    new_node.next = this.head;

    // Update the top to the new node
    this.head = new_node;
  }

  // Function to remove and return the top element from the stack
  pop() {
    // Check for stack underflow
    if (this.isEmpty()) {
      console.log("Stack Underflow");
      return null;
    } else {
      // Assign the current top to a temporary variable
      const temp = this.head;

      // Update the top to the next node
      this.head = this.head.next;

      // Return the popped element's data
      return temp.data;
    }
  }

  // Function to return the top element of the stack without removing it
  peek() {
    // If the stack is not empty, return the top element
    if (!this.isEmpty()) {
      return this.head.data;
    } else {
      console.log("Stack is empty");
      return null;
    }
  }
}

// Driver program to test the stack implementation
const st = new Stack();

// Push elements to the stack
st.push(10);
st.push(20);
st.push(30);
st.push(40);

console.log("Removing two elements...");

// Pop two elements
console.log("Popped element: " + st.pop());
console.log("Popped element: " + st.pop());

// Print the top element of the stack
console.log("Top element is " + st.peek());
