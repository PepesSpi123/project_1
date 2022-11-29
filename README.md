  Project description. 
Task: create a test framework to test different functionality for  https://www.redmine.org/
1. Create 5 test cases to cover different site functions (in Excel or Word)
2. Automate your test cases in playwright
3. Use Page Object Model POM
4. Generate test results reporting using raid or allure report,
5. Deploy your framework to GitHub.

Running Test: 
1. Running all tests: npx playwright test
2. Running a single test file: npx playwright test login.spec.ts
3. Running tests in headed mode: npx playwright test login.spec.ts --headed

Allure report:
1. To run test and specify reporter: npx playwright test --reporter=line,allure-playwright
2. Generate Allure Report: npx allure generate my-allure-results -o allure-report --clean
5. Open Allure Report: npx allure open allure-report

Project results are uploaded to a folder 'allure-report-screenshots' in the form of screenshots.
