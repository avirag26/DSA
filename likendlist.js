class Node {
    constructor(value){
        this.value=value
        this.next=null
    }
}

class Likedlist {
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size === 0
    }

    getSize(){
        return this.size
    }
     
    contains(value){
        let curr=this.head
        while(curr){
            if(curr.value==value)return true
            curr=curr.next
        }
        return false
    }
    prepend(value){
      
        if(this.contains(value)) return

        const node= new Node(value);
        if(this.isEmpty()){
            this.head=node
        } else {
            node.next=this.head
            this.head=node
        }
        this.size ++
    }

    print(){
        if(this.isEmpty()){
            console.log("The list is empty")
        } else {
            let curr=this.head
            let printValue=''

            while(curr){
                printValue += `${curr.value} `
                curr = curr.next
            }
             console.log(printValue)
        }
       
    }
    append(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        } else{
          let prev = this.head
          
          while(prev.next){
            prev = prev.next
          }
          prev.next=node
        }
        this.size ++
    }

    insert(value,index){
     if(index < 0  || index > this.size){
        return 
     }
     if(index === 0){
        this.prepend(value)
     } else {
        const node = new Node(value)
         let prev = this.head
         for(let i=0;i<index-1;i++){
            prev = prev.next
         }
         node.next = prev.next
         prev.next=node
         this.size ++
     }
    }
    
    remove(index){
        if(index < 0 || index >= this.size){
            return null
        }
        let removenode
        
        if(index === 0){
           removenode = this.head
           this.head = removenode.next
        } else {
         let prev = this.head
          for(let i=0;i<index-1;i++){
            prev= prev.next
          }
          removenode = prev.next
          prev.next = removenode.next
        }
        this.size --
        return removenode.value
    }
    removevalue(value){
        if(this.isEmpty()){
            return null
        }
        if(this.head.value==value){
            this.head=this.head.next
            this.size--
            
            return value
        } else{
            let prev = this.head
            while(prev.next && prev.next.value !== value){
                prev = prev.next
            }
            if(prev.next){
                let removenode = prev.next
                prev.next = removenode.next
                this.size--
                return value
            }
            return null
        }
        
    }
   search(value){
     if(this.isEmpty()){
        return -1
     }
     let i=0
     let curr = this.head
     while(curr){
        if(curr.value == value){
            return i
        }
        curr = curr.next
        i++
     }
     return -1
   }
   reverse(){
   let prev=null
   let curr=this.head
    while(curr){
        let next = curr.next
        curr.next = prev
        prev= curr
        curr=next
    }
    this.head = prev
   }

   
   
   
   
}

let list=new Likedlist()

console.log("Liked listis empty:",list.isEmpty());
console.log("Size of likedList:",list.getSize());


list.prepend(5)
list.prepend(10)
list.prepend(50)
list.prepend(5)
list.prepend(70)




list.print()



