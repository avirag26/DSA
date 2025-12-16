
//Reverse the word in string 
//Leetcode-151

var reverseWords = function(s) {
    let splits=s.split(" ")
    let stack=[]
    for(let i of splits){
        stack.push(i)
    }
    let final=''

    while(stack.length){
       let current = stack.pop()
       if(current){
        final +=" "+current;
       }
    }
    return final.trim()

};
// console.log(reverseWords( "the sky is blue"))


// Valid Parentheses
//Leetcode-20
function isEmpty(stack){
    return stack.length==0
}
 
var isValid = function(s) {
    const stack=[]
    for(let i=0;i<s.length;i++){
        const char=s[i]
        if(char =='(' || char =='{' || char =="["){
            stack.push(char)
        }else if(char==")"||char=="}"||char=="]"){
            if(isEmpty(stack)){
                return false;
            }
            const top=stack.pop()
            if(
                (char==")" && top!=="(")||
                (char=="}" && top!=="{")||
                (char=="]" && top!=="[")
            ){
                return false
            }
        }
    }
    return isEmpty(stack)
};

//Undo/Redo operation using stack

class Undoredo{
    constructor(){
        this.undoStack=[]
        this.redoStack=[]
    }


    doAction(value){
         this.undoStack.push(value)
         this.redoStack=[];
         console.log("Action done" , value)
    }

    undoAction(){
        if(this.undoStack.length==0) return "Nothing to undo"
        let action=this.undoStack.pop();
        this.redoStack.push(action)
        let currentState=this.undoStack.length > 0 ?this.undoStack[this.undoStack.length-1]:"Empty"
        console.log("Undo: ",currentState)
    }

    redoAction(){
        if(this.redoStack.length === 0) return "Nothing to redo"
        let action = this.redoStack.pop();
        this.undoStack.push(action)
        console.log("Redo: ",action)
    }
}


const edit=new Undoredo()


edit.doAction("Type A")
edit.doAction("Type B")
edit.doAction("Type C")


edit.undoAction()
edit.undoAction()
edit.undoAction()
edit.redoAction()


//Sort a string using stack

const str = 'efgabcd';

function sort(){
  
    let stack=str.split("");
    let stack2=[];

    while(stack.length){
        let top=stack.pop()

        while(stack2.length > 0 && stack2[stack2.length-1]>top){
            stack.push(stack2.pop())
        }
        stack2.push(top)
    }
    console.log(stack2.join(""))
}



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

