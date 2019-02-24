module.exports = {
  testMatch: ["**/*.test.js", "**/*.feature", "./__tests__/*.js"],
  globalSetup: "./setup.js",
  globalTeardown: "./teardown.js",
  testEnvironment: "./puppeteer_environment.js",
  transform: {
    "^.+\\.js$": "babel-jest",
    "^.+\\.feature$": "gherkin-jest"
  },
  setupFiles: ["./test/support/index.js", "./test/support/google.js"],
  //"testMatch": ["**/*.test.js", "**/*.feature"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "feature"]
};
