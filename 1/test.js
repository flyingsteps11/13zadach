const sumAll = require('./index');

const assert = require('assert');

describe("sumAll", function() {
    it('Должно вернуть 10', () => {
        assert.equal(sumAll([4, 1]), 10);
    });

    it('Должно вернуть misha1sasha2', () => {
        assert.equal(sumAll(["misha1", "sasha2"]), "misha1sasha2");
    });
});
