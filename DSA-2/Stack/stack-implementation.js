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

stack.push(10)
stack.push(20)
stack.push(30)
stack.print()
console.log(stack.size())
console.log(stack.isEmpty())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.peek())


//Stack implimentation using Likedlist
