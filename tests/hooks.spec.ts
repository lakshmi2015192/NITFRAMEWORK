/*

Hooks: Special methods used to perform the setup and teardown process.

There are 4 types:
1. test.beforeAll()
Executes only once before all test cases.
If you have 10 tests, it runs 1 time.
Ex: DB connection, create test data

2. test.beforeEach()
Executes before every test case.
If you have 10 tests, it runs 10 times.
Ex: Launch URL, login

3. test.afterEach()
Executes after every test case.
Ex: Logout, close browser, take screenshot on failure

4. test.afterAll()
Executes once after all test cases are completed.
Ex: Report generation, DB close, cleanupExecution Order:


Execution Order:javascript
1. beforeAll
2. beforeEach
3. test -> afterEach (repeats for each test)
4. afterAll

*/

import {test, expect} from '@playwright/test';
import { beforeEach } from 'node:test';

test.afterEach(async()=>{
    console.log("afterEach");
})
test.beforeAll(async()=>{
    console.log("before All");
})
test.afterAll(async()=>{
    console.log("after all");
})
test.beforeEach(async()=>{
    console.log("before each");
})

test("test 1",async()=>{
    console.log('testcase 1');
})
test('test 2',async()=>{
    console.log('testcase2');
})
test('test 3',async()=>{
    console.log('testcase3');
})


//eghtfcgyuhjkjhghgjnhjkkj