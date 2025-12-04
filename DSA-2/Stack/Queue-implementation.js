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

const queue = new Queue()

queue.enqueue(10)
queue.enqueue(20)
queue.enqueue(30)
queue.dequeue()
console.log(queue.front())

queue.print()