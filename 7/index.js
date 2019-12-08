//Написать функцию, которая на вход принимает последовательность букв и ищет
//пропущенные буквы. Если все буквы присутствуют в диапазоне, то возвращается
//undefined. Например: fearNotLetter("abce") должна вернуть "d
function fearNotLetter(str) {
    let str1 = str.toLowerCase().split('');
    let  arr = "";
    if(str1[0]==="a"){
        for(let i=0;i<=str1.length;i++){
            if(i+1<str1.length){
                num1 = parseInt(str1[i].charCodeAt(0)) + 1;
                num2 = parseInt(str1[i+1].charCodeAt(0));
                if(num1!=num2){
                    arr = arr + String.fromCharCode(num1);
                }
            }
        }
        return arr;
    }
}
module.exports = fearNotLetter;