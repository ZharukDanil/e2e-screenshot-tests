import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  reporter: 'html',
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    headless: true,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'Mobile Chrome (iPhone 13)',
      use: { ...devices['iPhone 13'] },
    }
  ],
  webServer: {
    command: 'npx http-server -p 3000',
    url: 'http://localhost:3000',
    reuseExistingServer: true,
  },
});
