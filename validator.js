const zipRegex = /^[0-9]{5}(?:-[0-9]{4})?$/;

const isValidZipCode = (zip) =>
{
    return zipRegex.test(zip);
}

exports.isValidZipCode = isValidZipCode;