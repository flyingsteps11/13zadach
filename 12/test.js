const steamrollArray = require('./index');

const assert = require('assert');

describe("steamrollArray", function() {

    it('Должен вернуть [1,2,3,4]', () => {
        assert.deepEqual(steamrollArray(([1, [2], [3, [[4]]]])),[1,2,3,4]);
    });

    it('Должен вернуть [1,3,4,5]', () => {
        assert.deepEqual(steamrollArray([1, [3], [4, [5]]]),[1,3,4,5]);
    });

    it('Должен вернуть []', () => {
        assert.deepEqual(steamrollArray([]),[]);
    });

});