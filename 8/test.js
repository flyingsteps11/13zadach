const uniqueValues = require('./index');

const assert = require('assert');

describe("uniqueValues", function() {

    it('Должен вернуть массив [1,2,3]', () => {
        assert.deepEqual(uniqueValues([1,2,3]), [1,2,3]);
    });

    it('Должно вернуть массив [1,2,3,325]', () => {
        assert.deepEqual(uniqueValues([1,2,3,325,],[1,2,325]),[1,2,3,325]);
    });
});