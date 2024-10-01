const { defineConfig } = require("cypress");
const { beforeRunHook, afterRunHook } = require('cypress-mochawesome-reporter/lib');


module.exports = defineConfig({
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
    cypressMochawesomeReporterReporterOptions: {
      reportDir: "cypress/reports",
      charts: true,
      reportPageTitle: "market challenge suite",
      embeddedScreenshots: true,
      inlineAssets: true,
      saveJson: true
    },
    mochaJunitReporterReporterOptions: {
      mochaFile: "cypress/reports/junit/results-[hash].xml"
    }
  },
  retries: 1,
  viewportWidth: 1366,
  viewportHeight: 768,
  defaultCommandTimeout: 20000,
  video: false,
  chromeWebSecurity: false,
  experimentalWebKitSupport: true,
  failOnStatusCode: false,
  experimentalUncaughtRequestPolicy: "warn",
  e2e: {
    baseUrl: "https://jp.mercari.com",
    setupNodeEvents(on, config) {
      on('before:run', async (details) => {
        console.log('override before:run');
        await beforeRunHook(details);
      });
      on('after:run', async () => {
        console.log('override after:run');
        await afterRunHook();
      });
    },
    env: {
      lang: "en"
    }
}
});