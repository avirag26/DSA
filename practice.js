function bubble(arr){
    for(let i=0;i<arr.length-1;i++){
        let flag=0
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                flag=1
                let temp=arr[j+1]
                arr[j+1]=arr[j]
                arr[j]=temp
            }
        }
        if(flag==0){
            break;
        }
    }
    return arr
}
// console.log(bubble([5,4,3,2,1]))

function insertion(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
        let j=i-1
        while(j>=0 && temp<=arr[j]){
          arr[j+1]=arr[j]
          j--
        }
        arr[j+1]=temp
    }
    return arr
}
// console.log(insertion([5,4,3,2,1]))

function selection(arr){
    for(let i=0;i<arr.length;i++){
        let min=i
         for(let j=i+1;j<arr.length;j++){
            if(arr[j]<arr[min])min=j
         }
         [arr[i],arr[min]]=[arr[min],arr[i]]
    }
    return arr
}
// console.log(selection([5,4,3,2,1]))

function quick(arr){
   if(arr.length<2){
    return arr
   }
        let pivot=arr[arr.length-1]
        let leftarr=[]
        let rightarr=[]
        
      for(let i=0;i<arr.length-1;i++){
         if(arr[i]<pivot){
            leftarr.push(arr[i])
         } else {
            rightarr.push(arr[i])
         }
      }
    return [...quick(leftarr),pivot,...quick(rightarr)]
}
// console.log(quick([5,4,3,2,1]))


function mergesort(arr){
    if(arr.length<2){
       return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftarr=arr.slice(0,mid)
    let rightarr=arr.slice(mid)

    return merge(mergesort(leftarr),mergesort(rightarr))

}

function merge(leftarr,rightarr){
    let sortedarr=[]
     while(leftarr.length && rightarr.length){
        if(leftarr[0]<rightarr[0]){
            sortedarr.push(leftarr.shift())
        } else {
            sortedarr.push(rightarr.shift())
        }
     }
     return [...sortedarr,...leftarr,...rightarr]
}
// console.log(mergesort([5,4,3,2,1]))

class Stack{
    constructor(){
        this.stack=[]
    }
    getsize(){
        return this.stack.length
    }
    isEmpty(){
        return this.getsize()==0
    }
    push(value){
        this.stack.push(value)
    }
    pop(){
        if(this.isEmpty()){
            return "Stack underflow"
        }
        return this.stack.pop()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack underflow"
        }
        return this.stack[this.stack.length-1]
    }
    print(){
        let printvalue=''
        for(let item of this.stack){
            printvalue +=item+' '
        }
        console.log(printvalue)
    }
}
// const stack = new Stack()
// stack.push(10)
// stack.push(20)
// stack.push(30)
// stack.print()
// console.log(stack.pop())
// stack.print()
// console.log(stack.peek())


class Snode{
    constructor(value){
        this.value=value
        this.next=null
    }
}

class LikedStack {
    constructor(){
        this.head=null
        this.size=0;
    }
    getsize(){
        return this.size
    }
    isEmpty(){
        return this.getsize()==0
    }
    push(value){
        const node = new Snode(value)
        if(this.isEmpty()){
            this.head=node
            this.size++
            return
        }
        node.next=this.head
        this.head=node
        this.size++
        return
    }
    pop(){
        if(this.isEmpty()){
            return "Stack underflow"
        }
        let res=this.head
        this.head=this.head.next
        return res.value
    }
    peek(){
        if(this.isEmpty()){
            return "Stack underflow"
        }
        return this.head.value
    }
    print(){
        let printvalue=''
        let curr=this.head
        while(curr){
            printvalue+=curr.value+' '
            curr=curr.next
        }
        console.log(printvalue)
    }
}

// const linkstack= new LikedStack()
// linkstack.push(10)
// linkstack.push(20)
// linkstack.push(30)
// linkstack.push(40)
// linkstack.print()
// console.log(linkstack.peek())
// console.log(linkstack.pop())
// linkstack.print()

class StackQueue{
    constructor(){
        this.q1=[]
        this.q2=[]
    }
    getsize(){
        return this.q1.length
    }
    isEmpty(){
        return this.getsize()==0
    }
    push(value){
        while(this.q1.length!==0){
            this.q2.push(this.q1.shift())
        }
        this.q1.push(value)

        while(this.q2.length!==0){
            this.q1.push(this.q2.shift())
        }
    }
    pop(){
        if(this.isEmpty()){
            return "Stack undeflow"
        }
        return this.q1.shift()
    }
    peek(){
        if(this.isEmpty()){
            return "Stack undeflow"
        }
        
        return this.q1[0]
    }
    print(){
        let printvalue=''
        for(let item of this.q1){
            printvalue += item +' '
        }
        console.log(printvalue)
    }
}

// const qstack= new StackQueue()
// qstack.push(10)
// qstack.push(20)
// qstack.push(30)
// qstack.print()
// console.log(qstack.peek())
// console.log(qstack.pop())
// qstack.print()

class Queue {
    constructor(){
        this.q1=[]
    }

