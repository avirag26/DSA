//flattern array

function flatten(arr){
    let result=[]
    for(let items of arr){
        if(Array.isArray(items)){
            result.push(...flatten(items))
        } else {
            result.push(items)
        }
    }
   return result
}
// console.log(flatten([1, [2, [3, [4]]]]))

function deepCopy(obj){
    if(!obj||typeof obj !=="object"){
        return obj
    }
    let copy = Array.isArray(obj)?[]:{}
    for(let i in obj){
        copy[i]=deepCopy(obj[i])
    }
    return copy
}

//factoril

function factorial(n){
    if(n==0)return 1

    return n*factorial(n-1)
}


//print fibanoci
function fib(n){
    if(n<2) return n

    return fib(n-1)+fib(n-2)
}

function printfib(n){
    let result=[]
    for(let i=0;i<n;i++){
        result.push(fib(i))
    }
    console.log(result)
}

//sum of array

function sumArray(arr,i=0){
    if(i==arr.length) return 0;

    return arr[i]+sumArray(arr,i+1)
}



// function fibnoci(n){
//     if(n<2)return n
    
//     return fibnoci(n-1)+fibnoci(n-2)
// }

function binarysearch(arr,target){
    let left=0;
    let right=arr.length-1
    
    while(left<right){
    
        let mid=Math.floor((left+right)/2)
        if(target==arr[mid]){
            return mid
        }
        if(target < arr[mid]){
            
            right = mid-1
        } else {
            left =mid+1
        }
    }
    


}

function recbinary(arr,target,left=0,right=arr.length-1){
    if(left>right) return -1

    let mid=Math.floor((right+left)/2)
    if(target ==arr[mid]){
        return mid
    }
    if(target < arr[mid]){
        return recbinary(arr,target,left,mid-1)
    } else {
       return recbinary(arr,target,mid+1,right)
    }
}
console.log(recbinary([1,2,3,4,5,6,7,8],5))