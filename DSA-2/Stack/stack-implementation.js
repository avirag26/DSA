//Stack implimentation using Array

class Stack {
    constructor(){
        this.stack=[];
    }

    size(){
        return this.stack.length;
    }

    isEmpty(){
        return this.size() === 0
    }

    push(element){
        this.stack.push(element)
    }
    
    pop(){
        if(this.isEmpty()){
          return  "The stack is empty"
        }
        return this.stack.pop()

    }
    peek(){
        if(this.isEmpty()){
          return  "The stack is empty"
        }
        return this.stack[this.stack.length-1];
    }

    print(){
        for(let val of this.stack){
            console.log(val)
        }
    }
}
const stack=new Stack()

// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// console.log(stack.size())
// console.log(stack.isEmpty())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.pop())
// console.log(stack.peek())


//Stack implimentation using Likedlist

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Likedstack{
    constructor(){
        this.head=null
        this.size=0
    }
    isEmpty(){
        return this.size == 0
    }
    getsize(){
        return this.size
    }
    push(value){
        const node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.size ++
            return
        }
        node.next=this.head
        this.head=node
        this.size++
        
        return
    }
    pop(){
        if(this.isEmpty()){
            return "The list is empty"
        } 
        this.head=this.head.next
        this.size--

        
    }
    peek(){
        if(this.isEmpty()){
            return "The stack is empty"
        } 
        return this.head.value
    }
    
    print(){
        let curr=this.head
        let printvalue=''
        while(curr){
            printvalue +=curr.value+' '
            curr=curr.next
        }
        console.log(printvalue)
    }
}

//Stack using two queue

class Queuestack{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    
    isEmpty(){
        return this.q1.length==0
    }
    size(){
        return this.q1.length
    }
    push(value){
        while(this.q1.length !== 0){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(value)

        while(this.q2.length!==0){
            this.q1.push(this.q2.shift())
        }
    }
    pop(){
         if(this.isEmpty()){
            return "The stack is empty"
        }
      return  this.q1.shift()
    }
    peek(){
        if(this.isEmpty()){
            return "The stack is empty"
        }
        return this.q1[0]
    }
}
const list = new Queuestack()
list.push(10)
list.push(20)
list.push(30)
list.push(40)
console.log(list.size())
console.log(list.pop())

