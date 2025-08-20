import { defineConfig } from "cypress";
const failFast = require("cypress-fail-fast/plugin"); 

export default defineConfig({
  e2e: {
    baseUrl: "https://magento2-demo.magebit.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    retries: 0,
    defaultCommandTimeout: 10000, // timeout padrão de comandos
    screenshotOnRunFailure: true, // captura screenshot ao falhar
    video: false,                   
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    setupNodeEvents(on, config) {
      failFast(on, config);
      return config;
    },
  },
});
