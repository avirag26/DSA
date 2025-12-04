function megesort(arr){
    if(arr.length<2){
        return arr
    } 
    let mid=Math.floor(arr.length/2)
    let leftarr=arr.slice(0,mid)
    let rightarr=arr.slice(mid)

    return merge(megesort(leftarr),megesort(rightarr))
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
    return [...sortedarr , ...leftarr ,...rightarr]
}

console.log(megesort([5,4,3,2,1]))