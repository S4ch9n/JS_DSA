class Queue{
  constructor(){
    this.q = []
  }
  isEmpty(){
    return this.q.length === 0;
  }
  enqueue(x){
    return this.q.push(x);
  }
  dequeue(){
    if (!this.isEmpty()) this.q.shift();
  }
  getFront(){
    return this.isEmpty() ? -1 : this.q[0];
  }
  display(){
    console.log(this.q.join(" "));
  }
}
const q = new Queue();
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
q.enqueue(4);
console.log("elements present in the queue : ");
q.display()
q.dequeue();
console.log("elements present in the queue after using dequeue operation : ");
q.display();
