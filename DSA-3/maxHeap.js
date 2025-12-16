class MaxHeap{
    constructor(){
        this.heap=[]
    }

    parentIndex(index){
      return Math.floor((index-1)/2)
    }
    leaftChildIndex(index){
        return 2*index+1
    }
    rightChildIndex(index){
        return 2*index+2
    }

    insert(value){
        this.heap.push(value)
        this.heapifyUp();
    }
    swap(i,j){
        [this.heap[i],this.heap[j]]=[this.heap[j],this.heap[i]]
    }
    heapifyUp(){
        
        let index = this.heap.length-1
        while(index>0){
            let parent=this.parentIndex(index)
            if(this.heap[parent]<this.heap[index]){
               this.swap(parent,index)
               index=parent
            } else {
                break
            }
        }
    }

    extraHeap(){
        if(this.heap.length==0)return null
        if(this.heap.length==1)return this.heap.pop()

            const max=this.heap[0]
            this.heap[0]=this.heap.pop();
            this.heapifyDown(0)
            return max
    }
     
    heapifyDown(index){
       let left = this.leaftChildIndex(index)
       let right= this.rightChildIndex(index)
       let largest = index
       
       if(left<this.heap.length && this.heap[left]>this.heap[largest]){
        largest=left
       }
       if(right <this.heap.length && this.heap[right]>this.heap[largest]){
        largest=right
       }

       if(largest!==index){
        this.swap(index,largest)
        this.heapifyDown(largest)
       }

    }

    printheap(){
        console.log(this.heap)
    }

    
}

const heap = new MaxHeap()
heap.insert(70)
heap.insert(50)
heap.insert(40)
heap.insert(45)
heap.insert(35)
heap.insert(10)
heap.insert(9)
heap.insert(39)
heap.insert(16)
heap.insert(60)


heap.printheap()

