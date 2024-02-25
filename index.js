const random = require("random-string-generator");

for (let x = 0; x < 100000000; x++) {
  console.log(`https://discord.gift/${random(19)}`);
}
