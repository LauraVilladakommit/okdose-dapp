require("util").inspect.defaultOptions.depth = 5; // Increase AVA's printing depth
const variables = require("./envVariables.json");

module.exports = {
  timeout: "300000",
  files: ["src/*.ava.ts"],
  failWithoutAssertions: false,
  extensions: ["ts"],
  require: ["ts-node/register"],
  environmentVariables: variables
};
