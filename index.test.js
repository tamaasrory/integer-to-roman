const { expect, test } = require('@jest/globals');
const intoroman = require("./index.js");

test('convert 20 to roman numeral expect XX', () => {
    expect(intoroman(20)).toEqual('XX');
});