const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://app-url.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if (config.env.ENVIRONMENT == "AppTests"){
        
        return{
          baseUrl:'https://AppUrl.com',
          specPattern: "cypress/e2e/AppTests/**/*.cy.{js,jsx}",
          chromeWebSecurity: false
        }
      }
      else if (config.env.ENVIRONMENT == "ExamAPPTests"){
        return{
          baseUrl:"https://appTesturl.com?examId=6290b696cb386f0004cbef07&token=Bearer%20eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzaGVoc2F3YXIuYWxpKzQ2QGFyYmlzb2Z0LmNvbSIsInNjb3BlcyI6WyJWRVJJRklFRCJdfQ.i3HqDp_yy2XIUZLIJL6UbplGF81_FoO9u_XC6fCdBUZIuRonI_JrafhfN1sBVFJziCaYzuk1g5tRgoh_EYez4w",
          specPattern: "cypress/e2e/ExamAPPTests/**/*.cy.js",
          chromeWebSecurity: false
        }
      }
    },
  },
});
