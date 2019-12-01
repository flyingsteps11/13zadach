const DeleteArg = require('./index');

const assert = require('assert');

describe("DeleteArg", function() {
    it('Должно вернуть массив [5,7,9]', () => {
        let arr=[1,2,3,5,7,9,2,1];
        DeleteArg(arr,1,2,3);
        assert.deepEqual(arr,[5,7,9]);
    });

    it('Должно вернуть пустой массив', () => {
        let arr=[1,2,3,3,2,1];
        DeleteArg(arr,1,2,3);
        assert.deepEqual(arr,[]);
    });

    it('Должно вернуть массив', () => {
        let arr=[1,2,2,2,3,3,3];
        DeleteArg(arr,1,3,3,3,1);
        assert.deepEqual(arr,[2,2,2]);
    });
});
