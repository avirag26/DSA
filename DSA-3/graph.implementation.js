class Graph{
    constructor(){
        this.adjecencyList={}
    }
    addVertex(vertex){
        if(!this.adjecencyList[vertex]){
            this.adjecencyList[vertex]= new Set()
        }
    }
    addEedges(vertex1,vertex2){
        if(!this.adjecencyList[vertex1]){
            this.addVertex(vertex1)
        }
         if(!this.adjecencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjecencyList[vertex1].add(vertex2)
        this.adjecencyList[vertex2].add(vertex1)
    }
    hasEdges(vertex1,vertex2){
        return (
            this.adjecencyList[vertex1]?.has(vertex2) &&
             this.adjecencyList[vertex2]?.has(vertex1)
        )
    }
    removeEdges(vertex1,vertex2){
        this.adjecencyList[vertex1].delete(vertex2)
         this.adjecencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        if(!this.adjecencyList[vertex]){
            return
        }
        for(let adjecentvertex of this.adjecencyList[vertex]){
            this.removeEdges(vertex,adjecentvertex)
        }

        delete this.adjecencyList[vertex]
    }
    bfs(start){
        let queue=[]
        let visited=new Set()
        queue.push(start)
        visited.add(start)
        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let adj of this.adjecencyList[vertex]){
                if(!visited.has(adj)){
                    visited.add(adj)
                    queue.push(adj)
                }
            }
        }
    }
    dfs(start){
        let stack=[]
        let visited=new Set()
        stack.push(start)
        while(stack.length){
            let vertex=stack.pop()
            if(!visited.has(vertex)){
                visited.add(vertex)
                console.log(vertex)
                for(let adj of this.adjecencyList[vertex]){
                    if(!visited.has(adj)){
                        stack.push(adj)
                    }
                }
            }
        }
    }
    display(){
        for(let vertex in this.adjecencyList){
            console.log(vertex + " -> "+[...this.adjecencyList[vertex]])
        }
    }
    hasCycle(){
        let visited = new Set()

        for(let start in this.adjecencyList){
        
            if(!visited.has(start)){
                let queue=[[start,null]]
                visited.add(start)
                while(queue.length){
                    let [vertex ,parent]=queue.shift()
                     for(let adj of this.adjecencyList[vertex]){
                        if(!visited.has(adj)){
                            visited.add(adj)
                            queue.push([adj,vertex])
                        }
                        else if(adj!==parent) {
                          return true
                        }
                     }
                }

            }
        }
        return false
    }
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEedges("A","B")
graph.addEedges("B","C")
graph.addEedges("C","D")
graph.addEedges("D","A")
// graph.display()
// console.log(graph.hasEdges("A","B"))
// graph.removeVertex("A")
// graph.display()
console.log(graph.hasCycle())
graph.dfs("A")
