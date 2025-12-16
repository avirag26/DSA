function heapSort(arr){
    let n=arr.length

    for(let i=Math.floor(n/2)-1;i>=0;i--){
        heapify(arr,n,i)
    }           

    for(let i=n-1;i>0;i--){
        [arr[0],arr[i]]=[arr[i],arr[0]]
        heapify(arr,i,0)
    }
    return arr
}


function heapify(arr,n,i){
    let left = 2*i+1
    let right= 2*i+2
    let largest = i

    if(left < n && arr[left]>arr[largest]){
        largest=left
    }
    if(right < n && arr[right]>arr[largest]){
        largest=right
    }

    if(largest!==i){
        [arr[largest],arr[i]]=[arr[i],arr[largest]]
        heapify(arr,n,largest)
    }
}
let arr=[70,50,40,45,35,10,9,39,16,60]
console.log("Orginal Array: ",arr)
const sorted = heapSort(arr)
console.log("Sorted Array: ",sorted)