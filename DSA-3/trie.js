class TrieNode{
    constructor(){
        this.children={}
        this.end=false
    }
}

class Trie {
    constructor(){
        this.root = new TrieNode()
    }
    insertWord(word){
       let node = this.root;

       for(let chr of word){
        if(!node.children[chr]){
            node.children[chr]= new TrieNode()
        }
        node = node.children[chr]
       }
       node.end=true
    }

    search(word){
        let node = this.root 
        for(let chr of word){
        if(!node.children[chr]){
            return false
        }
        node = node.children[chr]
    }
    return node.end
    }

    startsWith(word){
        let node = this.root
        for(let char of word){
            if(!node.children[char])return false
            node = node.children[char]
        }
        return true
    }
    
    autoSuggest(word){
     
        let node = this.root

        for(let chr of word){
            if(!node.children[chr]){
                return []
            }
            node=node.children[chr]
        }
        let result =[]
         this.dfs(node,word,result)
        return result
    }

     dfs(node,word,result){
      
        if(node.end){
            result.push(word)
        }

        for(let chr in node.children){
            this.dfs(node.children[chr],word+chr,result)
        }
    }
}
const trie = new Trie()
trie.insertWord("flower")
trie.insertWord("flow")
trie.insertWord("flop")
trie.insertWord("run")
trie.insertWord("ashin")
console.log(trie.autoSuggest("flow"))
