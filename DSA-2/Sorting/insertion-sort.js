function insert(arr){
    for(let i=1;i<arr.length;i++){
        let temp=arr[i]
       let j=i-1
        while(j>=0 && temp <=arr[j]){
             arr[j+1]=arr[j]
             j--
        }
        arr[j+1]=temp
    }
    return arr
}
console.log(insert([5,4,3,2,1]))
