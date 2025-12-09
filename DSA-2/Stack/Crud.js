
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

