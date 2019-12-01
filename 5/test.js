const spinalCase = require('./index');
const assert = require('assert');

describe("spinalCase", function() {

    it('Должно вернуть строку fad-da-sad-?-3-211', () => {
        assert.equal(spinalCase("Fad dA SAD ?  3 211"),"fad-da-sad-?--3-211");
    });

    it('Должно вернуть строку ?-`-sad-sad-132-1-23-^', () => {
        assert.equal(spinalCase("? ` sad SaD 132 1 23 ^'"),"?-`-sad-sad-132-1-23-^'");
    });
});
