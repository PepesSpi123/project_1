  Project description. 
Task: create a test framework to test different functionality for  https://www.redmine.org/
1. Create 5 test cases to cover different site functions (in Excel or Word)
2. Automate your test cases in playwright
3. Use Page Object Model POM
4. Generate test results reporting using raid or allure report,
5. Deploy your framework to GitHub.

Running Test: 
1. Running all tests: npm test
2. Running all tests: npx playwright test
3. Running a single test file: npx playwright test login.spec.ts
4. Running tests in headed mode: npx playwright test login.spec.ts --headed

Allure report:
When you run test Allur Report generate automaticly.
1. Generate Allure Report: npm run allure:generate 
2. Open Allure Report: npm allure:open


Project results are uploaded to a folder 'allure-results'. 

