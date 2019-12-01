//Написать функцию, которая принимает массив различной вложенности и возвращает
//одномерный массив. Например: steamrollArray([1, [2], [3, [[4]]]]) должна вернуть [1, 2, 3, 4]
function steamrollArray(array)
{
    let result=[];
    for (let i=0; i<array.length; i++)
        if (!Array.isArray(array[i]))
            result.push(array[i]);
        else
            result=result.concat(steamrollArray(array[i]));
    return result;
}
module.exports=steamrollArray;

/*function steamrollArray(array){
//let array=[[1,23,4],[5],4321,[[321]]];

 let a =array.reduce((result,num) => result.concat(num),[]);return a
 }
console.log(steamrollArray([1, [2], [3, [[4]]]]));
*/