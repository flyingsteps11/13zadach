const izvlechenie = require('./index');

const assert = require('assert');

describe("izvlechenie", function() {
    it('Должно вернуть 23, 23, 1 ', () => {
        assert.equal(izvlechenie([1,2,3], [23,2,3,23]),"23,23,1");
    });

    it('Должно вернуть 1,2,3', () => {
        assert.equal(izvlechenie([1,2,3],[]), "1,2,3");
    });

    it('Должно вернуть 2,3,4', () => {
        assert.equal(izvlechenie([],[2,3,4]), "2,3,4");
    });

    it('Должно вернуть пустой массив', () => {
        assert.equal(izvlechenie([],[]), "");
    });

    it('Должно вернуть as,assault,zhestoko', () => {
        assert.equal(izvlechenie(["summer","assault","zhestoko"],["as","summer"]), "as,assault,zhestoko");
    });
});
