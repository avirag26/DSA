
//Queue using array
class Queue{
    constructor(){
        this.queue=[]
    }

     isEmpty(){
        return this.size()==0
    }
    size(){
        return this.queue.length
    }

    enqueue(element){
        this.queue.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            return "The Queue is  empty"
        }
       return this.queue.shift()
    }
    front(){
         if(this.isEmpty()){
            return "The Queue is  empty"
        }
        return this.queue[0]
    }
    print(){
        let printValue=''
        for(let item of this.queue){
            printValue +=item + ' '
        }
        console.log(printValue)
    }
   
}

// const queue = new Queue()

// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.dequeue()
// console.log(queue.front())

// queue.print()

//Queue using Likedlist


class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}
class Likedqueue{
    constructor(){
    this.head=null
    this.tail=null
    this.size=0
    }

    getsize(){
        return this.size
    }

    isEmpty(){
      return this.size==0
    }

    enqueue(value){
      const node = new Node(value)
      if(this.isEmpty()){
        this.head=node
        this.tail=node
        this.size++
        return
      }
      this.tail.next=node
      this.tail=node
      this.size++
      return 
    }

    dequeue(){
        if(this.isEmpty()){
            return "The list is empty"
        }
        const removenode = this.head
        this.head=removenode.next
        this.size--

        if(this.head==null){
            this.tail=null
        }
        return  removenode.value
    }

    front(){
        if(this.isEmpty()){
            return "The list is empty"
        }

        return this.head.value
    }

    print(){
        if(this.isEmpty()){
            return "Stack is empty"
        }
        let curr=this.head
        let printvalue=''
        while(curr){
            printvalue += curr.value+' '
            curr = curr.next
        }
        console.log(printvalue)
    }
}

const list = new Likedqueue()

list.enqueue(10)
list.enqueue(20)
list.enqueue(30)
list.enqueue(40)
list.enqueue(50)
list.print()
console.log(list.dequeue())
console.log(list.front())

//implement queue using two stack

class Queuestack {
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    
    enqueue(value){
        this.stack1.push(value)
    }

    dequeue(){
        if(this.stack2.length ===0){
            while(this.stack1.length!==0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length ==0){
            return "The list is empty"
        }

        return this.stack2.pop()
    }

    front(){
         if(this.stack2.length ===0){
            while(this.stack1.length!==0){
                this.stack2.push(this.stack1.pop())
            }
        }
        if(this.stack2.length ==0){
            return "The list is empty"
        }

        return this.stack2[this.stack2.length-1]
    }

    size(){
        return this.stack1.length + this.stack2.length
    }
    isEmpty(){
        return this.size()==0
    }

    
}