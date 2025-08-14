import { defineConfig } from "cypress";

const failFast = require("cypress-fail-fast/plugin"); 

export default defineConfig({
  e2e: {
    baseUrl: "https://magento2-demo.magebit.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    //testIsolation: false,
    retries: 0,
    defaultCommandTimeout: 10000, // timeout padrão de comandos
    setupNodeEvents(on, config) {
      failFast(on, config);
      return config;
    },
  },
});
