//2.Написать функцию, которая на вход принимает два массива и возвращает новый
//массив с элементами найденными только в одном массиве, но не в обоих.
function izvlechenie(arr1, arr2) {
    let newArray = arr2.concat(arr1);
    let result = [];
    for (let i=0 ; i<newArray.length ; i++) {
        if (arr1.indexOf(newArray[i])===-1) {
            result.push(newArray[i]);
        }
        if (arr2.indexOf(newArray[i])===-1) {
            result.push(newArray[i]);
        }
    }
    return result;
}
module.exports=izvlechenie;