    getsize(){
        return this.q1.length
    }
    isEmpty(){
        return this.getsize()==0
    }
    enqueue(value){
        this.q1.push(value)
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue underflow"
        }
        return this.q1.shift()
    }
    front(){
        if(this.isEmpty()){
            return "Queue underflow"
        }
        return this.q1[0]
    }
    print(){
        let printValue = ''
        for(let item of this.q1){
            printValue += item +' '
        }
        console.log(printValue)
    }
}

// const queue= new Queue()
// queue.enqueue(10)
// queue.enqueue(20)
// queue.enqueue(30)
// queue.enqueue(40)
// queue.print()
// console.log(queue.front())
// console.log(queue.dequeue())
// queue.print()

class Qnode{
    constructor(value){
        this.value = value
        this.next = null

    }
}
class Likedqueue{
    constructor(){
        this.head = null
        this.tail=null
        this.size = 0
    }
    getsize(){
        return this.size
    }
    isEmpty(){
        return this.getsize()==0
    }
    enqueue(value){
        const node = new Qnode(value) 
       if(this.isEmpty()){
        this.head=node
        this.tail=node
       } else {
        this.tail.next=node
        this.tail=node
       }
       this.size++
       return
    }
    dequeue(){
        if(this.isEmpty()){
            return "Stack underflow"
        }
        let removenode = this.head
        this.head=removenode.next
         this.size --
        if(this.head==null){
           this.tail=null
        }
        return removenode.value
    }
    front(){
         if(this.isEmpty()){
            return "Stack underflow"
        }
        return this.head.value
    }
    print(){
        let printvalue =''
        let curr = this.head
        while(curr){
            printvalue += curr.value + ' '
            curr = curr.next
        }
        console.log(printvalue)
    }
}
// const linkque=new Likedqueue()
// linkque.enqueue(10)
// linkque.enqueue(20)
// linkque.enqueue(30)
// linkque.print()
// console.log(linkque.front())
// console.log(linkque.dequeue())
// linkque.print()

class Queuestack{
    constructor(){
        this.stack1=[]
        this.stack2=[]
    }
    getsize(){
        return this.stack1.length+this.stack2.length
    }
    isEmpty(){
        return this.getsize()==0
    }
    enqueue(value){
      this.stack1.push(value)
    }
    dequeue(){
       if(this.stack2.length == 0){
        while(this.stack1.length!==0){
            this.stack2.push(this.stack1.pop())
        }
        if(this.stack2.length==0){
            return "Stack underflow"
        }
       
       }
        return this.stack2.pop()
    }
    front(){
        if(this.stack2.length == 0){
        while(this.stack1.length!==0){
            this.stack2.push(this.stack1.pop())
        }
        if(this.stack2.length==0){
            return "Stack underflow"
        }
        return this.stack2[this.stack2.length-1]
        }
    }

     print(){
        let result =[];
         if(this.stack2.length > 0){
            for(let i=this.stack2.length-1;i>=0;i--){
              result.push(this.stack2[i])
            }
            for(let i=0;i<this.stack1.length;i++){
                result.push(this.stack1[i])
            }
         }
         else {
             for(let i=0;i<this.stack1.length;i++){
                result.push(this.stack1[i])
            }
         }
         console.log(result.join(" "))
    }
}
// const sque=new Queuestack()
// sque.enqueue(10)
// sque.enqueue(20)
// sque.enqueue(30)
// sque.enqueue(40)
// sque.print()
// console.log(sque.front())
// console.log(sque.dequeue())
// sque.print()


class HastTable{
    constructor(size){
        this.table= new Array(size)
        this.size = size
    }
    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index]=[key,value];
    }
    get(key){
        let index = this.hash(key)
        return  this.table[index]
    }
    remove(key){
        let index = this.hash(key)
        this.table[index]=undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

// const hash = new HastTable(50)
// hash.set("name","Avirag")
// hash.set("age",15)
// hash.set("name","Ashin")
// hash.display()

class HashCol {
   constructor(size){
   this.table = new Array(size)
   this.size = size
   }
   hash(key){
    let total=0;
    for(let i=0;i<key.length;i++){
        total+=key.charCodeAt(i)
    }
    return total % this.size
   }
   set(key,value){
    let  index = this.hash(key)
    let bucket = this.table[index]
    if(!bucket){
        this.table[index]=[[key,value]]
    } else {
        let samekey = bucket.find(item =>item[0]==key)
        if(samekey){
            samekey[1]=value
        } else {
            bucket.push([key,value])
        }
    }
   }
   get(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
    let samekey = bucket.find(item =>item[0]==key)
    if(samekey){
        return samekey[1]
    }
    }
    return undefined
   }
   remove(key){
    let index = this.hash(key)
    let bucket = this.table[index]
    if(bucket){
    let samekey = bucket.find(item =>item[0]==key)
    if(samekey){
        bucket.splice(bucket.indexOf(samekey),1)
    }
    return samekey
    }
    return undefined
   }

   display(){
        for(let i=0;i<this.table.length;i++){
            if( this.table[i] && this.table[i].length > 0){
                console.log(i,this.table[i])
            }
        }
    }
}
const colhash = new HashCol(50)
colhash.set("name","Avirag")
colhash.set("age",15)
colhash.set("mane","ashin")
colhash.display()
console.log(colhash.get("name"))
console.log(colhash.remove("age"))
colhash.display()
