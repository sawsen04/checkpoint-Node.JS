const generator = require("generate-password");

const password = generator.generate({
  length: 20,
  numbers: true,
  symbols: true,
  lowercase: true,
  uppercase: true,
});

console.log(password);