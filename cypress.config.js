const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  e2e: {

    'baseurl' : "https://register.rediff.com/register/register.php?FormName=user_details",
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
      
      
    },
   // defaultCommandTimeout: 5000
  },
});
