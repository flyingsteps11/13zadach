const symbolToHTML = require('./index');

const assert = require('assert');

describe("symbolToHTML", function() {

    it('Тип возвращаемых данных должен быть строковым', () => {
        assert.equal(typeof symbolToHTML("ab<ce>"), "string");
    });

    it('Должен вернуть строку с html-кодами', () => {
        assert.equal(symbolToHTML("<&fgf\"gdgf'<grggre>dfg"), '&lt;&amp;fgf&quot;gdgf&apos;&lt;grggre&gt;dfg');
    });
});