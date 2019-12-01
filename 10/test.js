const sumPrimeNumbers = require('./index');

const assert = require('assert');

describe("sumPrimeNumbers", function() {

    it('Должно вернуть число 17', () => {
        assert.equal(sumPrimeNumbers(10), 17);
    });

    it('Тип возвращаемых данных должен быть number', () => {
        assert.equal(typeof sumPrimeNumbers(10), "number");
    });

    it('Должно вернуть 2', () => {
        assert.equal(sumPrimeNumbers(2), 2);
    });

    it('Должно вернуть false', () => {
        assert.equal(sumPrimeNumbers(1), false);
    });

    it('Должно вернуть false', () => {
        assert.equal(sumPrimeNumbers(-3), false);
    });
});