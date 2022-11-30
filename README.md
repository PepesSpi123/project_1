 # Project description. 
## Task: create a test framework to test different functionality for  https://www.redmine.org/
```
1. Create 5 test cases to cover different site functions (in Excel or Word)
2. Automate your test cases in playwright
3. Use Page Object Model POM
4. Generate test results reporting using raid or allure report,
5. Deploy your framework to GitHub.
```
## Technologies
Project is created with Visual Studio Code:
```
- Version: 1.73.1 (Universal)
- Chromium: 102.0.5005.167
- Node.js: 16.14.2
- V8: 10.2.154.15-electron.0
- OS: Darwin x64 22.1.0
```

## Setup 
To run this project, install it locally:
```
$ cd ../field
$ git clone https://github.com/PepesSpi123/project_1
$ npm init playwright@latest
$ npm test
```

## Running Test: 
```
- Running all tests: npm test
- Running all tests: npx playwright test
- Running a single test file: npx playwright test login.spec.ts
- Running tests in headed mode: npx playwright test login.spec.ts --headed
```

## Allure report:
When you run test Allur Report generate automaticly.
```
- Generate Allure Report: npm run allure:generate 
- Open Allure Report: npm allure:open
```

### Project results are uploaded to a folder 'allure-results'. 

