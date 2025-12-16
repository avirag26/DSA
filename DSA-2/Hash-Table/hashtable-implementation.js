// Hash Table

class HastTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    hash(key){
        let total=0;
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key,value){
        let index = this.hash(key)
        this.table[index]=[key,value]
    }
    get(key){
        let index= this.hash(key)
        return this.table[index]
    }

    remove(key){
         let index= this.hash(key)
         this.table[index]=undefined
    }

    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}
const hash = new HastTable(50)
hash.set("name","avirag")
hash.set("roll",5)

console.log(hash.get("name"))
hash.display()


// Hash table with collision handling

class HastTableCollision{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }
    hash(key){
        let total=0 ;
        for(let i=0;i<key.length;i++){
            total +=key.charCodeAt(i)
        }
        return total %this.size
    }
    set(key,value){
        const index = this.hash(key)

        const bucket = this.table[index]
        if(!bucket){
            this.table[index]=[[key,value]]
        } else {
            const samekey=bucket.find(item=>item[0]===key)
            if(samekey){
                samekey[1]=value
            } else {
                bucket.push([key,value])
            }
        }
    }
    get(key){
       const index = this.hash(key)
       const bucket = this.table[index]

       if(bucket){
        const samekey = bucket.find(item => item[0]==key)
        if(samekey){
            return samekey[1]
        }
       }
       return undefined
    }

    remove(key){
          const index = this.hash(key)
       const bucket = this.table[index]

       if(bucket){
        const samekey = bucket.find(item => item[0]==key)
        if(samekey){
           bucket.splice(bucket.indexOf(samekey),1)
           if(bucket.length==0){
            this.table[index]=undefined
           }
        }
       }
       return undefined
    }
    display(){
        for(let i=0;i<this.table.length;i++){
            if(this.table[i]){
                console.log(i,this.table[i])
            }
        }
    }
}

const hashCol = new  HastTableCollision(50)
hashCol.set("name","avirag")
hashCol.set("mane","ashin")
hashCol.set("roll",20)
hashCol.remove("roll")

