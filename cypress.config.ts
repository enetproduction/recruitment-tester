import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://www.saucedemo.com/',
    chromeWebSecurity: false,
  },
});
