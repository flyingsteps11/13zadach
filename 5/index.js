//5.Написать функцию, которая конвертирует строку в spinal-case регистр.
function spinalCase(str){
    return str.split(" ").map(word => word.toLowerCase()).join('-');
}

/*нерабочий вариат
function spinalCase(str) {
    var prob= /\s+|_+/g;
    str = str.replace(/([a-z])([A-Z])/g, '$1');
    return str.replace(prob, '-').toLowerCase();
}
console.log(spinalCase("Fad SaS sdadsdadas SAD? 3 2321"));
*/
module.exports = spinalCase;