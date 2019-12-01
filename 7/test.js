const fearNotLetter = require('./index');

const assert = require('assert');

describe("fearNotLetter", function() {

    it('Должно вернуть "d"', () => {
        assert.equal(fearNotLetter("abce"), "d");
    });

    it('Тип возвращаемых данных должен быть строковым', () => {
        assert.equal(typeof fearNotLetter("abce"), "string");
    });

    it('Должно вернуть "dfhij"', () => {
        assert.equal( fearNotLetter("abcegk"), "dfhij");
    });
});