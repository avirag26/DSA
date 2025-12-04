
function reverse(str){
    let word=''
    let res=''

    for(let i=0;i<str.length;i++){
        if(str[i]!==' ') {
            word +=str[i]
        }
        if(i==str.length-1 || str[i]==" "){
            for(let j=word.length-1 ;j>=0;j--){
                res +=word[j]
            }
            if(i!==str.length-1)  res +=" "
            word=''
        } 
    }
    return res
}

console.log(reverse("HELLO WORLD"))