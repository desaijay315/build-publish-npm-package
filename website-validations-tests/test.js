const { isValidWebsite, validateEmail } = require('website-validations');

console.log(isValidWebsite('www'));
console.log(isValidWebsite('http://www.hashnode.com'));
console.log(validateEmail('yourid@.com'));
console.log(validateEmail('yourid@domain.com'));
