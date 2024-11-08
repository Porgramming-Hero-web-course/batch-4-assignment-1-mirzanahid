{
 //Problem-1:

    function sumArray( arr:number[]):number{
       const sum = arr.reduce((acc, curr) => acc + curr,0)
        return sum
    }
    // console.log(sumArray([1, 2, 3, 4, 5]))
}