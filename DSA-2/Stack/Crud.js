
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
console.log(reverseWords( "the sky is blue"))


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