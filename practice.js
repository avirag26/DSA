let arr=[2,3,4,5];
let value=1;

for(let i=arr.length-1;i>=0;i--){
    arr[i+1]=arr[i]

}
arr[0]=value
console.log(arr)