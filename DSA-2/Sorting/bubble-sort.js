function bubble(arr){
    for(let i=0;i<arr.length-1;i++){
        let flag=0
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                flag=1
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=temp
            }
        }
        if(flag==0){
            break;
        }
    }
    return arr
}

console.log(bubble([1,4,87,43,9,4,67,45,76,4,1,2,3,4,5,6,7,8,9]))