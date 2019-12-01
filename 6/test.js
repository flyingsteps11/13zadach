const searchAndReplace = require('./index');
const assert = require('assert');
describe("searchAndReplace", function() {

    it('Тип возвращаемых данных должен быть строкой', () => {
        assert.equal(typeof searchAndReplace("sing single single", "single", "s"), "string");
    });

    it('Должен вернуть строку с замененным словом "sing" на "single"', () => {
        assert.equal(searchAndReplace("single sing will reconnect", "sing", "single"), "single single will reconnect");
    });

    it('Должен вернуть строку с замененным словом sing на SING', () => {
        assert.equal(searchAndReplace("Sing single", "Sing", "SING"), "SING single");
    });
});