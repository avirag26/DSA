class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}
class BinaryTree{
    constructor(){
        this.root=null
    }
    isEmpty(){
        return this.root==null
    }

    contains(root,value){
        if(!root)return false
        if(root.value==value)return true

        return this.contains(root.left,value)||this.contains(root.right,value)
    }
    insert(value){
        if(this.contains(this.root,value)){
            console.log("Duplicate detected")
            return
        }
       const node = new Node(value)
       if(this.root==null){
        this.root=node
        return
       }
       let queue=[this.root]
       while(queue.length>0){
        let curr = queue.shift()

        if(curr.left==null){
            curr.left=node
            return
        } else {
            queue.push(curr.left)
        }
        if(curr.right==null){
            curr.right=node
            return
        } else {
            queue.push(curr.right)
        }
       }
    }

    preOrder(root){
        if(root){
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
}
const bt=new BinaryTree()
bt.insert(10)
bt.insert(20)
bt.insert(30)
bt.insert(40)
bt.insert(50)
bt.insert(60)
bt.insert(60)

bt.preOrder(bt.root)

