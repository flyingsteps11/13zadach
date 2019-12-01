const Coincidence = require('./index');
const assert = require('assert');

describe("Coincidence", function() {
    it('Должен вернуть массив [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]', () => {
        assert.deepEqual(Coincidence([{ "apple": 1, "bat": 2 }, { "apple": 1 },
                { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 1, "bat": 2 }) ,
            [{ "apple": 1, "bat": 2 }, { "apple": 1, "bat": 2, "cookie":2 }]);
    });
    it('Должен вернуть пустой массив', () => {
        assert.deepEqual( Coincidence([{ "apple": 1, "bat": 2 }, { "apple": 3 },
                { "apple": 1, "bat": 2, "cookie": 2 }, { "bat":2 }], { "apple": 11, "bat": 12 }) ,
            []);
    });
});

