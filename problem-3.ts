{
    //problem-3

    const countWordOccurrences =(str:string, word:string):number=>{
       let result = 0
        const getWords = str.split(" ")
        for (let w of getWords){
             if(w === word){
               result ++
             }
        }
        return result
    
    }
    // console.log(countWordOccurrences("I love typescript ", "typescript"));

}