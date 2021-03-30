const validator = require('../validator');

describe("validator test", function () {
    // verifies if returns true for valid zip.
    it("test valid zip", function () {
        expect(validator.isValidZipCode('08863')).toBeTrue();
    });

    // verifies if returns false for invalid zip.
    it("text invalid zip", function() {
        expect(validator.isValidZipCode("abcde")).toBeFalse();
    });
});