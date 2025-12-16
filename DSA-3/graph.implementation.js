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
        let visited = new Set()

        queue.push(start)
        visited.add(start)

        while(queue.length > 0){
            const vertex = queue.shift()
            console.log(vertex)
            for(let neighbour of this.adjecencyList[vertex]){
                if(!visited.has(neighbour)){
                    visited.add(neighbour)
                    queue.push(neighbour)
                }
            }
        }
    }
    dfs(start){
        let stack=[start]
        let visited = new Set()

        while(stack.length>0){
            let vertex = stack.pop()
            if(!visited.has(vertex)){
                visited.add(vertex)
                console.log(vertex)

                for(let neighbour of this.adjecencyList[vertex]){
                    if(!visited.has(neighbour)){
                    stack.push(neighbour)
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
}
const graph = new Graph()
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")

graph.addEedges("A","B")
graph.addEedges("B","C")
graph.addEedges("C","D")
// graph.display()
// console.log(graph.hasEdges("A","B"))
// graph.removeVertex("A")
// graph.display()
graph.bfs("A")
console.log("---------------")
graph.dfs("A")
