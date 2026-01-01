class Node{
    constructor(value){
        this.value=value
        this.left=null
        this.right=null
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null
    }
    isEmptty(){
        return this.root==null
    }

    insert(value){
        const node = new Node(value)
        if(this.isEmptty()){
            this.root=node
        } else {
            this.insertNode(this.root,node)
        }
    }

    insertNode(root,node){
        if(node.value<root.value){
            if(root.left==null){
                root.left=node
            } else {
                this.insertNode(root.left,node)
            }
        } else if(node.value>root.value){
            if(root.right==null){
                root.right=node
            } else {
                this.insertNode(root.right,node)
            }
        } else{
            console.log("Duplicate detected")
            return root
        }
    }

    search(root,value){
        if(!root){
            return false
        } else {
            if(root.value==value){
                return true
            } else if(value<root.value){
                return this.search(root.left,value)
            } else {
                return this.search(root.right,value)
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

    inOrder(root){
        if(root){
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }

    posOrder(root){
        if(root){
            this.posOrder(root.left)
            this.posOrder(root.right)
            console.log(root.value)
        }
    }

    levelOrder(){
        const queue=[]
        queue.push(this.root)
        while(queue.length){
          let curr=queue.shift()
          console.log(curr.value)
          if(curr.left){
            queue.push(curr.left)
          } 
          if(curr.right){
            queue.push(curr.right)
          }
        }
    }

    min(root){
        if(!root.left){
         return root.value
        } else {
           return this.min(root.left)
        }
    }

    max(root){
        if(!root.right){
            return root.value
        } else {
          return  this.max(root.right)
        }
    }

    closestVal(root,target){
        let closest = root.value
        while(root){
            if(Math.abs(target-root.value)<Math.abs(target-closest)){
                closest=root.value
            }

            if(target <root.value){
                root=root.left
            } else {
                root = root.right
            }
        }
        return closest
    }
    isValid(root,min=-Infinity,max=Infinity){
        if(!root)return true

        if(root.value<=min || root.value>=max){
            return false
        }

        return(
            this.isValid(root.left,min,root.value) &&
            this.isValid(root.right,root.value,max)
        )
    }
    height(root){
      if(!root){
        return -1
      }
      return 1+Math.max(this.height(root.left),this.height(root.right))
    }
    
    depth(root,value){
      let depth=0
      let current = root
      while(current!==null){
        if(current.value==value){
            return depth
        }
         else if(value < current.value){
            current = current.left
         } else {
            current=current.right
         }
         depth++
      }
      return -1
    }
     delete(root,value){
        if(!root){
            return 
        }
     }
}

const bst=new BinarySearchTree()
bst.insert(50)
bst.insert(40)
bst.insert(60)
bst.insert(30)
bst.insert(45)
bst.insert(55)
console.log(bst.min(bst.root))
console.log(bst.max(bst.root))