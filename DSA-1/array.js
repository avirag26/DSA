//Reverse each word in a string (e.g., "HELLO WORLD" to "OLLEH DLROW")
function string(str){
    return str.split(" ").map(w=>w.split('').reverse().join('')).join(" ")
}

//Find the second largest element in an array (handle negative numbers)

function secondlg(arr){
   let lg=-Infinity
   let sl=-Infinity
   let tl=-Infinity
   for(let i=0;i<arr.length;i++){
    if(arr[i]>lg){
        tl=sl
        sl=lg
        lg=arr[i]
    } else if(arr[i]>sl && arr[i]!==lg){
        tl=sl
        sl=arr[i]
    } else if(arr[i]>tl && arr[i]!==lg && arr[i]!==sl){
       tl=arr[i]
    }
   }
   return tl
}

//Find the frequency of each number in an array

function freq(arr){
  
    for(let i=0;i<arr.length;i++){
        if(arr[i]==-1){
            continue;
        }
        let val=arr[i]
        let count=0;
        for(let j=0;j<arr.length;j++){
            if(val===arr[j]){
                count++
                arr[j]=-1
            }
        }
        console.log(val ,count +"Times")
    }

}

function zero(arr){
    let j=0
    for(let i=0;i<arr.length;i++){
        if(arr[i]!==0){
            arr[j]=arr[i]
            j++
            
        } 
    }
    
    while(j<arr.length){
        arr[j]=0
        j++
    }
    console.log(arr)
}

function mergesort(arr1,arr2){
    
    for(let i=0;i<arr2.length;i++){
        arr1[arr1.length]=arr2[i]
        
    }
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr1.length-i-1;j++){
            if(arr1[j]> arr1[j+1]){
                let temp=arr1[j]
                arr1[j]=arr1[j+1]
                arr1[j+1]=temp

            }
        }
    }
    return arr1
}
console.log(mergesort([1,2,4,5,3],[4,7,4,2,8]))