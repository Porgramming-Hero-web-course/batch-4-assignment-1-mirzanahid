{
    //problem-2:

    const removeDuplicates =(arr:number[]):number[]=>{

        return arr.filter((value, index)=> arr.indexOf(value)===index)
    }

    // console.log(removeDuplicates([1,1, 2, 2, 3, 4, 4, 5]))
}