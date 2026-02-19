const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://map.uniflydemo47-iat.unifly.tech/",
    video: false,
    setupNodeEvents(on, config) {
      return config;
    },
  },
});