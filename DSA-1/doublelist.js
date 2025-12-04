class Node{
   constructor(value){
      this.value=value
      this.next=null
      this.prev=null
   }
}

class Likedlist{
   constructor(){
      this.head=null
      this.size=0
   }
   isEmpty(){
      return this.size==0
   }
   prepend(value){
      const node =new Node(value)
      if(this.isEmpty()){
         this.head=node
      } else {
         node.next=this.head
         this.head.prev=node
         this.head=node
      }
      this.size++
   }
   
   append(value){
      const node = new Node(value)
      if(this.isEmpty()){
         this.head=node
      } else {
       let curr=this.head
       while(curr.next){
         curr=curr.next
       }
       curr.next=node
       node.prev=curr
          
      }
    
      this.size++
   }

   middle(){
      let slow=this.head
      let fast=this.head
      while(fast!==null && fast.next!==null){
         slow=slow.next
         fast=fast.next.next

      }
      return slow.value
   }

   print(){
      let curr=this.head
      let printvalue=''
      while(curr){
         printvalue +=curr.value+' '
         curr = curr.next
      }
      console.log(printvalue)
   }

   reverse(){
      let curr=this.head
      let newhead;
      while(curr){
         let nexnode=curr.next
         curr.next=curr.prev
         curr.prev=nexnode
         newhead=curr
         curr=curr.prev
      }
      this.head=newhead
   }
}
const list = new Likedlist()
list.append(5)
list.append(10)
list.append(20)
list.reverse()
list.print()
