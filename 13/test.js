const twoArguments = require('./index');

const assert = require('assert');

describe("twoArguments", function() {

    it('Тип возвращаемых данных должен быть number', () => {
        assert.equal(typeof twoArguments(2, 3), 'number');
    });

    it('Должен вернуть 8', () => {
        assert.equal(twoArguments(4, 4), 8);
    });

    it('Тип возвращаемых данных должен быть string', () => {
        assert.equal(typeof twoArguments("ak", "bl"), 'string');
    });

    it('Должен вернуть abcde', () => {
        assert.equal(twoArguments("ab", "cde"), 'abcde');
    });

    it('Должен вернуть ab', () => {
        assert.equal(twoArguments("ab", " "), 'ab ');
    });
});