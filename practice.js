class Graph{
    constructor(){
        this.adjacencyList={}

    }
    addVertex(vertex){
      if(!this.adjacencyList[vertex]){
        this.adjacencyList[vertex]=new Set()
      }
    }
    addEdges(vertex1,vertex2){
        if(!this.adjacencyList[vertex1]){
            this.addVertex(vertex1)
        }
        if(!this.adjacencyList[vertex2]){
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    removeEdges(vertex1,vertex2){
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)
    }
    removeVertex(vertex){
        
        for(let adjacent of this.adjacencyList[vertex]){
            this.removeEdges(vertex,adjacent)
        }
        delete this.adjacencyList[vertex]
    }
    bfs(start){
        let queue=[]
        let visited=new Set()
        queue.push(start)
        visited.add(start)
        while(queue.length){
            let vertex = queue.shift()
            console.log(vertex)
            for(let adj of this.adjacencyList[vertex]){
                if(!visited.has(adj)){
                    queue.push(adj)
                    visited.add(adj)
                }
            }
        }
    }
    dfs(start){
        let stack=[]
        let visited=new Set()
        stack.push(start)
        while(stack.length){
            let vertex = stack.pop()
            if(!visited.has(vertex)){
                console.log(vertex)
                visited.add(vertex)

                for(let adj of this.adjacencyList[vertex]){
                    if(!visited.has(adj)){
                        stack.push(adj)
                    }
                }
            }

        }
    }
    display(){
        for(let adj in this.adjacencyList){
            console.log(adj+ ' -> '+[...this.adjacencyList[adj]])
        }
    }

    hasCycle(){
      let visited=new Set()

      for(let vertex in this.adjacencyList){
        if(!visited.has(vertex)){
           if(this.helperCycle(vertex,visited,null)){
            return true
           }
        }
      }
      return false
    }
    helperCycle(vertex,visited,parent){
        visited.add(vertex)

        for(let neighbour of this.adjacencyList[vertex]){
            if(!visited.has(neighbour)){
                if(this.helperCycle(neighbour,visited,vertex)){
                    return true
                }
            }
            else if(neighbour!==parent){
            return true
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
graph.addEdges("A","B")
graph.addEdges("B","C")
graph.addEdges("C","D")
graph.addEdges("D","A")
console.log(graph.hasCycle())
