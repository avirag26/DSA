
function bubble(list){
if(!list.head || !list.head.next==null) return list

let size = list.getSize()

for(let i=0;i<size;i++){

    let curr=list.head
    let swapped=false;
    while(curr && curr.next){
        if(curr.value>curr.next.value){
        swapped=true
        let temp=curr.value
        curr.value=curr.next.value
        curr.next.value=temp
        }
        curr=curr.next
    }
    if(!swapped) break;
}
return list

}



class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}
class LikedList{
    constructor(){
        this.head=null
        this.size=0
    }
    getSize(){
        return this.size
    }
    isEmpty(){
        return this.size==0
    }
    insert(value){
        const node = new Node(value)
        if(this.isEmpty()){
            this.head=node
        } else {
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    display(){
        let curr =this.head
        let printvalue=''
        while(curr){
            printvalue+=curr.value+' '
            curr=curr.next
        }
        console.log(printvalue)
    }
}
const list = new LikedList()
list.insert(104)
list.insert(20)
list.insert(450)
list.insert(109)
list.insert(10)
list.display()
bubble(list)
list.display()

