import { defineConfig } from "cypress";
const failFast = require("cypress-fail-fast/plugin"); 

export default defineConfig({
  e2e: {
    baseUrl: "https://magento2-demo.magebit.com",
    specPattern: "cypress/e2e/**/*.cy.ts",
    retries: 0,
    defaultCommandTimeout: 10000,
    screenshotOnRunFailure: true,
    video: false,
    videosFolder: "cypress/videos",
    screenshotsFolder: "cypress/screenshots",
    reporter: "mochawesome", // adiciona Mochawesome 
    reporterOptions: {
      reportDir: "cypress/reports",
      overwrite: false,
      html: false,       // vamos gerar HTML depois
      json: true,
    },
    setupNodeEvents(on, config) {
      failFast(on, config);

      // hook para gerar relatório HTML após os testes
      on("after:run", async () => {
        const { merge } = require("mochawesome-merge");
        const marge = require("mochawesome-report-generator");
        const report = await merge({ files: ["cypress/reports/*.json"] });
        await marge.create(report, {
          reportDir: "cypress/reports/html",
          reportTitle: "Cypress Test Report",
          inline: true,
        });
      });

      return config;
    },
  },
});
